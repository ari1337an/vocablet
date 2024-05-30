"use client";

import React from "react";

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
import { Button } from "@/app/_components/ui/button";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { cn } from "@/app/_lib/utils";
import CircleXIcon from "@/app/_icons/circle-x";
import SidebarIcon from "@/app/_icons/sidebar";
import PenIcon from "@/app/_icons/pen";
import LearnIcon from "@/app/_icons/learn";
import SidebarButton from "./sidebar-icon";
import ChatHistory from "./chat-history";
import Link from "next/link";

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
  const todayItems = [
    { text: "How are you?xxxxxx≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈", id: "0" },
    { text: "How are you?", id: "1" },
    { text: "How are you?", id: "2" },
    { text: "How are you?", id: "3" },
  ];

  const yesterdayItems = [
    { text: "How are you?xxxxxx≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈", id: "0" },
    { text: "How are you?", id: "1" },
    { text: "How are you?", id: "2" },
    { text: "How are you?", id: "3" },
    { text: "How are you?", id: "4" },
    { text: "How are you?", id: "5" },
    { text: "How are you?", id: "6" },
    { text: "How are you?", id: "7" },
  ];

  return (
    <div className={cn(className, "z-50")}>
      <Drawer direction="left">
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
              <SidebarButton icon={<PenIcon />} text="New chat" />
              <SidebarButton icon={<LearnIcon />} text="Your Flashcards" />
            </div>
          </div>
          <ScrollArea className="h-screen">
            <div className="px-4 w-full">
              <div className="mt-10">
                <ChatHistory items={todayItems} title="Today" />
                <ChatHistory items={yesterdayItems} title="Yesterday" />
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
