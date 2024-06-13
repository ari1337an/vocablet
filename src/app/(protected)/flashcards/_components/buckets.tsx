"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { Progress } from "@/app/_components/ui/progress";
import useAppStore from "../../_store/useAppStore";
import FlashCard from "./flashcard";

export default function Buckets({}: {}) {
  const {} = useAppStore();

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [initialFetchComplete, setInitialFetchComplete] = useState(false);
  const [progress, setProgress] = useState(33);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [buckets, setBuckets] = useState([]); // State to store the buckets data
  const [newBucketTitle, setNewBucketTitle] = useState(""); // State to store the new bucket title
  const router = useRouter();

  useEffect(() => {
    const fetchBuckets = async () => {
      const response = await fetch("/api/buckets");
      const data = await response.json();
      if (data.success) {
        setInitialFetchComplete(true);
        console.log("Buckets:", data.buckets);
        setProgress(100);
        setBuckets(data.buckets); // Store the fetched buckets data
      } else {
        console.log("Error fetching buckets:", data.error);
      }
    };

    fetchBuckets();
  }, []);

  if (!initialFetchComplete) {
    return (
      <main className="min-h-screen h-full flex flex-col items-center justify-center gap-y-5">
        <div>Loading conversation...</div>
        <Progress value={progress} className="w-[50%] lg:w-[20%]" />
      </main>
    );
  }

  function handleBucketClick(id: string): void {
    // GO TO PAGE /flashcards/[id]
    router.push(`/flashcards/${id}`);
  }

  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-center gap-y-5">
      <h1 className="text-2xl font-bold mb-4">Buckets List</h1>
      <ul className="list-disc">
        {buckets.map((bucket) => (
          <li key={bucket.id} className="flex justify-between items-center">
            {bucket.title}
            <button onClick={() => handleBucketClick(bucket.id)}>Click</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
