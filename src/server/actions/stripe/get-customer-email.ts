"use server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function getCustomerEmail(customerId: string) {
  try {
    // Retrieve all details for the customer
    const customer = (await stripe.customers.retrieve(
      customerId
    )) as Stripe.Customer;

    if (!customer.email) {
      // throw new Error("Email couldn't be retrieved!");
      return null;
    }

    return customer.email;
  } catch (error) {
    // throw new Error("Email couldn't be retrieved!");
  }
}
