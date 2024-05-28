"use client";

import CheckGreenIcon from "@/app/_icons/check-green";
import XMarkRedIcon from "@/app/_icons/x-mark-red";
import { useRouter } from "next/navigation";
import React from "react";

export interface Response {
  success: boolean;
  message: string;
  redirect?: string;
  redirectTimeout?: number;
}

interface MessageComponentProps {
  response: Response;
}

export default function MessageComponent({ response }: MessageComponentProps) {
  const router = useRouter();

  if (response.redirect) {
    setTimeout(() => {
      router.push(response.redirect as string);
    }, response.redirectTimeout || 5000);
  }

  return (
    <main className="min-h-screen flex flex-row items-center justify-center bg-secondary">
      <div className="flex flex-col gap-y-5 items-center justify-center">
        {response.success === true ? (
          <CheckGreenIcon className="w-10 h-10" />
        ) : (
          <XMarkRedIcon className="w-10 h-10" />
        )}
        <p>{response.message}</p>
      </div>
    </main>
  );
}
