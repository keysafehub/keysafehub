import Stripe from "stripe";
import { google } from "googleapis";
import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function getRawBody(req) {
  return await new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => resolve(data));
    req.on("error", (err) => reject(err));
  });
}

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

  // ⭐ PROCESSA SOLO QUESTO EVENTO
  if (event.type !== "checkout.session.completed") {
    return res.status(200).send("ignored");
  }

  const session = event.data.object;

  const customerEmail =
    session.customer_details?.email || session.customer_email;

  const productName = session.metadata?.product || "Prodotto";

  if (!customerEmail) {
    console.error("ERRORE: Email non trovata nei dati di Stripe");
    return res.status(200).json({ error: "Email missing" });
  }

  try {
    const sheets = await getSheetsClient();

    const sheet = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Foglio1!A:G",
    });

    const rows = sheet.data.values;
    if (!rows) throw new Error("Foglio Google vuoto o non accessibile");

    // ⭐ TROVA SOLO LA PRIMA LICENZA DISPONIBILE
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
      await sendEmail(
        customerEmail,
        "Licenze esaurite",
        "Siamo spiacenti, le licenze sono terminate."
      );
      return res.status(200).json({ ok: true });
    }

    // ⭐ PREPARA LA LICENZA
    const license = {
      license: available.row[0],
      type: available.row[1],
      rowIndex: available.index + 1,
    };

    // ⭐ MARCA COME USATA
    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `Foglio1!A${license.rowIndex}:G${license.rowIndex}`,
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            license.license,
            license.type,
            productName,
            "TRUE",
            customerEmail,
            new Date().toISOString(),
            event.id,
          ],
        ],
      },
    });

    // ⭐ INVIA UNA SOLA EMAIL CON UNA SOLA LICENZA
    const emailText = `Grazie per il tuo acquisto!

Ecco la tua licenza per: ${productName}

${license.type}: ${license.license}

Se hai bisogno di aiuto, rispondi a questa email.

KeySafeHub`;

    await sendEmail(customerEmail, "La tua licenza", emailText);
    console.log("Email inviata con successo!");
  } catch (err) {
    console.error("ERRORE WEBHOOK:", err.message);
    return res.status(500).send("Internal Server Error");
  }

  // ⭐ RISPOSTA CORRETTA → Stripe NON RIPETE
  res.status(200).json({ received: true });
}
