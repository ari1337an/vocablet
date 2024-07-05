import type { Metadata } from "next";
import "../globals.css";
import { Button } from "../_components/ui/button";
import { auth } from "@/server/authentication/auth";
import Link from "next/link";

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
  const userEmail = session?.user;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-row items-center justify-between px-40 py-5 bg-secondary shadow-md">
        <div className="font-bold text-xl hover:text-primary">
          <Link href="/">Vocablet</Link>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-4">
          <Link href="/app">App</Link>
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
        </div>
        {userEmail && (
          <Link href="/app">
            <Button>Go to App</Button>
          </Link>
        )}
        {!userEmail && (
          <Link href="/auth/login">
            <Button>Sign in</Button>
          </Link>
        )}
      </div>
      <div>{children}</div>
    </>
  );
}
