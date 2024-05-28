"use client";

import React, { useEffect, useRef, useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Progress } from "@/app/_components/ui/progress";
import createPortalSession from "@/server/actions/stripe/create-portal-session";

export default function StripeBillingRedirect({
  stripeBillingSessionUrl,
}: {
  stripeBillingSessionUrl: string;
}) {
  const [progress, setProgress] = useState(13);

  // Create a ref to track if the effect has run
  const hasEffectRun = useRef(false);

  useEffect(() => {
    if (
      stripeBillingSessionUrl === undefined ||
      stripeBillingSessionUrl === null ||
      hasEffectRun.current === true
    )
      return;

    const handleBilling = async () => {
      window.location.href = stripeBillingSessionUrl;
    };

    // Set the flag to indicate the effect has run
    hasEffectRun.current = true;

    setProgress(33);
    setTimeout(() => {
      setProgress(88);
    }, 2000);
    setTimeout(() => {
      setProgress(100);
      handleBilling();
    }, 3100);
  }, [stripeBillingSessionUrl]);

  return (
    <main className="min-h-screen h-full flex flex-col items-center justify-center gap-y-5">
      <div>Setting up billing session...</div>
      <Progress value={progress} className="w-[50%] lg:w-[20%]" />
    </main>
  );
}
