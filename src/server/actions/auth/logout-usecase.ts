"use server";

import { signOut } from "@/server/authentication/auth";

export default async function SignOutUseCase(redirectTo: string) {
  await signOut({ redirectTo });
}
