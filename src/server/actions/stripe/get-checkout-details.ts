"use server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function getCheckoutDetails(sessionId: string) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId) as Stripe.Checkout.Session;
    // const customer = await stripe.customers.retrieve(session.customer as string) as Stripe.Customer;
    if(session.payment_status === "unpaid"){
      throw new Error("Invalid Session");   
    }
    console.log(session)
    return {success: true, currency: session.currency?.toUpperCase() || "USD", value: (session.amount_total as number)/100.0 }
  } catch (error) {
    console.log(error)
    return {success: false, message: "Invalid Session!"}
  }
}
