"use client";
import React, { useEffect, useRef, useState, useTransition } from "react";
import Chat from "./chat";
import ChatInput from "./chat-input";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";

export interface MessageType {
  role: "user" | "assistant";
  message: string;
}

export default function App({ session }: { session: any }) {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (message: string) => {
    // Add the user's message to the messages array
    const updatedMessages = [...messages, { role: "user", message }];
    setMessages(updatedMessages as MessageType[]);

    startTransition(async () => {
      try {
        console.log("Message sent:", message);
        
        // Prepare the messages for the API request
        const apiMessages = updatedMessages.map(msg => ({
          role: msg.role,
          content: msg.message,
        }));

        // Make the POST request to the /api/agents/general endpoint
        const response = await fetch("/api/agents/general", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: apiMessages,
            conversationId: "123",
          }),
        });

        const data = await response.json();

        if (data.success) {
          // Append the assistant's response to the messages array
          setMessages((prevMessages) => [
            ...prevMessages,
            { role: "assistant", message: data.message },
          ]);
        } else {
          // If the success is false, append the error message
          setMessages((prevMessages) => [
            ...prevMessages,
            { role: "assistant", message: data.message },
          ]);
        }
      } catch (error) {
        // Handle any errors that occur during the fetch
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            role: "assistant",
            message: "An error occurred. Please try again.",
          },
        ]);
      }
    });
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="h-full flex flex-col items-center justify-between w-full relative">
      {messages.length === 0 ? (
        <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-y-5 lg:gap-x-5">
          <Link target="_blank" href="/subscription/buy/starter">
            <Button>Buy Starter $7.00</Button>
          </Link>
          <Link target="_blank" href="/subscription/buy/pro">
            <Button>Buy Pro $14.00</Button>
          </Link>
          <Link target="_blank" href="/subscription/buy/advanced">
            <Button>Buy Advanced $21.00</Button>
          </Link>
          <Link target="_blank" href="/subscription/buy/refill">
            <Button>Buy Refill $7.00</Button>
          </Link>
        </div>
      ) : (
        <div
          className="flex-1 w-full max-w-2xl rounded-lg overflow-y-scroll no-scrollbar"
          ref={scrollAreaRef}
        >
          <Chat messages={messages} />
        </div>
      )}

      <ChatInput
        className="w-full max-w-2xl px-4 bg-dark rounded-lg pb-4"
        onSendMessage={handleSendMessage}
        isPending={isPending}
      />
    </div>
  );
}
