"use server";

import { auth } from "@/server/authentication/auth";
import React from "react";
import App from "./_components/app";
import { Metadata } from "next";

export default async function AppPage() {
  const session = await auth();
  if (!session || !session.user) return null;

  return <App session={session} fetchConversationId={null} />;
}
