"use server";

import { auth } from "@/server/authentication/auth";
import PricingContentPage from "./_components/pricing";

export default async function Landing() {
  const session = await auth();
  const currentUserEmail = session?.user.email;

  return <PricingContentPage currentUserEmail={currentUserEmail} />;
}
