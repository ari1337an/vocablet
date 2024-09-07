import { auth } from "@/server/authentication/auth";
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function createCheckoutSession(priceId: string) {
  try {
    // Check if the user is authenticated, if not return unauthorized, else get the user id and email
    const userSession = await auth();
    const userId = userSession?.user.userId as string;
    const email = userSession?.user.email as string;

    if (!priceId) {
      return { success: false, message: "Invalid Price ID!" };
    }

    // Set the session mode based on the plan type
    let sessionMode = "subscription";

    // Create a new checkout session
    if (
      !userSession ||
      !userSession.user ||
      !userSession.user.userId ||
      !userSession.user.email
    ) {
      // if user is not logged in 
      const session = await stripe.checkout.sessions.create({
        allow_promotion_codes: true,
        metadata: {
          user_id: userId,
          price_id: priceId,
        },
        payment_method_types: ["card"],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: "subscription",
        success_url: `https://${process.env.AWS_SES_DOMAIN}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `https://${process.env.AWS_SES_DOMAIN}/subscription/cancel`,
      });

      return { success: true, stripeSessionId: session.id };
    }else{
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
        success_url: `https://${process.env.AWS_SES_DOMAIN}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `https://${process.env.AWS_SES_DOMAIN}/subscription/cancel`,
      });
  
      return { success: true, stripeSessionId: session.id };
    }
  } catch (error) {
    return { success: false, message: "Failed to create checkout session!" };
  }
}
