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
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Other Definitions</DialogTitle>
                <DialogDescription>
                  Here are other meanings of the word or phrase.
                </DialogDescription>
              </DialogHeader>
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
            </DialogContent>
          </Dialog>
        )}
      </div>
    </ScrollArea>
  );
};

export default FlashcardBackContent;
