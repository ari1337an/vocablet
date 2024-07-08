"use server";

import { auth } from "@/server/authentication/auth";
import React from "react";
import FlashCardsPageClient from "../../_components/flashcard-page-client";
import EntitlementRepo from "@/server/database/repositories/entitlement";

export default async function AppPage({
  params,
}: {
  params: { bucketId: string };
}) {
  const bucketId = params.bucketId as string;
  const session = await auth();
  if (!session || !session.user) return null;

  // console.log("session", session.user);
  const userEntitlements = await EntitlementRepo.getEntitlementOfUser(
    session.user.userId
  ).then((user) => user?.Entitlements);
  // console.log("userEntitlements", userEntitlements);

  const hasFlashcardsLearning =
    userEntitlements?.some(
      (entitlement) => entitlement.feature === "vocablet-flashcards-learning"
    ) || false;

  return (
    <FlashCardsPageClient
      session={session}
      bucketId={bucketId as string}
      hasFlashcardsLearning={hasFlashcardsLearning}
    />
  );
}
