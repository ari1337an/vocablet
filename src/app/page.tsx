import React from "react";
import { Button } from "./_components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-3">
      <h2 className="text-2xl">Vocablet</h2>
      <p>
        Contains Stripe integration and Authentication Only
      </p>
      <div className="flex flex-row items-center justify-center gap-x-5">
        <Link href="/auth/login">
          <Button>Login</Button>
        </Link>
        <Link href="/auth/signup">
          <Button>Signup</Button>
        </Link>
      </div>
    </div>
  );
}
