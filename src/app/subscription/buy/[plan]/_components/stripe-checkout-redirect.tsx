"use client";

import React, { useEffect, useRef, useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Progress } from "@/app/_components/ui/progress";

export default function StripeCheckOutRedirect({
  stripeSessionId,
}: {
  stripeSessionId: string;
}) {
  const [progress, setProgress] = useState(13);

  // Create a ref to track if the effect has run
  const hasEffectRun = useRef(false);

  useEffect(() => {
    if (
      stripeSessionId === undefined ||
      stripeSessionId === null ||
      hasEffectRun.current === true
    )
      return;

    const handleCheckout = async () => {
      const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      );
      const stripe = await stripePromise;
      await stripe?.redirectToCheckout({ sessionId: stripeSessionId });
    };

    // Set the flag to indicate the effect has run
    hasEffectRun.current = true;

    setProgress(33);
    setTimeout(() => {
      setProgress(88);
    }, 2000);
    setTimeout(() => {
      setProgress(100);
      handleCheckout();
    }, 3100);
  }, [stripeSessionId]);

  return (
    <main className="min-h-screen h-full flex flex-col items-center justify-center gap-y-5">
      <div>Setting up payment gateway...</div>
      <Progress value={progress} className="w-[50%] lg:w-[20%]" />
    </main>
  );
}
