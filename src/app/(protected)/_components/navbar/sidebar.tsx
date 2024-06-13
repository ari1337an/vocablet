"use client";

import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerPrimitive,
  DrawerTitle,
  DrawerTrigger,
} from "@/app/_components/ui/drawer";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { cn } from "@/app/_lib/utils";
import CircleXIcon from "@/app/_icons/circle-x";
import SidebarIcon from "@/app/_icons/sidebar";
import PenIcon from "@/app/_icons/pen";
import LearnIcon from "@/app/_icons/learn";
import SidebarButton from "./sidebar-icon";
import ChatHistory from "./chat-history";
import Link from "next/link";
import useAppStore, { Conversation } from "../../_store/useAppStore";
import { useRouter } from "next/navigation";

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {
  showBar?: boolean;
}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(({ className, children, showBar = true, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      {showBar ? (
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      ) : null}
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

export default function Navbar({ className }: { className?: string }) {
  const {
    conversations,
    setConversations,
    setMessages,
    setConversationId,
    addConversation,
  } = useAppStore();
  const [todayItems, setTodayItems] = useState<Conversation[]>([]);
  const [yesterdayItems, setYesterdayItems] = useState<Conversation[]>([]);
  const [last30DaysItems, setLast30DaysItems] = useState<Conversation[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchConversations = async () => {
      const response = await fetch("/api/conversation");
      const data = await response.json();
      if (data.success) {
        setConversations(data.conversations);
      }
    };

    fetchConversations();
  }, [setConversations]);

  useEffect(() => {
    const now = new Date();
    const startOfToday = new Date(now.setHours(0, 0, 0, 0));
    const endOfToday = new Date(now.setHours(23, 59, 59, 999));
    const startOfYesterday = new Date(
      new Date().setDate(new Date().getDate() - 1)
    );
    startOfYesterday.setHours(0, 0, 0, 0);
    const endOfYesterday = new Date(
      new Date().setDate(new Date().getDate() - 1)
    );
    endOfYesterday.setHours(23, 59, 59, 999);
    const startOfLast30Days = new Date(
      new Date().setDate(new Date().getDate() - 30)
    );

    const today: Conversation[] = [];
    const yesterday: Conversation[] = [];
    const last30Days: Conversation[] = [];

    conversations.forEach((conversation) => {
      const createdAt = new Date(conversation.createdAt);

      if (createdAt >= startOfToday && createdAt <= endOfToday) {
        today.push(conversation);
      } else if (createdAt >= startOfYesterday && createdAt <= endOfYesterday) {
        yesterday.push(conversation);
      } else if (createdAt >= startOfLast30Days && createdAt < startOfToday) {
        last30Days.push(conversation);
      }
    });

    // Sort the conversations by createdAt date
    today.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    yesterday.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    last30Days.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    setTodayItems(today);
    setYesterdayItems(yesterday);
    setLast30DaysItems(last30Days);
  }, [conversations]);

  const handleNewChat = () => {
    // Create a new conversation and add it to the store
    const newConversation = {
      id: `temp-id-${Date.now()}`, // Replace with actual ID generation logic
      title: "New Chat",
      createdAt: new Date().toISOString(),
    };
    addConversation(newConversation);
    setConversationId(newConversation.id);
    setMessages([]);
    router.push("/app");
  };

  const handleFlashCards = () => {
    router.push("/flashcards");
  };

  return (
    <div className={cn(className, "z-50")}>
      <Drawer direction="left" noBodyStyles={true}>
        <DrawerTrigger>
          <SidebarIcon className="z-50 hover:bg-accent hover:text-accent-foreground w-5 h-5 fill-white hover:fill-primary" />
        </DrawerTrigger>
        <DrawerContent className="h-screen top-0 left-0 right-auto mt-0 w-[350px] rounded-none bg-secondary drop-shadow-2xl z-50">
          <div className="mx-5">
            <div className="flex flex-row items-center justify-between">
              <DrawerHeader>
                <DrawerClose>
                  <DrawerTitle className="text-left">
                    <Link href="/app">
                      {process.env.NEXT_PUBLIC_BRAND_NAME}
                    </Link>
                  </DrawerTitle>
                </DrawerClose>
                <DrawerDescription>
                  by AlphaWolf Ventures Inc.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerClose>
                <CircleXIcon className="w-5 h-5 fill-white hover:fill-primary" />
              </DrawerClose>
            </div>
            <div className="flex flex-col my-4">
              <DrawerClose asChild>
                <SidebarButton
                  icon={<PenIcon />}
                  text="New chat"
                  onClick={handleNewChat}
                />
              </DrawerClose>
              <SidebarButton icon={<LearnIcon />} text="Your Flashcards" onClick={handleFlashCards} />
            </div>
          </div>
          <ScrollArea className="h-screen">
            <div className="px-4 w-full">
              <div className="mt-10">
                {todayItems.length !== 0 && (
                  <ChatHistory items={todayItems} title="Today" />
                )}
                {yesterdayItems.length !== 0 && (
                  <ChatHistory items={yesterdayItems} title="Yesterday" />
                )}
                {last30DaysItems.length !== 0 && (
                  <ChatHistory items={last30DaysItems} title="Last 30 Days" />
                )}
              </div>
            </div>
          </ScrollArea>
          <DrawerFooter className="text-center text-muted-foreground gap-y-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()}{" "}
              {process.env.NEXT_PUBLIC_BRAND_NAME}
            </p>
            <p className="text-sm">by AlphaWolf Ventures Inc.</p>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
