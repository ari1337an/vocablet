"use client";

import React, { useEffect, useState } from "react";
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
import AddIcon from "@/app/_icons/add";

interface Bucket {
  id: string;
  title: string;
}

interface Flashcard {
  id: string;
  wordOrPhrase: string;
}

interface ShareVocabularySheetProps {
  currentBucketId: string;
  onAddVocab: (newVocab: { id: string; wordOrPhrase: string }) => void;
}

const formSchema = z.object({
  vocabularyWord: z
    .string()
    .min(2, { message: "Word must be at least 2 characters." })
    .max(50, { message: "Word name cannot be more than 50 characters." }),
});

export function AddWordsSheet({
  currentBucketId,
  onAddVocab,
}: ShareVocabularySheetProps) {
  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vocabularyWord: "",
    },
  });

  const onSubmit = (values: { vocabularyWord: string }) => {
    fetch(`/api/buckets/${currentBucketId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ vocabularies: [values.vocabularyWord] }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          data.vocabularies.forEach((vocabResponse: any) => {
            if (vocabResponse.success) {
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

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <AddIcon className="w-5 h-5 fill-white hover:fill-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Vocabulary to sheets</SheetTitle>
          <SheetDescription>{`Click Add when you're done.`}</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="vocabularyWord"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
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
      </SheetContent>
    </Sheet>
  );
}
