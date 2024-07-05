"use client";

import React from "react";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

export default function LandingPage({
  currentUserEmail,
}: {
  currentUserEmail: string | null | undefined;
}) {
  return (
    <>
      <div className="min-h-screen bg-primary">
        <div className="min-h-screen w-full text-white flex flex-col items-center justify-center gap-y-6">
          <div className="text-center text-5xl font-extrabold ">
            <span className="block">Learn Vocabulary</span> with AI
          </div>
          <div className="text-lg font-semibold">
            Improve your vocabulary and ace the GREs, SATs, and C2 English
            Exams.
          </div>
          <Link href="/auth/login">
            <Button className="text-xl px-6 py-6" variant="secondary">
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      <div>Hello</div>
    </>
  );
}
