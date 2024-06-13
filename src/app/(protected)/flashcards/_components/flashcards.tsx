"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { Progress } from "@/app/_components/ui/progress";
import useAppStore from "../../_store/useAppStore";
import FlashCard from "./flashcard";

export default function FlashCards({
  session,
  fetchBucketId,
}: {
  session: any;
  fetchBucketId: string;
}) {
  const {
    messages,
    conversationId,
    addMessage,
    setMessages,
    setConversationId,
    updateMessage,
    addConversation,
  } = useAppStore();

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [initialFetchComplete, setInitialFetchComplete] = useState(false);
  const [progress, setProgress] = useState(33);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flashcardsData, setFlashcardsData] = useState([]); // State to store the fetched flashcards data
  const [showBack, setShowBack] = useState(false); // State to show the back of the flashcard
  const [learnedFlashcards, setLearnedFlashcards] = useState([]); // State to track learned flashcards
  const router = useRouter();

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

  const markAsLearned = () => {
    setLearnedFlashcards((prevLearned) => [
      ...prevLearned,
      flashcardsData[currentIndex].id,
    ]);
    handleNext();
  };
  
  const markAsNotLearned = () => {
    setLearnedFlashcards((prevLearned: never[]) =>
      prevLearned.filter((id) => id !== flashcardsData[currentIndex].id)
    );
    handleNext();
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  if (!initialFetchComplete) {
    return (
      <main className="min-h-screen h-full flex flex-col items-center justify-center gap-y-5">
        <div>Loading conversation...</div>
        <Progress value={progress} className="w-[50%] lg:w-[20%]" />
      </main>
    );
  }

  return (
    <div className="flex flex-col items-center p-4">
      <progress className="w-full mb-4" value={progress} max={100}></progress>
      {flashcardsData.length > 0 && (
        <div
          className="flashcard-container"
          onClick={() => setShowBack(!showBack)}
        >
          {!showBack ? (
            <div className="flashcard-front">
              <h2>{flashcardsData[currentIndex].wordOrPhrase}</h2>
            </div>
          ) : (
            <div className="flashcard-back">
              <p>
                <strong>Meaning:</strong> {flashcardsData[currentIndex].meaning}
              </p>
              <p>
                <strong>Example:</strong>{" "}
                {flashcardsData[currentIndex].exampleSentence}
              </p>
            </div>
          )}
        </div>
      )}
      <div className="flex justify-between mt-4 w-full max-w-sm">
        <button
          onClick={handlePrevious}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-l"
          disabled={flashcardsData.length === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-r"
          disabled={flashcardsData.length === 0}
        >
          Next
        </button>
      </div>
      <div className="flex justify-between mt-4 w-full max-w-sm">
        <button
          onClick={markAsNotLearned}
          className="bg-red-200 hover:bg-red-300 text-red-800 font-semibold py-2 px-4 rounded-l"
          disabled={flashcardsData.length === 0}
        >
          Not Learned
        </button>
        <button
          onClick={markAsLearned}
          className="bg-green-200 hover:bg-green-300 text-green-800 font-semibold py-2 px-4 rounded-r"
          disabled={flashcardsData.length === 0}
        >
          Learned
        </button>
      </div>
    </div>
  );
}
