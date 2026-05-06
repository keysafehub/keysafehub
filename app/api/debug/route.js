export async function GET() {
  return new Response(
    JSON.stringify({
      stripeKey: process.env.STRIPE_SECRET_KEY || "NOT_FOUND",
    }),
    { status: 200 }
  );
}
