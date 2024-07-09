import React, { useEffect } from "react";
import { Button } from "@/app/_components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import toast from "react-hot-toast";

interface GenerateMeaningSheetProps {
  wordToGenerate: string;
}

interface Definition {
  definition: string;
  example?: string;
  partOfSpeech: string;
}

export function GenerateMeaningSheet({
  wordToGenerate,
}: GenerateMeaningSheetProps) {
  const [open, setOpen] = React.useState(false);
  const [definitions, setDefinitions] = React.useState<Definition[]>([]);

  const messages = [
    {
      role: "user",
      content: wordToGenerate,
    },
  ];

  useEffect(() => {
    const generateMeaningWithAI = async () => {
      try {
        const response = await fetch("/api/agents/meaning", {
          cache: "no-store",
          method: "POST",
          body: JSON.stringify({ messages }),
        });
        const data = await response.json();
        if (data.success) {
          const outputs = JSON.parse(data.meaningOutput);

          const meanings = outputs.meanings;

          const defs: Definition[] = [];
          for (const def of meanings) {
            defs.push({
              definition: def.definition,
              example: def.example,
              partOfSpeech: def.partOfSpeech,
            });
          }
          setDefinitions(defs);
        }else{
          toast.error(data.message);
        }
      } catch (error) {
        console.error("Error generating meaning with AI:", error);
      }
    };

    if (open) {
      generateMeaningWithAI();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, wordToGenerate]);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setDefinitions([]); // Clear the definitions when the sheet is closed
    }
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <p>
          Not satisfied with the meaning?
          <Button variant="link" onClick={() => setOpen(true)}>
            Use meaning agent
          </Button>
        </p>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{wordToGenerate}</SheetTitle>
        </SheetHeader>
        <div className="p-4 space-y-4">
          {definitions.length === 0 ? (
            <p className="text-center text-gray-500">Generating meaning...</p>
          ) : (
            definitions.map((def, index) => (
              <div key={index} className="p-4 bg-primary rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-primary-500 mb-2">
                  {def.partOfSpeech}
                </h2>
                <p className="text-gray-100 mb-2">
                  <strong>Definition:</strong> {def.definition}
                </p>
                {def.example && (
                  <p className="text-gray-100 italic">
                    <strong>Example:</strong> {def.example}
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
