"use server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function getCustomerSubscriptionPriceId(
  customerId: string
) {
  try {
    // Retrieve all subscriptions for the customer
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
    });

    if (subscriptions.data.length === 0) {
      throw new Error("Customer do not have any subscriptions!");
    }

    // Assuming the customer has only one subscription
    const subscription = subscriptions.data[0];

    // Get the price ID from the subscription items
    const priceId = subscription.items.data[0].price.id;
    return priceId;
  } catch (error) {
    throw new Error("PriceID couldn't be retrieved!");
  }
}
