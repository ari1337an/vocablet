// This component displays the back content of a flashcard, including the word or phrase, its meanings, and examples.

import { ScrollArea } from "@radix-ui/react-scroll-area";
import React, { useEffect, useState } from "react";

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
        {definitions.map((def, index) => (
          <li key={index} className="mb-2">
            <p>
              <strong>Part of Speech:</strong> {def.partOfSpeech}
            </p>
            <p>
              <strong>Definition:</strong> {def.definition}
            </p>
            {def.example && (
              <p>
                <strong>Example:</strong> {def.example}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
    </ScrollArea>
  );
};

export default FlashcardBackContent;
