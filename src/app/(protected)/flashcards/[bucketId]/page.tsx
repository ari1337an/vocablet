"use server";

import { auth } from "@/server/authentication/auth";
import React from "react";import BucketWordList from "../_components/bucket-word-list";

export default async function AppPage({
  params,
}: {
  params: { bucketId: string };
}) {
  const bucketId = params.bucketId as string;
  const session = await auth();
  if (!session || !session.user) return null;

  return <BucketWordList fetchBucketId={bucketId as string} />;
}
