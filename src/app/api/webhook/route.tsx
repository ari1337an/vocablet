import SubscriptionRepo from "@/server/database/repositories/subscription";
import EntitlementRepo from "@/server/database/repositories/entitlement";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import getCustomerSubscriptionPriceId from "@/server/actions/stripe/get-priceid-from-customer-id";
import getCustomerEmail from "@/server/actions/stripe/get-customer-email";
import UserRepo from "@/server/database/repositories/user";

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

      // make sure this is not null (assert it in the business logic, not here)
      const customer_email = session.customer_email;

      // priceId will be available now no matter what
      const priceId = await getCustomerSubscriptionPriceId(
        session.customer as string
      );

      await SubscriptionRepo.assignSubscription(
        customer_email as string,
        session.customer as string,
        priceId,
        session.subscription as string
      );
    } else if (event.type === "customer.subscription.updated") {
      const subscription = event.data.object as Stripe.Subscription;
      const customerId = subscription.customer as string;

      if (
        await SubscriptionRepo.findSubscriptionByStripeCustomerId(customerId)
      ) {
        const priceId = subscription.items.data[0].price.id;
        if (priceId) {
          await SubscriptionRepo.updatePriceIdForCustomer(customerId, priceId);
        }

        await SubscriptionRepo.updateExpires(
          customerId,
          subscription.cancel_at as number
        );
      }
    } else if (event.type === "customer.subscription.deleted") {
      const subscription = event.data.object as Stripe.Subscription;
      const customerId = subscription.customer as string;

      if (
        await SubscriptionRepo.findSubscriptionByStripeCustomerId(customerId)
      ) {
        await EntitlementRepo.clearEntitlementOfUserByCustomerId(customerId);
        await SubscriptionRepo.deleteSubscription(customerId);
      }
    } else if (event.type === "invoice.paid") {
      const invoice = event.data.object as Stripe.Invoice;
      const customerId = invoice.customer;
      const customerEmail = invoice.customer_email;

      if (
        await SubscriptionRepo.findSubscriptionByStripeCustomerId(
          customerId as string
        )
      ) {
        await EntitlementRepo.markEntitlementsOfSubscriptionIdAsActive(
          customerEmail as string
        );
        await SubscriptionRepo.markAsSuccessfullyRenewed(customerId as string);
      } else {
        if (invoice.billing_reason !== "subscription_create") {
          throw new Error("Subscription not found in database!");
        }
      }
    } else if (event.type === "invoice.payment_failed") {
      const invoice = event.data.object as Stripe.Invoice;
      const customerId = invoice.customer;
      const customerEmail = invoice.customer_email;

      const subscription =
        await SubscriptionRepo.findSubscriptionByStripeCustomerId(
          customerId as string
        );
      if (subscription) {
        // if the subscription is active, we can stop it by marking it as failed and email the user
        if (!subscription.stripeInvoiceFailed) {
          // TODO: email the user about the payment failure and tell them to update their payment method in billing portal
          await EntitlementRepo.markEntitlementsOfSubscriptionIdAsInactive(
            customerEmail as string
          );

          await SubscriptionRepo.markAsFailedToRenew(customerId as string);
        }
      } else {
        if (invoice.billing_reason !== "subscription_create") {
          throw new Error("Subscription not found in database!");
        }
      }
    } else if (
      event.type === "entitlements.active_entitlement_summary.updated"
    ) {
      const entitlementsSummary = event.data
        .object as Stripe.Entitlements.ActiveEntitlementSummary;
      const customerId = entitlementsSummary.customer;
      const newEntitlements = entitlementsSummary.entitlements.data.map(
        (entitlement: any) => entitlement.lookup_key
      );

      if (newEntitlements && newEntitlements.length == 0) {
        await EntitlementRepo.clearEntitlementOfUserByCustomerId(customerId);
      } else {
        // Get customer email from customerId and validate its existance
        const customerEmail = await getCustomerEmail(customerId);
        if (customerEmail) {
          const user = await UserRepo.findUserByEmail(customerEmail);
          if (!user) {
            throw new Error(
              `No user found with customer email: ${customerEmail}`
            );
          }

          // Assign the new entitlements to the user
          await EntitlementRepo.assignEntitlementToUser(
            user.id,
            newEntitlements
          );
        } else {
          // don't worry, the customer has already been deleted
        }
      }
    } else {
      throw new Error(`Invalid event type: ${event.type}!`);
    }

    return NextResponse.json({ message: "success" });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
