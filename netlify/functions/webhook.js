const fs = require("fs");
const path = require("path");
const Stripe = require("stripe");
const { sendLicenseEmail } = require("./sendEmail");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const sig = event.headers["stripe-signature"];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let stripeEvent;

  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      endpointSecret
    );
  } catch (err) {
    console.error("Invalid signature", err.message);
    return { statusCode: 400, body: "Invalid signature" };
  }

  if (stripeEvent.type === "checkout.session.completed") {
    const session = stripeEvent.data.object;

    const email = session.customer_details.email;
    const productId = session.metadata.product_id;

    const filePath = path.resolve("netlify/functions/licenses.json");
    const raw = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(raw);

    const licenseList = data[productId];

    if (!licenseList || licenseList.length === 0) {
      console.error("No licenses available for", productId);
      return { statusCode: 500, body: "No licenses available" };
    }

    const license = licenseList.shift();

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    await sendLicenseEmail(email, productId, license);

    return { statusCode: 200, body: "License sent" };
  }

  return { statusCode: 200, body: "OK" };
};
