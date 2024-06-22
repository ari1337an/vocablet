/**
 * UI component to view the list of vocabulary buckets word list.
 */

"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/_components/ui/button";
import { Progress } from "@/app/_components/ui/progress";
import useAppStore from "../../_store/useAppStore";
import { Separator } from "@/app/_components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
} from "@/app/_components/ui/table";


import DeleteButtonWithConfirmationDialog from "./delete-confirmation-dialog";
import { ShareButtonWithVocabularySheet } from "./share-vocabulary-sheet";

interface Flashcard {
  id: string;
  wordOrPhrase: string;
}
interface Bucket {
  id: string;
  title: string;
}

export default function BucketWordList({
  fetchBucketId,
}: {
  fetchBucketId: string;
}) {
  const {} = useAppStore();

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [initialFetchComplete, setInitialFetchComplete] = useState(false);
  const [progress, setProgress] = useState(33);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]); // State to store the bucket data
  const [bucketName, setBucketName] = useState<string>("");
  const [buckets, setBuckets] = useState<Bucket[]>([]); // State to store the buckets data
  const router = useRouter();

  useEffect(() => {
    const fetchBucket = async () => {
      const response = await fetch("/api/buckets/" + fetchBucketId);
      const data = await response.json();
      if (data.success) {
        setBucketName(data.bucket.title);
        setFlashcards(data.bucket.Vocabulary); // Store the fetched bucket data
        setInitialFetchComplete(true);
        setProgress(100);
      } else {
        console.error("Error fetching bucket:", data.error);
      }
    };

    fetchBucket();
  }, [fetchBucketId]);

  useEffect(() => {
    const fetchBuckets = async () => {
      console.log("the fetch buckets.");
      const response = await fetch("/api/buckets");
      const data = await response.json();
      if (data.success) {
        setInitialFetchComplete(true);
        setProgress(100);
        setBuckets(data.buckets); // Store the fetched buckets data
      } else {
        console.log("Error fetching buckets:", data.error);
      }
    };

    fetchBuckets();
  }, []);

  const reloadList = async () => {
    const response = await fetch("/api/buckets/" + fetchBucketId);
    const data = await response.json();
    if (data.success) {
      setFlashcards(data.bucket.Vocabulary);
    } else {
      console.error("Error reloading bucket:", data.error);
    }
  };

  if (!initialFetchComplete) {
    return (
      <main className="min-h-screen h-full flex flex-col items-center justify-center gap-y-5">
        <div>Loading bucket...</div>
        <Progress value={progress} className="w-[50%] lg:w-[20%]" />
      </main>
    );
  }

  const handleLearnButton = () => {
    router.push(`/flashcards/learn/${fetchBucketId}`);
  };
  const handleShareClick = async (vocabularyId: string) => {
    console.log("Share icon clicked");
    // Add your share functionality here
  };

  return (
    <div className="flex flex-col gap-y-5">
      <div className="w-full flex flex-col justify-end items-start px-8 lg:px-36 2xl:px-60 text-white sticky top-0 bg-secondary z-10">
        <div className="flex flex-row justify-between w-full py-4">
          <h1 className="text-2xl font-bold">{bucketName}</h1>
          <Button className="p-4" onClick={handleLearnButton}>
            Learn
          </Button>
        </div>
        <Separator className="my-4 bg-slate-100" />
      </div>
      <div className="w-full overflow-y-auto px-8 lg:px-36 2xl:px-60 text-white z-0">
        {flashcards.length > 0 ? (
          <Table>
            <TableBody>
              {flashcards.map((flashcard) => (
                <TableRow
                  key={flashcard.id}
                  className="flex items-center justify-between"
                >
                  <TableCell>{flashcard.wordOrPhrase}</TableCell>
                  <TableCell>
                    <div className="flex flex-row justify-around items-center text-white">
                      <ShareButtonWithVocabularySheet
                        vocabularies={[flashcard.wordOrPhrase]}
                        buckets={buckets}
                      />
                      <DeleteButtonWithConfirmationDialog
                        vocabularyId={flashcard.id}
                        reloadList={reloadList}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="text-xl">There are no words in this bucket.</div>
        )}
      </div>
    </div>
  );
}
