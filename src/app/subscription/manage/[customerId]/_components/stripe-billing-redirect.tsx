"use client";

import React, { useEffect, useRef, useState } from "react";

import { Progress } from "@/app/_components/ui/progress";
import { useRouter } from "next/navigation";

export default function StripeBillingRedirect({
  stripeBillingSessionUrl,
}: {
  stripeBillingSessionUrl: string;
}) {
  const [progress, setProgress] = useState(13);
  const router = useRouter();

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
      router.push(stripeBillingSessionUrl);
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
  }, [stripeBillingSessionUrl, router]);

  return (
    <main className="min-h-screen h-full flex flex-col items-center justify-center gap-y-5">
      <div>Setting up billing session...</div>
      <Progress value={progress} className="w-[50%] lg:w-[20%]" />
    </main>
  );
}
