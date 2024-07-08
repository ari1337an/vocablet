import React from "react";
import type { Metadata } from "next";
import "../globals.css";
import { auth } from "@/server/authentication/auth";
import Navbar from "./_components/navbar";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_BRAND_NAME + " | Learn vocabulary with AI",
  description: process.env.NEXT_PUBLIC_BRAND_DESC,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const userEmail = session?.user?.email || null;

  return (
    <>
      <Navbar userEmail={userEmail} />
      <div>{children}</div>

      <div className="text-center text-neutral-600 dark:text-neutral-400 py-4">
        <div className="mt-2">
          <a href="http://alphawolfventures.com" className="hover:text-white">
            © {new Date().getFullYear()} AlphaWolf Ventures, Inc.
          </a>
        </div>
        <div className="mt-2">
          <a href="/terms/privacy" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms/service" className="hover:underline ml-2">
            Terms of Service
          </a>
        </div>
      </div>
    </>
  );
}
