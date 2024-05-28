import SubscriptionRepo from "@/server/database/repositories/subscription";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get("stripe-signature");

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        rawBody,
        signature!,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (error: any) {
      return NextResponse.json({ message: "Webhook Error" }, { status: 400 });
    }

    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session: Stripe.Checkout.Session = event.data.object;
      const userId = session.metadata?.user_id as string;
      const priceId = session.metadata?.price_id as string;
      const maxUsageUnit = parseInt(session.metadata?.max_usage_limit as string);
      
      await SubscriptionRepo.assignSubscription(
        userId,
        session.customer as string,
        priceId,
        session.subscription as string,
        maxUsageUnit
      );
    }

    if (event.type === "customer.subscription.updated") {
      const subscription: Stripe.Subscription = event.data.object;
      await SubscriptionRepo.updateExpires(
        subscription.id,
        subscription.cancel_at as number
      );
    }

    if (event.type === "customer.subscription.deleted") {
      const subscription = event.data.object;

      await SubscriptionRepo.deleteSubscription(
        subscription.id,
        subscription.cancel_at as number
      );
    }

    return NextResponse.json({ message: "success" });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
