"use server";

import { auth } from "@/server/authentication/auth";
import React from "react";
import AccountForms from "./_components/accounts-forms";
import GetAccountValuesAction from "@/server/actions/account/get-values";

export default async function page() {
  const session = await auth();
  if (!session) return null;
  const user = await GetAccountValuesAction(session.user.email as string);
  if (!user) return null;

  return <AccountForms user={user} />;
}
