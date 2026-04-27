const nodemailer = require("nodemailer");

async function sendLicenseEmail(to, productName, license) {
  const transporter = nodemailer.createTransport({
    host: "smtp.aruba.it",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // 
      pass: process.env.EMAIL_PASS  // 
    }
  });

  const mailOptions = {
    from: `KeySafeHub <${process.env.EMAIL_USER}>`,
    to,
    subject: `La tua licenza ${productName} è pronta`,
    text: `
Grazie per il tuo acquisto su KeySafeHub.

Prodotto: ${productName}
Licenza: ${typeof license === "string" ? license : JSON.stringify(license)}

Istruzioni:
1. Scarica il software originale
2. Inserisci la chiave
3. Attiva online

Assistenza: ${process.env.EMAIL_USER}
Rispondiamo entro 24 ore.
    `
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { sendLicenseEmail };
