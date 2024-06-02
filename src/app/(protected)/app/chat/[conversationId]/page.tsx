"use server";

import { auth } from "@/server/authentication/auth";
import React from "react";
import App from "../../_components/app";

export default async function AppPage({
  params,
}: {
  params: { conversationId: string };
}) {
  const conversationId = params.conversationId as string;
  const session = await auth();
  if (!session || !session.user) return null;

  return (
    <App session={session} fetchConversationId={conversationId as string} />
  );
}
