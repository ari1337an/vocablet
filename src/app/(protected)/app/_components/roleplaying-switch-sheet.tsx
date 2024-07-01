"use client";

import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/app/_components/ui/sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/app/_components/ui/command";
import { cn } from "@/app/_lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { z } from "zod";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import { Button } from "@/app/_components/ui/button";
import useAppStore from "../../_store/useAppStore";
import { Switch } from "@/app/_components/ui/switch";
import { Label } from "@/app/_components/ui/label";
import { Input } from "@/app/_components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Textarea } from "@/app/_components/ui/textarea";
import { RoleplayTab } from "./roleplay-tab";

interface Roleplay {
  id: string;
  title: string;
  assistantRole: string;
  userRole: string;
  conversationTone: string;
  conversationContext: string;
}

export function RoleplayingSwitchSheet({
  conversationOngoing,
}: {
  conversationOngoing: boolean;
}) {
  const { roleplayMode, setRoleplayMode } = useAppStore();
  const [isMounted, setIsMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedRoleplay, setSelectedRoleplay] = useState<Roleplay | null>(
    null
  );
  const [activeTab, setActiveTab] = useState("roleplay");

  const handleSetButton = () => {
    if(conversationOngoing) {
      toast.error("Cannot change roleplay mode during conversation.");
      return;
    }
    if (selectedRoleplay && activeTab == "roleplay") {
      setRoleplayMode({
        agent: "roleplay",
        id: selectedRoleplay.id,
        title: selectedRoleplay.title,
        assistantRole: selectedRoleplay.assistantRole,
        userRole: selectedRoleplay.userRole,
        conversationTone: selectedRoleplay.conversationTone,
        conversationContext: selectedRoleplay.conversationContext,
      });
      setOpen(false);
    } else {
      setRoleplayMode({
        agent: "general",
      });
      setOpen(false);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        {/* <div> */}
        {isMounted ? (
          <Switch
            checked={roleplayMode.agent === "roleplay"}
            id="roleplay-mode"
          />
        ) : (
          <div></div>
        )}

        <Label>Roleplay Mode</Label>
        {/* </div> */}
      </SheetTrigger>
      <SheetContent className="z-20">
        <SheetHeader>
          <SheetTitle>Add Vocabulary to Bucket(s)</SheetTitle>
          <Button onClick={() => handleSetButton()}>Set</Button>
          <SheetDescription>{`Click Set when you're done.`}</SheetDescription>
        </SheetHeader>
        <Tabs defaultValue="roleplay" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="roleplay">Roleplay</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
          </TabsList>

          <TabsContent value="roleplay">
            <RoleplayTab
              setOpen={setOpen}
              setSelectedRoleplay={setSelectedRoleplay}
              selectedRoleplay={selectedRoleplay}
            />
          </TabsContent>
          <TabsContent value="general">
            <div>Click Set to select general agent.</div>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
