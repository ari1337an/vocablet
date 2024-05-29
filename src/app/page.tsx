import React from "react";
import { Button } from "./_components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-3">
      <h2 className="text-2xl">{process.env.NEXT_PUBLIC_BRAND_NAME}</h2>
      <p>
        {process.env.NEXT_PUBLIC_BRAND_DESC}
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
