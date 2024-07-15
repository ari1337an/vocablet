"use server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function getMessageLimitFromPriceId(priceId: string) {
  try {
    const price = await stripe.prices.retrieve(priceId);
    const product = await stripe.products.retrieve(price.product as string);
    const message_limit = product.metadata.messages_limit;
    if (!message_limit) {
      throw new Error("Couldn't get priceId from message limit.");
    }
    return parseInt(message_limit);
  } catch (error) {
    throw new Error("Couldn't get priceId from message limit.");
  }
}
