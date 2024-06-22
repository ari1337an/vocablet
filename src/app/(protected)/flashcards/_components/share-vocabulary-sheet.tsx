"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/app/_components/ui/sheet";
import ShareIcon from "@/app/_icons/share";
import { Button } from "@/app/_components/ui/button";
import { Checkbox } from "@/app/_components/ui/checkbox"; // Import your Checkbox component
import toast from "react-hot-toast";

interface Bucket {
  id: string;
  title: string;
}

interface ShareVocabularySheetProps {
  vocabularies: string[];
  buckets: Bucket[];
}

export function ShareButtonWithVocabularySheet({
  vocabularies,
  buckets,
}: ShareVocabularySheetProps) {
  const [open, setOpen] = useState(false);
  const [selectedBuckets, setSelectedBuckets] = useState<Bucket[]>([]); // State to store selected bucket ids

  const handleCheckboxChange = (bucket: Bucket) => {
    const updatedSelection = selectedBuckets.includes(bucket)
      ? selectedBuckets.filter((buck) => buck.id !== bucket.id)
      : [...selectedBuckets, bucket];
    setSelectedBuckets(updatedSelection);
  };

  const handleShareClick = async () => {
    selectedBuckets.forEach((bucket) => {
      const bucketId = bucket.id;
      const bucketName = bucket.title;
      fetch(`/api/buckets/${bucketId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ vocabularies }),
      })
        .then(response => {
          if (response.ok) {
            // console.log('Share successful');
            setOpen(false);
            toast.success(`Vocabulary added to bucket: ${bucketName}`);
          } else {
            console.log('Share failed');
            toast.error(`Failed to add vocabulary to bucket: ${bucketName}`);
          }
        })
        .catch(error => {
          console.error('Error sharing vocabulary:', error);
        });
    });
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <ShareIcon className="w-5 h-5 fill-white hover:fill-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Vocabulary to sheets</SheetTitle>
          <SheetDescription>{`Click Add when you're done.`}</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <ul className="w-full list-none">
            {buckets.map((bucket) => (
              <li
                key={bucket.id}
                className="flex items-center justify-between bg-gray-950 p-3 mb-2 rounded shadow"
              >
                <Checkbox
                  checked={selectedBuckets.includes(bucket)}
                  onCheckedChange={() => handleCheckboxChange(bucket)}
                />
                <label htmlFor={bucket.id} className="ml-2">
                  {bucket.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <SheetFooter>
          <Button onClick={handleShareClick}>Add</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
