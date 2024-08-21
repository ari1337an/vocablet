"use client";
import React, { useEffect, useRef, useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import Chat from "./chat";
import ChatInput from "./chat-input";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { Progress } from "@/app/_components/ui/progress";
import useAppStore from "../../_store/useAppStore";
import { Label } from "@/app/_components/ui/label";
import { Switch } from "@/app/_components/ui/switch";
import { RoleplayingSwitchSheet } from "./roleplaying-switch-sheet";
import { FlipWords } from "@/app/(landing)/_aceternity/flip-words";
import { CommandShortcut } from "@/app/_components/ui/command";

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
    roleplayMode,
    setRoleplayMode,
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
        let response;
        // console.log(roleplayMode);
        if (roleplayMode.agent === "roleplay") {
          response = await fetch("/api/agents/roleplay", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              roleplayId: roleplayMode.id,
              messages: apiMessages,
              conversationId: requestNewConversation ? null : conversationId,
              requestNewConversation,
              useVocabAgent: true,
            }),
          });
        } else {
          response = await fetch("/api/agents/general", {
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
        }
        // Make the POST request to the /api/agents/general endpoint

        // Read the json response
        const data = await response.json();

        if (data.success) {
          // Add the Agent Suggested text to the UI.
          addMessage({
            role: "agent",
            enhancedText: data.vocab_agent_response.enhanced_text,
            words: data.vocab_agent_response.enhanced_words,
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
              // console.log('data::', data);
              if (data.roleplayResponse.hasRoleplayEnabled) {
                // console.log('roleplayResponse::', data.roleplayResponse);
                const roleplayModeResponse =
                  data.roleplayResponse.conversationRoleplay.Roleplay;
                // console.log('conv rolplay: ', roleplayModeResponse);
                setRoleplayMode({ agent: "roleplay", ...roleplayModeResponse });
              } else {
                setRoleplayMode({ agent: "general" });
              }
              // setRoleplayMode({})
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
  }, [
    fetchConversationId,
    setMessages,
    setConversationId,
    router,
    setRoleplayMode,
  ]);

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
      {/* <div className="flex justify-end w-full px-5">
      </div> */}
      {messages.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-y-5 lg:gap-x-5">
          {/* <div className="text-4xl font-extrabold"><FlipWords words={["Hi"]} /> <br /></div> */}
          <div className="text-muted-foreground">
            Write something in the chatbox and hit{" "}
            <CommandShortcut>Enter</CommandShortcut>.
          </div>
          {/* <Link target="_blank" href="/subscription/buy/starter">
            <Button>Buy Starter $14.99</Button>
          </Link>
          <Link target="_blank" href="/subscription/buy/pro">
            <Button>Buy Pro $29.99</Button>
          </Link> */}
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
        className="w-full max-w-4xl px-4 rounded-lg pb-4"
        onSendMessage={handleSendMessage}
        isPending={isPending}
      />
    </div>
  );
}
