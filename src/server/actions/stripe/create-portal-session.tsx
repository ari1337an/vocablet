import { auth } from "@/server/authentication/auth";
import SubscriptionRepo from "@/server/database/repositories/subscription";
import { PlanType } from "@prisma/client";
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function createPortalSession(stripeCustomerId: string) {
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

    // Check if the user and the stripeCustomerId match in the database
    const subscription = await SubscriptionRepo.findSubscriptionByStripeCustomerId(stripeCustomerId);
    if(subscription?.userId !== userId) {
        return { success: false, message: "Unauthorized!" };
    }

    if (!stripeCustomerId) {
      return { success: false, message: "Invalid Customer ID!" };
    }

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: `https://${process.env.AWS_SES_DOMAIN}/subscription`,
    });

    return { success: true, id: portalSession.id, url: portalSession.url };
  } catch (error) {
    return {
      success: false,
      message: "Failed to create billing portal session!",
    };
  }
}
