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
import { ScrollArea } from "@radix-ui/react-scroll-area";
import {
  Command,
  CommandInput,
  CommandItem,
} from "@/app/_components/ui/command";
import { CommandEmpty, CommandGroup, CommandList } from "cmdk";

interface Bucket {
  id: string;
  title: string;
}

interface Flashcard {
  id: string;
  wordOrPhrase: string;
}

interface ShareVocabularySheetProps {
  vocabularies: Flashcard[];
  buckets: Bucket[];
}

export function ShareVocabularyButtonSheet({
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
    // console.log('updated :', updatedSelection);
  };

  const handleShareClick = async () => {
    // console.log('selectedBuckets:', selectedBuckets);
    selectedBuckets.forEach((bucket) => {
      const bucketId = bucket.id;
      const bucketName = bucket.title;
      fetch(`/api/buckets/${bucketId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vocabularies: vocabularies.map((vocab) => vocab.wordOrPhrase),
        }),
      })
        .then((response) => {
          if (response.ok) {
            // console.log('Share successful');
            setOpen(false);
            setSelectedBuckets([]);
            toast.success(`Vocabulary added to bucket: ${bucketName}`);
          } else {
            console.log("Share failed");
            toast.error(`Failed to add vocabulary to bucket: ${bucketName}`);
            setSelectedBuckets([]);
          }
        })
        .catch((error) => {
          console.error("Error sharing vocabulary:", error);
        });
    });
  };
  const handleSheetChange = (isOpen: boolean) => {
    setOpen(isOpen);
    const temp_open = isOpen;
    if (!temp_open) {
      setSelectedBuckets([]); // Clear selected buckets when the sheet closes
    }
  };

  return (
    <Sheet open={open} onOpenChange={handleSheetChange}>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <ShareIcon className="w-5 h-5 fill-white hover:fill-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Vocabulary to bucket(s)</SheetTitle>
          <SheetDescription>{`Click Add when you're done.`}</SheetDescription>
          <Button onClick={handleShareClick}>Add</Button>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Command>
            <CommandInput placeholder="Search bucket..." className="h-9" />
            <ScrollArea className="max-h-[500px] overflow-y-auto">
              <CommandList>
                <CommandEmpty>No buckets found</CommandEmpty>
                <CommandGroup>
                  {/* <ul className="w-full list-none"> */}
                  {buckets.map((bucket) => (
                    <CommandItem
                      key={bucket.id}
                      value={bucket.title}
                      className="flex items-center justify-between bg-gray-950 p-3 mb-2 rounded shadow"
                      onSelect={() => handleCheckboxChange(bucket)}
                    >
                      <Checkbox
                        checked={selectedBuckets.includes(bucket)}
                        // onCheckedChange={() => handleCheckboxChange(bucket)}
                      />
                      <label htmlFor={bucket.id} className="ml-2">
                        {bucket.title}
                      </label>
                    </CommandItem>
                  ))}
                  {/* </ul> */}
                </CommandGroup>
              </CommandList>
            </ScrollArea>
          </Command>
        </div>
      </SheetContent>
    </Sheet>
  );
}
