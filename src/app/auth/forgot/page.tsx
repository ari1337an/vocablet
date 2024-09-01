import React, { Suspense } from "react";
import { ForgotPassword } from "./_components/forgot-pass";
import { Separator } from "@/app/_components/ui/separator";
import Link from "next/link";
import { Metadata } from "next";
import { ReCaptchaProvider } from "next-recaptcha-v3";

export const metadata: Metadata = {
  title: "Forgot password | Vocablet AI",
  description: "Reset your password for vocablet.",
};

export default function page() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      <div className="hidden lg:flex flex-col items-center px-10 w-1/2 bg-primary">
        <h1 className="text-2xl absolute top-0 mt-5">
          <Link href="/">{process.env.NEXT_PUBLIC_BRAND_NAME}</Link>
        </h1>
        <div className="min-h-screen flex flex-col items-center justify-center text-center gap-y-5">
          <h2 className="text-lg">Did you forget your password?</h2>
          <h1 className="text-5xl uppercase">Don&apos;t worry</h1>
          <Separator className="w-20 h-2 rounded" />
          <p className="text-base">
            Give us your email address that you used to signup to vocablet and
            we will send a link to your email address. Make sure to check both
            inbox and spam folder. Click that link and change your password!
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-secondary">
        <Suspense>
          <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT}>
            <ForgotPassword />
          </ReCaptchaProvider>
        </Suspense>
      </div>
    </div>
  );
}
