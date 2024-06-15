/**
 * Renders a flashcard component that allows users to learn new words or phrases.
 * The component fetches flashcard data from an API endpoint and displays it in a card format.
 * Users can navigate through the flashcards using the "Previous" and "Next" buttons.
 *
 * @param session - The session object.
 * @param fetchBucketId - The ID of the bucket to fetch flashcards from.
 * @returns The FlashCards component.
 */

"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { Progress } from "@/app/_components/ui/progress";
import useAppStore from "../../_store/useAppStore";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import FlashcardBackContent from "./flashcard_back_content";

// Define the type for flashcard data
interface Flashcard {
  wordOrPhrase: string;
  meaning: string;
  exampleSentence: string;
}

export default function FlashCards({
  session,
  fetchBucketId,
}: {
  session: any;
  fetchBucketId: string;
}) {
  const {} = useAppStore();

  const [initialFetchComplete, setInitialFetchComplete] = useState(false);
  const [progress, setProgress] = useState(33);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flashcardsData, setFlashcardsData] = useState<Flashcard[]>([]); // State to store the fetched flashcards data
  const [showBack, setShowBack] = useState(false); // State to show the back of the flashcard

  useEffect(() => {
    const fetchInitialflashcards = async () => {
      const response = await fetch("/api/buckets/" + fetchBucketId);
      const data = await response.json();
      if (data.success) {
        setFlashcardsData(data.flashcards); // Store the fetched flashcards data
        setInitialFetchComplete(true);
        setProgress(100);
      } else {
        console.log("Error fetching flashcards:", data.error);
      }
    };

    fetchInitialflashcards();
  }, [fetchBucketId]);

  const handleNext = () => {
    setShowBack(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcardsData.length);
  };

  const handlePrevious = () => {
    setShowBack(false);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + flashcardsData.length) % flashcardsData.length
    );
  };

  if (!initialFetchComplete) {
    return (
      <main className="min-h-screen h-full flex flex-col items-center justify-center gap-y-5">
        <div>Loading conversation...</div>
        <Progress value={progress} className="w-[50%] lg:w-[20%]" />
      </main>
    );
  }

  return (
    // Add Carousal from ShadCNUI
    <div className="w-full h-full flex items-center justify-center ">
      <Card className="w-[350px] items-center text-center justify-center">
        <CardHeader>
          <CardTitle>Flashcards</CardTitle>
          <CardDescription>Learn fast with flashcards.</CardDescription>
        </CardHeader>
        <CardContent
          className="text-white cursor-pointer justify-center items-center flex  text-center h-[200px] bg-primary-500"
          onClick={() => setShowBack(!showBack)}
        >
          {flashcardsData.length > 0 ? (
            !showBack ? (
              <div>{flashcardsData[currentIndex].wordOrPhrase}</div>
            ) : (
              <FlashcardBackContent
                wordOrPhrase={flashcardsData[currentIndex].wordOrPhrase}
              />
            )
          ) : (
            <div>No flashcards available.</div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handlePrevious} variant="outline">
            Previous
          </Button>
          <Button onClick={handleNext}>Next</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
