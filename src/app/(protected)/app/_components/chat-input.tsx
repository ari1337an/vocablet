import React, { useState, useRef, useEffect } from "react";
import Disclaimer from "./disclaimer";
import ArrowTurnDownLeftIcon from "@/app/_icons/arrow-turn-down-left";
import { Textarea } from "@/app/_components/ui/textarea";
import { RoleplayingSwitchSheet } from "./roleplaying-switch-sheet";

type ChatInputProps = {
  onSendMessage: (message: string) => void;
  className?: string;
  isPending?: boolean;
};

export default function ChatInput({
  onSendMessage,
  className,
  isPending = false,
}: ChatInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const currentTextareaRef = textareaRef.current;
      if (currentTextareaRef && document.activeElement !== currentTextareaRef) {
        // Allow pasting with Ctrl+V or Command+V
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "v") return;

        // Check if key is not a modifier key (shift, ctrl, alt, meta)
        if (e.key.length > 1) return;

        // Check if the user isn't running a command, e.g., ctrl+c 
        if (
          e
            .composedPath()
            .some((el) => (el as HTMLElement).tagName === "INPUT") ||
          e.ctrlKey ||
          e.metaKey
        )
          return;

        // Focus the textarea only and the key will be pressed there
        currentTextareaRef.focus();
        setValue(currentTextareaRef.value);
      }
      return;
    };

    document.addEventListener("keydown", handleKeyPress);

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleSubmit = () => {
    if (value.trim()) {
      onSendMessage(value);
      setValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      if (e.ctrlKey || e.metaKey) {
        // Insert a newline when Ctrl+Enter or Command+Enter is pressed
        e.preventDefault();
        setValue(value + "\n");
      } else {
        // Submit the message when Enter is pressed
        e.preventDefault();
        handleSubmit();
      }
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  // return (
  //   <div className={className}>
  //     <div className="flex items-center w-full relative">
  //       <Textarea
  //         ref={textareaRef}
  //         className="flex-grow py-4 pl-4 pr-20 bg-dark text-white/80 placeholder:text-white/50 rounded-xl focus-visible:ring-1 resize-none overflow-y-auto"
  //         placeholder="Chat with AI..."
  //         value={value}
  //         onChange={(e) => setValue(e.target.value)}
  //         onKeyDown={handleKeyDown}
  //         rows={1}
  //         disabled={isPending}
  //       />
  //       <button
  //         className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-primary hover:bg-primary/70 text-white rounded-full"
  //         onClick={handleSubmit}
  //         disabled={isPending}
  //       >
  //         <ArrowTurnDownLeftIcon className="w-6 h-6" />
  //       </button>
  //     </div>

  //     <Disclaimer />
  //   </div>
  // );

  return (
    <div className={className}>
      <div className="flex items-center w-full relative">
        <RoleplayingSwitchSheet conversationOngoing={false} />
        <Textarea
          ref={textareaRef}
          className="flex-grow py-4 pl-4 pr-20 bg-dark text-white/80 placeholder:text-white/50 rounded-xl focus-visible:ring-1 resize-none overflow-y-auto"
          placeholder="Chat with AI..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          disabled={isPending}
        />
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-primary hover:bg-primary/70 text-white rounded-full"
          onClick={handleSubmit}
          disabled={isPending}
        >
          <ArrowTurnDownLeftIcon className="w-6 h-6" />
        </button>
      </div>

      <Disclaimer />
    </div>
  );
}
