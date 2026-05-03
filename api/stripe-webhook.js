import Stripe from "stripe";
import { google } from "googleapis";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// -----------------------------
// RAW BODY READER (senza micro)
// -----------------------------
async function getRawBody(req) {
  return await new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => resolve(data));
    req.on("error", (err) => reject(err));
  });
}

// -----------------------------
// GOOGLE SHEETS SETUP
// -----------------------------
async function getSheetsClient() {
  const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: serviceAccount.client_email,
      private_key: serviceAccount.private_key.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

// -----------------------------
// EMAIL SENDER
// -----------------------------
async function sendEmail(to, subject, text) {
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

// -----------------------------
// MAIN HANDLER
// -----------------------------
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const rawBody = await getRawBody(req);
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const customerEmail = session.customer_email;
    const productName = session.metadata.product;
    const sheets = await getSheetsClient();

    // 1. LEGGI TUTTE LE RIGHE DEL FOGLIO (CORRETTO)
    const sheet = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Foglio1!A:G",
    });

    const rows = sheet.data.values;

    // 2. TROVA LE LICENZE NECESSARIE
    const neededLicenses = rows
      .map((row, index) => ({ row, index }))
      .filter(
        (r) =>
          r.row[2] === productName && // product_group
          r.row[3] === "FALSE" // used
      );

    if (neededLicenses.length === 0) {
      await sendEmail(
        customerEmail,
        "Licenze esaurite",
        "Siamo spiacenti, le licenze per questo prodotto sono terminate."
      );
      return res.status(200).json({ ok: true });
    }

    // 3. PRENDI TUTTE LE LICENZE DEL PRODOTTO
    const licensesToSend = neededLicenses.map((l) => ({
      license: l.row[0],
      type: l.row[1],
      rowIndex: l.index + 1,
    }));

    // 4. MARCA LE LICENZE COME USATE (CORRETTO)
    for (const lic of licensesToSend) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: `Foglio1!A${lic.rowIndex}:G${lic.rowIndex}`,
        valueInputOption: "RAW",
        requestBody: {
          values: [
            [
              lic.license,
              lic.type,
              productName,
              "TRUE",
              customerEmail,
              new Date().toISOString(),
              event.id,
            ],
          ],
        },
      });
    }

    // 5. PREPARA EMAIL
    let emailText = `Grazie per il tuo acquisto!\n\nEcco le tue licenze per: ${productName}\n\n`;

    for (const lic of licensesToSend) {
      emailText += `${lic.type}: ${lic.license}\n`;
    }

    emailText += `\nSe hai bisogno di aiuto, rispondi a questa email.\n\nKeySafeHub`;

    // 6. INVIA EMAIL
    await sendEmail(customerEmail, "Le tue licenze", emailText);
  }

  res.status(200).json({ received: true });
}
