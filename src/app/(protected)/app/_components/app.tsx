"use client";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import React from "react";

export default function App({ session }: { session: any }) {
  if (!session || !session.user) return null;

  return (
    <div className="my-52 flex flex-col items-center justify-center gap-y-5">
      <h2 className="text-2xl">
        Make changes in{" "}
        <i className="font-bold text-muted-foreground">
          src/app/(protected)/app/_components/app.tsx
        </i>
      </h2>
      <div className="flex flex-row items-center justify-center gap-x-5">
        <Link target="_blank" href="/subscription/buy/starter">
          <Button>Buy Starter $7.00</Button>
        </Link>
        <Link target="_blank" href="/subscription/buy/pro">
          <Button>Buy Pro $14.00</Button>
        </Link>
        <Link target="_blank" href="/subscription/buy/advanced">
          <Button>Buy Advanced $21.00</Button>
        </Link>
        <Link target="_blank" href="/subscription/buy/refill">
          <Button>Buy Refill $7.00</Button>
        </Link>
      </div>
    </div>
  );
}
