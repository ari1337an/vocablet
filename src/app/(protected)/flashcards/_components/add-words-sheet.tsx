"use client";

import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import AddIcon from "@/app/_icons/add";
import { Button } from "@/app/_components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/app/_components/ui/command";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/app/_lib/utils";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import { GenerateWordsTab } from "./generate-words-tab";
import { AddWordTab } from "./add-words-tab";

interface Bucket {
  id: string;
  title: string;
}

interface ShareVocabularySheetProps {
  currentBucketId: string | null;
  onAddVocab: (newVocab: { id: string; wordOrPhrase: string }) => void;
}

export function AddWordsSheet({
  currentBucketId,
  onAddVocab,
}: ShareVocabularySheetProps) {
  const [open, setOpen] = useState(false);
  const [buckets, setBuckets] = useState<Bucket[]>([]);
  const [selectedBucket, setSelectedBucket] = useState<Bucket | null>(null);

  useEffect(() => {
    const fetchBuckets = async () => {
      const response = await fetch("/api/buckets");
      const data = await response.json();
      if (data.success) {
        setBuckets(data.buckets); // Store the fetched buckets data
      } else {
        console.log("Error fetching buckets:", data.error);
      }
    };

    fetchBuckets();
  }, []);

  useEffect(() => {
    if (open && currentBucketId) {
      const bucket = buckets.find((bucket) => bucket.id === currentBucketId);
      if (bucket) {
        setSelectedBucket(bucket);
      }
    }
  }, [open, currentBucketId, buckets]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Button variant="ghost">
          <AddIcon className="w-5 h-5 fill-white hover:fill-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent className="z-20 h-full flex flex-col">
        <SheetHeader>
          <SheetTitle>Add Vocabulary to Bucket(s)</SheetTitle>
          <SheetDescription>{`Click Add when you're done.`}</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col mt-4 mb-2">
          <strong>Selected Bucket:</strong>
          <span>
            {" "}
            {selectedBucket === null
              ? "No buckets selected"
              : selectedBucket.title}
          </span>
        </div>
        <ScrollArea className="flex-1">
          <Command className="w-full z-50 mb-4">
            <CommandInput placeholder="Search bucket..." className="h-9 z-50" />
            <CommandList className="z-50 h-40">
              <CommandEmpty>No bucket found.</CommandEmpty>
              <CommandGroup>
                {buckets.map((bucket) => (
                  <CommandItem
                    key={bucket.id}
                    value={bucket.title}
                    onSelect={() => setSelectedBucket(bucket)}
                  >
                    {bucket.title}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        selectedBucket?.id === bucket.id
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
          <Tabs defaultValue="generateWords">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="generateWords">Generate Words</TabsTrigger>
              <TabsTrigger value="addWord">Add Word</TabsTrigger>
            </TabsList>
            <TabsContent value="generateWords">
              <GenerateWordsTab
                currentBucketId={currentBucketId}
                onAddVocab={onAddVocab}
                selectedBucket={selectedBucket}
                setOpen={setOpen}
              />
            </TabsContent>
            <TabsContent value="addWord">
              <AddWordTab
                currentBucketId={currentBucketId}
                onAddVocab={onAddVocab}
                selectedBucket={selectedBucket}
                setOpen={setOpen}
              />
            </TabsContent>
          </Tabs>
        </ScrollArea>
        <div className="mt-4 flex justify-end">
          <Button onClick={() => setOpen(false)}>Close</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
