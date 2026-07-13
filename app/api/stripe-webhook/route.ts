import Stripe from "stripe";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import { emailTemplates } from "@/lib/emailTemplates";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

async function getSheetsClient() {
  const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT!);
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: serviceAccount.client_email,
      private_key: serviceAccount.private_key.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

async function sendEmail(to: string, subject: string, text: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"KeySafeHub" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
  });
}

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const sig = req.headers.get("stripe-signature")!;
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ ignored: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const customerEmail = session.customer_details?.email || session.customer_email;
  const productName = session.metadata?.product || "Prodotto";

  if (!customerEmail) {
    console.error("ERRORE: Email non trovata nei dati di Stripe");
    return NextResponse.json({ error: "Email missing" });
  }

  try {
    const sheets = await getSheetsClient();

    const sheet = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Foglio1!A:G",
    });

    const rows = sheet.data.values;
    if (!rows) throw new Error("Foglio Google vuoto o non accessibile");

    const available = rows
      .map((row, index) => ({ row, index }))
      .find((r) => {
        const sheetProduct = r.row[2]?.toString().trim().toLowerCase();
        const sheetUsed = r.row[3]?.toString().trim().toLowerCase();
        const stripeProduct = productName.toString().trim().toLowerCase();
        return sheetProduct === stripeProduct && sheetUsed === "false";
      });

    if (!available) {
      console.warn("Licenze esaurite per:", productName);
      await sendEmail(customerEmail, "Licenze esaurite", "Siamo spiacenti, le licenze sono terminate.");
      return NextResponse.json({ ok: true });
    }

    const license = {
      license: available.row[0],
      type: available.row[1],
      rowIndex: available.index + 1,
    };

    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `Foglio1!A${license.rowIndex}:G${license.rowIndex}`,
      valueInputOption: "RAW",
      requestBody: {
        values: [[
          license.license,
          license.type,
          productName,
          "TRUE",
          customerEmail,
          new Date().toISOString(),
          event.id,
        ]],
      },
    });

    const templateKey = productName.toLowerCase().trim();
    const template = (emailTemplates as any)[templateKey];

    if (!template) {
      console.error("Template email non trovato per:", templateKey);
      await sendEmail(customerEmail, "La tua licenza", `Grazie per il tuo acquisto!\n\nLicenza: ${license.license}`);
      return NextResponse.json({ ok: true });
    }

    const emailText = template.buildMessage(license.license, productName);
    await sendEmail(customerEmail, template.subject, emailText);
    console.log("Email inviata con template:", templateKey);
  } catch (err: any) {
    console.error("ERRORE WEBHOOK:", err.message);
    return new NextResponse("Internal Server Error", { status: 500 });
  }

  return NextResponse.json({ received: true });
}
