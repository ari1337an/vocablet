import { auth } from "@/server/authentication/auth";
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function createCheckoutSession(
  priceId: string
) {
  try {
    // Check if the user is authenticated, if not return unauthorized, else get the user id and email
    const userSession = await auth();
    if (
      !userSession ||
      !userSession.user ||
      !userSession.user.userId ||
      !userSession.user.email
    ) {
      return { success: false, message: "Unauthorized!" };
    }
    const userId = userSession.user.userId as string;
    const email = userSession.user.email as string;

    if (!priceId) {
      return { success: false, message: "Invalid Price ID!" };
    }

    // Set the session mode based on the plan type
    let sessionMode = "subscription";
   
    // Create a new checkout session
    const session = await stripe.checkout.sessions.create({
      allow_promotion_codes: true,
      metadata: {
        user_id: userId,
        price_id: priceId,
      },
      customer_email: email,
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `https://${process.env.AWS_SES_DOMAIN}/subscription/success`,
      cancel_url: `https://${process.env.AWS_SES_DOMAIN}/subscription/cancel`,
    });

    return { success: true, stripeSessionId: session.id };
  } catch (error) {
    return { success: false, message: "Failed to create checkout session!" };
  }
}
