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
  const [selectedBuckets, setSelectedBuckets] = useState<string[]>([]); // State to store selected bucket ids

  const handleCheckboxChange = (bucketId: string) => {
    const updatedSelection = selectedBuckets.includes(bucketId)
      ? selectedBuckets.filter((id) => id !== bucketId)
      : [...selectedBuckets, bucketId];

      console.log('updated selection: ', updatedSelection);

    setSelectedBuckets(updatedSelection);
  };

  const handleShareClick = async () => {
    selectedBuckets.forEach((bucketId) => {
      fetch(`/api/buckets/${bucketId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ vocabularies }),
      })
        .then(response => {
          if (response.ok) {
            console.log('Share successful');
          } else {
            console.log('Share failed');
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
                  checked={selectedBuckets.includes(bucket.id)}
                  onCheckedChange={() => handleCheckboxChange(bucket.id)}
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
