"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/_components/ui/tooltip";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/ui/tabs";
import { Button } from "@/app/_components/ui/button";
import useAppStore from "../../_store/useAppStore";
import { Switch } from "@/app/_components/ui/switch";
import toast from "react-hot-toast";
import { RoleplayTab } from "./roleplay-tab";
import { Label } from "@/app/_components/ui/label";
import UpgradeDialog from "./upgrade-dialog";
import Disclaimer from "./disclaimer";
import ArrowTurnDownLeftIcon from "@/app/_icons/arrow-turn-down-left";
import { Textarea } from "@/app/_components/ui/textarea";
import ShuffleIcon from "@/app/_icons/shuffle";

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
  const [hasRoleplayAccess, setHasRoleplayAccess] = useState(true);
  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false);

  useEffect(() => {
    async function checkAccess() {
      const response = await fetch("/api/check-roleplay-access");
      const data = await response.json();
      if (data.success) {
        if (data.hasRoleplayAccess) {
          setHasRoleplayAccess(data.hasRoleplayAccess);
        } else {
          setShowUpgradeDialog(true);
        }
      } else {
        console.error("Failed to check roleplay access.");
        // setShowUpgradeDialog(true);
      }
    }
    if (open) {
      checkAccess();
    }
  }, [open]);

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
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          {roleplayMode.agent === "roleplay" ? (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className="mr-2 p-2 bg-primary hover:bg-primary/70 text-white "
                  >
                    <ShuffleIcon className="w-6 h-6 fill-secondary" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Roleplaying: ON</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    className=" p-2 bg-secondary hover:bg-primary/70 text-white "
                  >
                    <ShuffleIcon className="w-6 h-6 fill-white" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Roleplaying: OFF</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
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
                isSheetOpen={open}
                hasRoleplayAccess={hasRoleplayAccess}
              />
            </TabsContent>
            <TabsContent value="general">
              <div>Click Set to select general agent.</div>
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>
      <UpgradeDialog open={showUpgradeDialog} setOpen={setShowUpgradeDialog} />
    </>
  );
}
