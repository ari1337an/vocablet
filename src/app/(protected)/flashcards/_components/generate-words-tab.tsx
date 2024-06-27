import React, { useState, startTransition } from "react";
import { Button } from "@/app/_components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Textarea } from "@/app/_components/ui/textarea";
import { SheetFooter } from "@/app/_components/ui/sheet";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
interface Bucket {
  id: string;
  title: string;
}

const promptFormSchema = z.object({
  prompt: z
    .string()
    .min(5, { message: "Prompt must be at least 5 characters." })
    .max(300, { message: "Prompt cannot be more than 300 characters." }),
});
interface GenerateWordsTabProps {
  currentBucketId: string | null;
  onAddVocab: (newVocab: { id: string; wordOrPhrase: string }) => void;
  selectedBucket: Bucket | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function GenerateWordsTab({
  currentBucketId,
  onAddVocab,
  selectedBucket,
  setOpen,
}: GenerateWordsTabProps) {
  const [words, setWords] = useState<string[]>([]);
  //   const [checkedWords, setCheckedWords] = useState<{
  //     [key: string]: boolean;
  //   }>({});
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  const promptForm = useForm({
    resolver: zodResolver(promptFormSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const handleSelectedWords = (word: string) => {
    setSelectedWords((prev) => {
      if (prev.includes(word)) {
        return prev.filter((w) => w !== word);
      } else {
        return [...prev, word];
      }
    });
  };

  const handleSaveWords = () => {
    console.log("selected words: ", selectedWords);
    if (!selectedBucket) {
      toast.error("Please select a bucket");
      return;
    }

    fetch(`/api/buckets/${selectedBucket.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ vocabularies: selectedWords }),
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
          promptForm.reset(); // Reset the form
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
    startTransition(async () => {
      try {
        const apiMessages = [{ role: "user", message: values.prompt }].map(
          (msg) => ({
            role: msg.role,
            content: msg.message,
          })
        );
        console.log("api messages: ", apiMessages);

        const response = await fetch("/api/agents/word-suggest", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: apiMessages,
          }),
        });

        const data = await response.json();
        if (data.success) {
          const messageString = data.words.replace(/'/g, '"');
          const words = JSON.parse(messageString);
          setWords(words);
          setSelectedWords(words);
          //   const initialCheckedWords = words.reduce(
          //     (acc: { [key: string]: boolean }, word: string) => {
          //       acc[word] = true;
          //       return acc;
          //     },
          //     {}
          //   );
          //   setCheckedWords(initialCheckedWords);
        }
      } catch (error) {
        console.log("word list error occured");
      }
    });
  };

  return (
    <div className="grid gap-4 py-4 max-h-fit">
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
          <Button onClick={() => handleSaveWords()}>Save Words</Button>
          <strong>Words:</strong>
          <ul>
            {words.map((word) => (
              <li key={word}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedWords.includes(word)}
                    onChange={() => handleSelectedWords(word)}
                    className="p-4"
                  />
                  {word}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
