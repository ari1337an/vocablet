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
    </>
  );
}
