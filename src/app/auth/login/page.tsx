import React from "react";
import { SignIn } from "./_components/sign-in";
import { Separator } from "@/app/_components/ui/separator";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      <div className="hidden lg:flex flex-col items-center px-10 w-1/2 bg-primary">
        <h1 className="text-2xl absolute top-0 mt-5">Vocablet</h1>
        <div className="min-h-screen flex flex-col items-center justify-center text-center gap-y-5">
          <h2 className="text-lg">Nice to see you again</h2>
          <h1 className="text-5xl uppercase">Welcome Back</h1>
          <Separator className="w-20 h-2 rounded" />
          <p className="text-base">
            Sign in to our app and revolutionize your routine with seamless
            automation. Effortlessly manage tasks, schedules, and smart devices
            while staying connected. Experience the future of efficiency today!
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-secondary">
        <SignIn />
      </div>
    </div>
  );
}
