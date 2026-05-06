import Stripe from "stripe";

export async function POST(req) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const body = await req.json();
    const { productName, priceId } = body;

    console.log("BODY:", body);
    console.log("productName:", productName);
    console.log("priceId:", priceId);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      metadata: {
        product: productName,
      },
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/cancel`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
    });
  } catch (err) {
    console.error("Errore Stripe:", err);
    return new Response(JSON.stringify({ error: "Stripe error" }), {
      status: 500,
    });
  }
}
