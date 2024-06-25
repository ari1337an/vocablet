import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/app/_components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { SheetFooter } from "@/app/_components/ui/sheet";

const formSchema = z.object({
  vocabularyWord: z
    .string()
    .min(2, { message: "Word must be at least 2 characters." })
    .max(50, { message: "Word name cannot be more than 50 characters." }),
});


interface Bucket {
  id: string;
  title: string;
}

interface AddWordTabProps {
  currentBucketId: string | null;
  onAddVocab: (newVocab: { id: string; wordOrPhrase: string }) => void;
  selectedBucket: Bucket | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AddWordTab({
  currentBucketId,
  onAddVocab,
  selectedBucket,
  setOpen,
}: AddWordTabProps) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vocabularyWord: "",
    },
  });

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

  return (
    <div className="grid gap-4 py-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
  );
}
