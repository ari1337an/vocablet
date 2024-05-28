"use client";

import React, { useEffect, useState, useRef } from "react";
import MessageComponent, { Response } from "../../_components/message/message";
import { Progress } from "../../_components/ui/progress";
import verifyTokenUseCase from "@/server/actions/email/verify-token-usecase";

export default function VerifyEmail({ code }: { code: string | null }) {
  const [progress, setProgress] = useState(13);
  const [response, setResponse] = useState<Response | null>(null);

  // Create a ref to track if the effect has run
  const hasEffectRun = useRef(false);

  useEffect(() => {
    if (code === undefined || code === null || hasEffectRun.current === true)
      return;

    // Set the flag to indicate the effect has run
    hasEffectRun.current = true;

    setProgress(33);
    verifyTokenUseCase(code)
      .then((response: Response) => {
        setProgress(66);
        setResponse(response);
        setTimeout(() => setProgress(88), 1500);
        setTimeout(() => setProgress(100), 3000);
      })
      .catch((error) => {
        setResponse({
          success: false,
          message: "An error occurred while verifying the token.",
        });
        setProgress(100);
      });
  }, [code]);

  if (!code) {
    return (
      <MessageComponent
        response={{
          success: false,
          message: "Invalid or expired verification link.",
        }}
      />
    );
  }

  if (response !== null && progress === 100) {
    return <MessageComponent response={response} />;
  } else {
    return (
      <main className="min-h-screen h-full flex flex-col items-center justify-center gap-y-5">
        <div>Verifying token</div>
        <Progress value={progress} className="w-[50%] lg:w-[20%]" />
      </main>
    );
  }
}
