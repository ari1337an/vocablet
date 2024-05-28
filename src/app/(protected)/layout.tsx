"use server";

import { auth } from "@/server/authentication/auth";
import RequestEmailVerification from "./_components/request-verification";
import AvatarIcon from "../_icons/avatar";
import { Avatar, AvatarFallback, AvatarImage } from "../_components/ui/avatar";
import Navbar from "./_components/navbar/navbar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../_components/ui/tooltip";
import UserAvatar from "./_components/navbar/user-avatar";
import Link from "next/link";

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
    <main className="min-h-screen bg-secondary flex flex-col relative">
      <div className="flex flex-row items-center justify-between px-10 py-5 sticky top-0 bg-secondary">
        <Navbar />
        <div className="absolute left-0 right-0 flex justify-center text-2xl">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="hover:text-primary hover:cursor-pointer">
                <Link href="/app">Vocablet</Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>by AlphaWolf Ventures Inc.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <UserAvatar avatarUrl={avatarUrl} />
      </div>

      <div className="mt-5">{children}</div>
    </main>
  );
}
