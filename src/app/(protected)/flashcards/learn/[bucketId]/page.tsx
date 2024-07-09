"use server";

import { auth } from "@/server/authentication/auth";
import React from "react";
import FlashCardsPageClient from "../../_components/flashcard-page-client";
import { checkEntitlement, EntitlementSlugs } from "@/server/actions/entitlement/check-entitlement";

export default async function AppPage({
  params,
}: {
  params: { bucketId: string };
}) {
  const bucketId = params.bucketId as string;
  const session = await auth();
  if (!session || !session.user) return null;

  const hasFlashcardsLearning =
    await checkEntitlement(session.user.userId, EntitlementSlugs.VOCABLET_FLASHCARDS_LEARNING);
  return (
    <FlashCardsPageClient
      session={session}
      bucketId={bucketId as string}
      hasFlashcardsLearning={hasFlashcardsLearning}
    />
  );
}
