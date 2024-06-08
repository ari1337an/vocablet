"use client";
import React, { useEffect, useRef, useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import Chat from "./chat";
import ChatInput from "./chat-input";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { Progress } from "@/app/_components/ui/progress";
import useAppStore from "../../_store/useAppStore";

export default function App({
  session,
  fetchConversationId,
}: {
  session: any;
  fetchConversationId: string | null;
}) {
  const {
    messages,
    conversationId,
    addMessage,
    setMessages,
    setConversationId,
    updateMessage,
    addConversation,
  } = useAppStore();
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [initialFetchComplete, setInitialFetchComplete] = useState(false);
  const [progress, setProgress] = useState(33);
  const router = useRouter();
  const handleSendMessage = async (message: string) => {
    // Add the user's message to the messages array
    addMessage({ role: "user", message });

    startTransition(async () => {
      try {
        // Prepare the messages for the API request
        const apiMessages = [...messages, { role: "user", message }].map(
          (msg) => ({
            role: msg.role,
            content: msg.message,
          })
        );

        // Determine if this is a new conversation
        const requestNewConversation = messages.length === 0;

        // Make the POST request to the /api/agents/general endpoint
        const response = await fetch("/api/agents/general", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: apiMessages,
            conversationId: requestNewConversation ? null : conversationId,
            requestNewConversation,
            useVocabAgent: true,
          }),
        });

        const data = await response.json();

        const user_message = data.user_message;
        const enhanced_text = data.enhanced_text;
        const words = data.words;
        const phrases = data.phrases;

        if (data.success) {
          // Find the index of the last user message to update it
          const lastUserMessageIndex = messages.length;

          // Update the enhanced text and other fields for the last user message
          updateMessage(lastUserMessageIndex, {
            enhancedText: enhanced_text,
            words: words,
            phrases: phrases,
          });
          // Update the conversationId if it's a new conversation
          if (requestNewConversation && data.conversationId) {
            setConversationId(data.conversationId);
          }

          // Append the assistant's response to the messages array
          addMessage({ role: "assistant", message: data.message });

          // Append the new conversation to the conversations array
          addConversation({
            id: data.conversationId,
            title: data.title,
            createdAt: data.createdAt,
          });
        } else {
          // If the success is false, append the error message
          addMessage({ role: "assistant", message: data.message });
        }
      } catch (error) {
        // Handle any errors that occur during the fetch
        addMessage({
          role: "assistant",
          message: "An error occurred. Please try again.",
        });
      }
    });
  };

  useEffect(() => {
    const fetchInitialConversation = async () => {
      if (fetchConversationId) {
        try {
          setProgress(54);
          const response = await fetch(
            `/api/conversation/${fetchConversationId}`
          );
          const data = await response.json();
          if (data.success) {
            setProgress(60);
            setTimeout(() => {
              setMessages(data.messages);
              setConversationId(fetchConversationId);
              setProgress(100);
              setInitialFetchComplete(true);
            }, 1500);
          } else {
            setTimeout(() => {
              setProgress(100);
              router.push("/app/404");
            }, 1500);
          }
        } catch (error) {
          setTimeout(() => {
            setProgress(100);
            router.push("/app/404");
          }, 1500);
        }
      } else {
        setConversationId(null);
        setMessages([]);
        setInitialFetchComplete(true);
      }
    };

    fetchInitialConversation();
  }, [fetchConversationId, setMessages, setConversationId, router]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  if (fetchConversationId && !initialFetchComplete) {
    return (
      <main className="min-h-screen h-full flex flex-col items-center justify-center gap-y-5">
        <div>Loading conversation...</div>
        <Progress value={progress} className="w-[50%] lg:w-[20%]" />
      </main>
    );
  }

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
          className="flex-1 w-full max-w-4xl rounded-lg overflow-y-scroll no-scrollbar"
          ref={scrollAreaRef}
        >
          <Chat messages={messages} />
        </div>
      )}

      <ChatInput
        className="w-full max-w-4xl px-4 bg-dark rounded-lg pb-4"
        onSendMessage={handleSendMessage}
        isPending={isPending}
      />
    </div>
  );
}
