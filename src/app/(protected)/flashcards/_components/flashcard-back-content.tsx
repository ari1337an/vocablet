import { ScrollArea } from "@radix-ui/react-scroll-area";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { Button } from "@/app/_components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import { GenerateMeaningSheet } from "./generate-meaning-sheet";

interface Definition {
  definition: string;
  example?: string;
  partOfSpeech: string;
}

interface FlashcardBackContentProps {
  wordOrPhrase: string;
}

const FlashcardBackContent: React.FC<FlashcardBackContentProps> = ({
  wordOrPhrase,
}) => {
  const [definitions, setDefinitions] = useState<Definition[]>([]);
  const [showAIGeneration, setShowAIGeneration] = useState(false);

  useEffect(() => {
    const fetchMeaning = async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${wordOrPhrase}`
        );
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          const definitionsList = data[0].meanings.flatMap((meaning: any) =>
            meaning.definitions.map((def: any) => ({
              definition: def.definition,
              example: def.example,
              partOfSpeech: meaning.partOfSpeech,
            }))
          );
          setDefinitions(definitionsList);
        } else {
          setDefinitions([
            { definition: "No meanings found.", partOfSpeech: "" },
          ]);
        }
      } catch (error) {
        console.error(error);
        setDefinitions([
          { definition: "Error fetching meanings.", partOfSpeech: "" },
        ]);
      }
    };

    fetchMeaning();
  }, [wordOrPhrase]);

  const generateMeaningWithAI = async () => {
    setShowAIGeneration(true);
    try {
      const response = await fetch("/api/generate-meaning", { method: "POST" });
      const data = await response.json();
      setDefinitions([data]);
    } catch (error) {
      console.error(error);
      setDefinitions([
        { definition: "Error generating meaning with AI.", partOfSpeech: "" },
      ]);
    }
    setShowAIGeneration(false);
  };

  const firstDefinition = definitions[0];

  return (
    <ScrollArea className="w-full h-[200px]">
      <div className="flex flex-col items-center text-center justify-evenly h-[200px]">
        <div className="w-full">
          <p className="p-2">
            <strong>Meaning:</strong>
          </p>
          <hr />
        </div>
        <ul>
          {firstDefinition && (
            <li className="mb-2">
              {firstDefinition.definition}
              {firstDefinition.example && (
                <p>
                  <strong>Example:</strong> {firstDefinition.example}
                </p>
              )}
            </li>
          )}
        </ul>
        
        {definitions.length > 1 && (
          <Dialog>
            <DialogTrigger
              className="p-2 bg-primary text-white rounded"
              onClick={(e) => e.stopPropagation()}
            >
              Show Others
            </DialogTrigger>
            <DialogContent
              onOpenAutoFocus={(event) => event.preventDefault()}
              onEscapeKeyDown={(event) => event.preventDefault()}
              onPointerDownOutside={(event) => event.preventDefault()}
            >
              <DialogHeader>
                <DialogTitle>Other Definitions</DialogTitle>
                <DialogDescription>
                  Here are other meanings of the word or phrase.
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="max-h-[200px]">
                <ul>
                  {definitions.slice(1).map((def, index) => (
                    <li key={index} className="mb-2">
                      <strong>{def.partOfSpeech}:</strong> {def.definition}
                      {def.example && (
                        <p>
                          <strong>Example:</strong> {def.example}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        )}
      </div>
      {/* <div className="mt-4">
        <p>
          Not satisfied with the meaning?{" "}
          <Button variant="link" onClick={generateMeaningWithAI}>
            Use meaning agent
          </Button>
        </p>
      </div>
      {showAIGeneration && (
        <div className="mt-4">
          <p>Generating meaning with AI...</p>
        </div>
      )} */}
    </ScrollArea>
  );
};

export default FlashcardBackContent;
