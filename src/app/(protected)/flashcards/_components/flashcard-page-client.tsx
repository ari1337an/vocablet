"use client";

import React from "react";

import FlashCards from "./flashcards";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/app/_components/ui/dialog";
import { Button } from "@/app/_components/ui/button";

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
      <Dialog open={true}>
        <DialogContent>
          <DialogTitle>Upgrade Required</DialogTitle>
          <DialogDescription>
            You do not have access to this feature. Please upgrade to access the
            roleplay feature.
          </DialogDescription>
          <div className="mt-4">
            <Button onClick={() => (window.location.href = "/pricing")}>
              Upgrade
            </Button>
            <DialogClose asChild>
              <Button variant="outline" onClick={() => window.history.back()}>
                Cancel
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return <FlashCards session={session} fetchBucketId={bucketId} />;
};

export default FlashcardsPageClient;
