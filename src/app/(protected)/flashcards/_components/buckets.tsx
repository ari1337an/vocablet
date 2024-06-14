/**
 * UI component to view the list of vocabulary buckets.
 */

"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/_components/ui/button";
import { Progress } from "@/app/_components/ui/progress";
import useAppStore from "../../_store/useAppStore";

interface Bucket {
  id: string;
  title: string;
}

export default function Buckets({}: {}) {
  const {} = useAppStore();

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [initialFetchComplete, setInitialFetchComplete] = useState(false);
  const [progress, setProgress] = useState(33);
  const [buckets, setBuckets] = useState<Bucket[]>([]); // State to store the buckets data
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
    // shows the buckets list
    <div className="w-full h-full flex flex-col items-center justify-center gap-y-5 p-4">
      <h1 className="text-2xl font-bold mb-4">Buckets List</h1>
      <ul className="w-full max-w-md list-none">
        {buckets.map((bucket) => (
          <li
            key={bucket.id}
            className="flex items-center justify-between bg-gray-100 p-3 mb-2 rounded shadow"
          >
            <span>{bucket.title}</span>
            <Button onClick={() => handleBucketClick(bucket.id)}>Learn</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
