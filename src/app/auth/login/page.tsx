import React, { Suspense } from "react";
import { SignIn } from "./_components/sign-in";
import { Separator } from "@/app/_components/ui/separator";
import Link from "next/link";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      <div className="hidden lg:flex flex-col items-center px-10 w-1/2 bg-primary">
        <h1 className="text-2xl absolute top-0 mt-5">
          <Link href="/">{process.env.NEXT_PUBLIC_BRAND_NAME}</Link>
        </h1>
        <div className="min-h-screen flex flex-col items-center justify-center text-center gap-y-5">
          <h2 className="text-lg">Nice to see you again</h2>
          <h1 className="text-5xl uppercase">Welcome Back</h1>
          <Separator className="w-20 h-2 rounded" />
          <p className="text-base">
            Sign in to personalize your vocabulary learning journey, engage in
            dynamic roleplays, and master advanced words effortlessly.
            Experience intelligent, fun, and effective language learning today!
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-secondary">
        <Suspense>
          <SignIn />
        </Suspense>
      </div>
    </div>
  );
}
