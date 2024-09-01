import React, { Suspense } from "react";
import { SignUp } from "./_components/sign-up"; // Changed to SignUp
import { Separator } from "@/app/_components/ui/separator";
import Link from "next/link";
import { Metadata } from "next";
import { ReCaptchaProvider } from "next-recaptcha-v3";

export const metadata: Metadata = {
  title: "Signup | Vocablet AI",
  description: "Signup to Vocablet",
};
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      <div className="w-full lg:w-1/2 bg-secondary">
        <Suspense>
          <ReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT}
          >
            <SignUp />
          </ReCaptchaProvider>
        </Suspense>
      </div>
      <div className="hidden lg:flex w-1/2 bg-primary flex-col items-center px-10">
        <h1 className="text-2xl absolute top-0 mt-5">
          <Link href="/">{process.env.NEXT_PUBLIC_BRAND_NAME}</Link>
        </h1>
        <div className="min-h-screen flex flex-col items-center justify-center text-center gap-y-5">
          <h2 className="text-lg">Create an account</h2>
          <h1 className="text-5xl uppercase">Join us today</h1>
          <Separator className="w-20 h-2 rounded" />
          <p className="text-base">
            Sign up to personalize your vocabulary learning journey, engage in
            dynamic roleplays, and master advanced words effortlessly.
            Experience intelligent, fun, and effective language learning today!
          </p>
        </div>
      </div>
    </div>
  );
}
