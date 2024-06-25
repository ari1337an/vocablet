"use client";

import React, { useState, useEffect, startTransition } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/app/_components/ui/sheet";
import AddIcon from "@/app/_icons/add";
import { Button } from "@/app/_components/ui/button";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/app/_components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/app/_components/ui/command";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/app/_lib/utils";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { Textarea } from "@/app/_components/ui/textarea";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";

interface Bucket {
  id: string;
  title: string;
}

interface Flashcard {
  id: string;
  wordOrPhrase: string;
}
interface ShareVocabularySheetProps {
  currentBucketId: string | null;
  onAddVocab: (newVocab: { id: string; wordOrPhrase: string }) => void;
}

const formSchema = z.object({
  vocabularyWord: z
    .string()
    .min(2, { message: "Word must be at least 2 characters." })
    .max(50, { message: "Word name cannot be more than 50 characters." }),
});

const promptFormSchema = z.object({
  prompt: z
    .string()
    .min(5, { message: "Prompt must be at least 5 characters." })
    .max(300, { message: "Prompt cannot be more than 300 characters." }),
});

export function AddWordsSheet({
  currentBucketId,
  onAddVocab,
}: ShareVocabularySheetProps) {
  const [open, setOpen] = useState(false);
  const [buckets, setBuckets] = useState<Bucket[]>([]);
  const [selectedBucket, setSelectedBucket] = useState<Bucket | null>(null);
  const [words, setWords] = useState<string[]>([]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vocabularyWord: "",
    },
  });

  const promptForm = useForm({
    resolver: zodResolver(promptFormSchema),
    defaultValues: {
      prompt: "",
    },
  });

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

  const onSubmit = (values: { vocabularyWord: string }) => {
    if (!selectedBucket) {
      toast.error("Please select a bucket");
      return;
    }

    fetch(`/api/buckets/${selectedBucket.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ vocabularies: [values.vocabularyWord] }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          data.vocabularies.forEach((vocabResponse: any) => {
            if (
              vocabResponse.success &&
              selectedBucket.id === currentBucketId
            ) {
              const { id, wordOrPhrase } = vocabResponse.vocab;
              onAddVocab({ id, wordOrPhrase });
            }
          });

          toast.success("Word has been Added");
          form.reset(); // Reset the form
          setOpen(false);
        } else {
          console.error("Error creating vocabulary:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error creating vocab:", error);
      });
  };

  const onPromptSubmit = (values: { prompt: string }) => {
    console.log("TODO: Implement prompt submission");
    startTransition(async () => {
      try {
        // Prepare the messages for the API request
        const apiMessages = [{ role: "user", message: values.prompt }].map(
          (msg) => ({
            role: msg.role,
            content: msg.message,
          })
        );

        console.log("api messages: ", apiMessages);

        // Make the POST request to the /api/agents/general endpoint
        const response = await fetch("/api/agents/word-suggest", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: apiMessages,
          }),
        });

        // Read the json response
        const data = await response.json();
        if (data.success) {
          // Access the message and replace single quotes with double quotes
          const messageString = data.message.replace(/'/g, '"');
          // Parse the corrected JSON string
          const words = JSON.parse(messageString);
          console.log("words:", words);
          setWords(words);
        }
      } catch (error) {
        console.log("word list error occured");
      }
    });
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Button variant="ghost">
          <AddIcon className="w-5 h-5 fill-white hover:fill-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent className="z-20">
        <SheetHeader>
          <SheetTitle>Add Vocabulary to sheets</SheetTitle>
          <SheetDescription>{`Click Add when you're done.`}</SheetDescription>
        </SheetHeader>
        <div>
          <strong>Selected Bucket:</strong>
          <span>
            {" "}
            {selectedBucket === null
              ? "No buckets selected"
              : selectedBucket.title}
          </span>
        </div>
        <ScrollArea>
          <Command className="w-full z-50">
            <CommandInput placeholder="Search bucket..." className="h-9 z-50" />
            <CommandList className="z-50 h-40">
              <CommandEmpty>No bucket found.</CommandEmpty>
              <CommandGroup>
                {buckets.map((bucket) => (
                  <CommandItem
                    key={bucket.id}
                    value={bucket.title}
                    onSelect={(currentValue) => {
                      setSelectedBucket(bucket);
                    }}
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
        </ScrollArea>
        <Tabs defaultValue="generateWords">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="generateWords">Generate Words</TabsTrigger>
            <TabsTrigger value="addWord">Add Word</TabsTrigger>
          </TabsList>

          <TabsContent value="generateWords">
            <div className="grid gap-4 py-4">
              <Form {...promptForm}>
                <form
                  onSubmit={promptForm.handleSubmit(onPromptSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={promptForm.control}
                    name="prompt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prompt</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="A specific scenario to generate words."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <SheetFooter>
                    <Button type="submit">Generate Words</Button>
                  </SheetFooter>
                </form>
              </Form>
              {words.length > 0 && (
                <div>
                  <strong>Words:</strong>
                  <ul>
                    {words.map((word) => (
                      <li key={word}>
                        <label>
                          <input type="checkbox" />
                          {word}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="addWord">
            <div className="grid gap-4 py-4">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="vocabularyWord"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vocabulary Word</FormLabel>
                        <FormControl>
                          <Input placeholder="Vocabulary Word" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <SheetFooter>
                    <Button type="submit">Add</Button>
                  </SheetFooter>
                </form>
              </Form>
            </div>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
