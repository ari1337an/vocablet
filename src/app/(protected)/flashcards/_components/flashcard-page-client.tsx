"use client";

import React, { useEffect } from "react";

import { toast } from "react-hot-toast";
import FlashCards from "./flashcards";

const FlashcardsPageClient = ({
  session,
  bucketId,
  hasFlashcardsLearning,
}: {
  session: any;
  bucketId: string;
  hasFlashcardsLearning: boolean;
}) => {
  if (!hasFlashcardsLearning) {
    return (
      <div>
        {" "}
        You dont have access to this feature. Upgrade to premium to use this feature.
      </div>
    );
  }

  return <FlashCards session={session} fetchBucketId={bucketId} />;
};

export default FlashcardsPageClient;
