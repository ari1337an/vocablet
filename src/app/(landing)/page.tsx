"use server";

import { auth } from "@/server/authentication/auth";
import LandingPage from "./_components/landing";

export default async function Landing() {
  const session = await auth();
  const currentUserEmail = session?.user.email;

  return <LandingPage currentUserEmail={currentUserEmail} />;
}
