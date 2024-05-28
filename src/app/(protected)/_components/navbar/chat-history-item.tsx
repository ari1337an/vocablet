import { Button } from "@/app/_components/ui/button";
import React from "react";

export default function ChatHistoryItem({
  text,
  id,
}: {
  text: string;
  id: string;
}) {
  const truncatedText = text.length > 25 ? text.slice(0, 25)+"..." : text;
  return (
    <div>
      <Button
        className="w-full flex justify-start text-left text-base hover:bg-primary overflow-ellipsis"
        variant="ghost"
      >
        {truncatedText}
      </Button>
    </div>
  );
}
