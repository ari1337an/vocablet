"use client";
import React, { useEffect, useRef, useTransition, useState } from "react";
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

  const flashcardsData = [
    {
      word: "pernicious",
      pronunciation: "pər-ˈni-shəs",
      partOfSpeech: "adj.",
      meaning: "extremely destructive or harmful",
      example:
        "Not being able to communicate can be pernicious to any relationship.",
    },
    {
      word: "onnokisu",
      pronunciation: "pər-ˈni-shəs",
      partOfSpeech: "adj.",
      meaning: "extremely destructive or harmful",
      example:
        "Not being able to communicate can be pernicious to any relationship.",
    },
    {
      word: "aro kisu",
      pronunciation: "pər-ˈni-shəs",
      partOfSpeech: "adj.",
      meaning: "extremely destructive or harmful",
      example:
        "Not being able to communicate can be pernicious to any relationship.",
    },
    // Add more flashcards here
  ];

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [initialFetchComplete, setInitialFetchComplete] = useState(false);
  const [progress, setProgress] = useState(33);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchInitialflashcards = async () => {
      // TODO

      // set the initial fetch complete after 2 seconds
      setTimeout(() => {
        setInitialFetchComplete(true);
      }, 2000);
    };

    fetchInitialflashcards();
  }, [fetchBucketId]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcardsData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + flashcardsData.length) % flashcardsData.length
    );
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
      <FlashCard
        word={flashcardsData[currentIndex].word}
        pronunciation={flashcardsData[currentIndex].pronunciation}
        partOfSpeech={flashcardsData[currentIndex].partOfSpeech}
        meaning={flashcardsData[currentIndex].meaning}
        example={flashcardsData[currentIndex].example}
      />
      <div className="flex justify-between mt-4 w-full max-w-sm">
        <button
          onClick={handlePrevious}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-l"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  );
}
