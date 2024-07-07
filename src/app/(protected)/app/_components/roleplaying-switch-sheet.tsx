"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
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
import toast from "react-hot-toast";
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
  const [open, setOpen] = useState(false);
  const [selectedRoleplay, setSelectedRoleplay] = useState<Roleplay | null>(
    null
  );
  const [activeTab, setActiveTab] = useState("roleplay");

  const handleSetButton = () => {
    if (conversationOngoing) {
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

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <>
          <Switch
            checked={roleplayMode.agent === "roleplay"}
            id="roleplay-mode"
          />
          <Label htmlFor="roleplay-mode">Roleplay Mode</Label>
        </>
      </SheetTrigger>
      <SheetContent className="h-full overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Roleplay Mode</SheetTitle>
          {(selectedRoleplay || activeTab == "general") && (
            <Button onClick={() => handleSetButton()}>Set</Button>
          )}
          <SheetDescription>{`Select a roleplaying template or create new`}</SheetDescription>
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
