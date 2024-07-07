"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { Progress } from "@/app/_components/ui/progress";
import useAppStore from "../../_store/useAppStore";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { CommandShortcut } from "@/app/_components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/app/_components/ui/dialog";
import FlashcardBackContent from "./flashcard-back-content";
import { GenerateMeaningSheet } from "./generate-meaning-sheet";

interface Flashcard {
  wordOrPhrase: string;
  meaning: string;
  exampleSentence: string;
  box: number;
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
  const [flashcardsData, setFlashcardsData] = useState<Flashcard[]>([]);
  const [showBack, setShowBack] = useState(false);
  const [queue, setQueue] = useState<Flashcard[]>([]);

  useEffect(() => {
    const fetchInitialflashcards = async () => {
      const response = await fetch("/api/buckets/" + fetchBucketId);
      const data = await response.json();
      if (data.success) {
        const flashcards = data.bucket["Vocabulary"].map((card: Flashcard) => ({
          ...card,
          box: 0,
        }));
        setFlashcardsData(flashcards);
        setQueue(flashcards);
        setInitialFetchComplete(true);
        setProgress(100);
      } else {
        console.log("Error fetching flashcards:", data.error);
      }
    };

    fetchInitialflashcards();
  }, [fetchBucketId]);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "1":
          handleRating("Again");
          break;
        case "2":
          handleRating("Hard");
          break;
        case "3":
          handleRating("Good");
          break;
        case "4":
          handleRating("Easy");
          break;
        case " ":
          event.preventDefault();
          setShowBack((prevShowBack) => !prevShowBack);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [queue, currentIndex]);

  const handleRating = (rating: string) => {
    if (queue.length === 0 || !queue[currentIndex]) {
      return;
    }

    const updatedFlashcards = [...flashcardsData];
    const currentCard = queue[currentIndex];

    switch (rating) {
      case "Again":
        currentCard.box = 0;
        break;
      case "Hard":
        if (currentCard.box > 0) {
          currentCard.box = Math.max(currentCard.box - 1, 0);
        }
        break;
      case "Good":
        if (currentCard.box < 4) {
          currentCard.box += 1;
        }
        break;
      case "Easy":
        if (currentCard.box < 4) {
          currentCard.box = Math.min(currentCard.box + 2, 4);
        }
        break;
      default:
        break;
    }

    updateQueue(updatedFlashcards);
    handleNext();
  };

  const handleNext = () => {
    setShowBack(false);
    if (queue.length > 1) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % queue.length);
    }
  };

  const updateQueue = (updatedFlashcards: Flashcard[]) => {
    const newQueue = updatedFlashcards.filter((card) => card.box < 4);
    setQueue(newQueue);
    setFlashcardsData(updatedFlashcards);
  };

  const getProgressValue = (box: number) => {
    switch (box) {
      case 0:
        return 25;
      case 1:
        return 50;
      case 2:
        return 75;
      case 3:
        return 100;
      default:
        return 0;
    }
  };

  if (!initialFetchComplete) {
    return (
      <main className="min-h-screen h-full flex flex-col items-center justify-center gap-y-5">
        <div>Loading Flashcard...</div>
        <Progress value={progress} className="w-[50%] lg:w-[20%]" />
      </main>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-lg items-center text-center justify-center relative shadow-lg">
        {queue.length > 0 && queue[currentIndex] && (
          <Progress
            value={getProgressValue(queue[currentIndex].box)}
            className="absolute top-0 left-0 w-full"
          />
        )}
        <CardHeader>
          {queue.length > 0 && queue[currentIndex] ? (
            <>
              <CardTitle>{showBack ? "Back" : "Front"}</CardTitle>
              {!showBack && (
                <CardDescription>
                  Click to view back side or press{" "}
                  <CommandShortcut>Space</CommandShortcut>
                </CardDescription>
              )}
              {showBack && (
                <CardDescription>
                  <GenerateMeaningSheet
                    wordToGenerate={queue[currentIndex].wordOrPhrase}
                  />
                </CardDescription>
              )}
            </>
          ) : (
            <>
              <CardTitle>Congratulations</CardTitle>
              <CardDescription>Remember to come back again!</CardDescription>
            </>
          )}
        </CardHeader>
        <CardContent
          className="text-white cursor-pointer justify-center items-center flex flex-col text-center h-[200px] bg-primary-500 rounded"
          onClick={() => setShowBack(!showBack)}
        >
          {queue.length > 0 && queue[currentIndex] ? (
            <>
              {!showBack ? (
                <div className="text-lg">
                  {queue[currentIndex].wordOrPhrase}
                </div>
              ) : (
                <FlashcardBackContent
                  wordOrPhrase={queue[currentIndex].wordOrPhrase}
                />
              )}
            </>
          ) : (
            <div>You have learned everything!</div>
          )}
        </CardContent>
        {queue.length > 0 && queue[currentIndex] ? (
          <CardFooter className="flex justify-between space-x-2 p-4">
            <Button onClick={() => handleRating("Again")} variant="outline">
              Again
            </Button>
            <Button onClick={() => handleRating("Hard")} variant="outline">
              Hard
            </Button>
            <Button onClick={() => handleRating("Good")} variant="outline">
              Good
            </Button>
            <Button onClick={() => handleRating("Easy")} variant="outline">
              Easy
            </Button>
          </CardFooter>
        ) : (
          <CardFooter className="flex items-center justify-center">
            <Link href="/flashcards">
              <Button className="w-full" variant="default">
                Go Back
              </Button>
            </Link>
          </CardFooter>
        )}
      </Card>
      <div className="mt-4 md:block hidden">
        <Dialog>
          <DialogTrigger>
            <Button className="text-muted-foreground" variant="outline">
              Keyboard Shortcuts
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Keyboard Shortcuts</DialogTitle>
              <DialogDescription className="py-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex space-x-4">
                    <div className="flex flex-col items-center">
                      <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                        1
                      </span>
                      <span className="text-sm ">Again</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                        2
                      </span>
                      <span className="text-sm">Hard</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                        3
                      </span>
                      <span className="text-sm">Good</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                        4
                      </span>
                      <span className="text-sm">Easy</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                        Space
                      </span>
                      <span className="text-sm">Flip</span>
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Dismiss</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
