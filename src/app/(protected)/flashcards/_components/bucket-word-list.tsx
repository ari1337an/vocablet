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

interface Flashcard {
  id: string;
  wordOrPhrase: string;
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
  }

  return (
    <div className="flex flex-col gap-y-5 p-8 lg:p-36">
      <div className="w-full flex flex-col justify-end items-start text-white  px-8 flex-grow-0">
        <div className="flex flex-row justify-between w-full py-4">
          {/* Modified line */}
          <h1 className="text-2xl font-bold">{bucketName}</h1>
          <Button className="p-4" onClick={handleLearnButton}>Learn</Button>
        </div>
        <Separator className="my-4 bg-slate-100" />
      </div>
      {/* Only the section after this will be scrollable */}
      <div className="w-full overflow-y-auto p-8 text-white flex-grow">
        {/* <h2 className="text-xl mb-4">Words in this Bucket</h2> */}

        {flashcards.length > 0 ? (
          <Table>
            <TableBody>
              {flashcards.map((flashcard) => (
                <TableRow
                  key={flashcard.id}
                  className="flex items-center justify-between" // Modified line
                >
                  <TableCell>{flashcard.wordOrPhrase}</TableCell>
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
