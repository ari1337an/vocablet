"use server";

import { auth } from "@/server/authentication/auth";
import React from "react";
import FlashCards from "../_components/flashcards";

export default async function AppPage({
  params,
}: {
  params: { bucketId: string };
}) {
  const bucketId = params.bucketId as string;
  const session = await auth();
  if (!session || !session.user) return null;

  return (
    <FlashCards session={session} fetchBucketId={bucketId as string} />
  );
}
