"use server";

import { auth } from "@/server/authentication/auth";
import RequestEmailVerification from "./_components/request-verification";
import UserAvatar from "./_components/navbar/user-avatar";
import Link from "next/link";
import { Button } from "../_components/ui/button";
import SideBar from "./_components/navbar/sidebar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  // This is a protected route, so we need to check if the user is authenticated
  const session = await auth();
  if (!session) return null;

  // user avatar url
  const avatarUrl =
    session.user.image === null ? undefined : (session.user.image as string);

  // Check if the user has verified their email
  if (!session?.user?.emailVerified) {
    return <RequestEmailVerification />;
  }

  return (
    <main className="h-full flex flex-col">
      <div className="flex flex-row items-center justify-between px-10 py-5 z-10 sticky top-0 left-0 right-0">
        <SideBar />
        <div className="h-full absolute left-0 right-0 flex items-center justify-center text-2xl">
          <Button
            variant="ghost"
            className="text-2xl hover:text-primary hover:cursor-pointer"
          >
            <Link href="/app">{process.env.NEXT_PUBLIC_BRAND_NAME}</Link>
          </Button>
        </div>
        <UserAvatar avatarUrl={avatarUrl} />
      </div>

      <div className="z-0 h-full">{children}</div>
    </main>
  );
}
