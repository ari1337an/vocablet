import React, { Suspense } from "react";
import { SignUp } from "./_components/sign-up"; // Changed to SignUp
import { Separator } from "@/app/_components/ui/separator";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      <div className="w-full lg:w-1/2 bg-secondary">
        <Suspense>
          <SignUp />
        </Suspense>
      </div>
      <div className="hidden lg:flex w-1/2 bg-primary flex-col items-center px-10">
        <h1 className="text-2xl absolute top-0 mt-5">{process.env.NEXT_PUBLIC_BRAND_NAME}</h1>
        <div className="min-h-screen flex flex-col items-center justify-center text-center gap-y-5">
          <h2 className="text-lg">Create an account</h2>
          <h1 className="text-5xl uppercase">Join us today</h1>
          <Separator className="w-20 h-2 rounded" />
          <p className="text-base">
            Sign up to our app and revolutionize your routine with seamless
            automation. Effortlessly manage tasks, schedules, and smart devices
            while staying connected. Experience the future of efficiency today!
          </p>
        </div>
      </div>
    </div>
  );
}
