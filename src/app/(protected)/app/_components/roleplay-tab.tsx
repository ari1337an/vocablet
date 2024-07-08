import React, { useState, useEffect } from "react";
import { SheetFooter } from "@/app/_components/ui/sheet";
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
import { Button } from "@/app/_components/ui/button";
import useAppStore from "../../_store/useAppStore";
import { Input } from "@/app/_components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Textarea } from "@/app/_components/ui/textarea";

const formSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Roleplay must be at least 3 characters." })
    .max(50, { message: "Roleplay cannot be more than 50 characters." }),
  assistantRole: z
    .string()
    .min(3, { message: "Assistant role must be at least 3 characters." })
    .max(100, { message: "Assistant role cannot be more than 50 characters." }),
  userRole: z
    .string()
    .min(2, { message: "User role be at least 3 characters." })
    .max(100, { message: "User role cannot be more than 50 characters." }),
  conversationTone: z
    .string()
    .min(3, { message: "Conversation tone must be at least 3 characters." })
    .max(50, {
      message: "Conversation tone cannot be more than 50 characters.",
    }),
  conversationContext: z.string().max(300, {
    message: "Conversation Context cannot be more than 300 characters.",
  }),
});

interface Roleplay {
  id: string;
  title: string;
  assistantRole: string;
  userRole: string;
  conversationTone: string;
  conversationContext: string;
}

export function RoleplayTab({
  setOpen,
  setSelectedRoleplay,
  selectedRoleplay,
  isSheetOpen,
  hasRoleplayAccess,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedRoleplay: React.Dispatch<React.SetStateAction<Roleplay | null>>;
  selectedRoleplay: Roleplay | null;
  isSheetOpen: boolean;
  hasRoleplayAccess: boolean;
}) {
  const { roleplayMode, setRoleplayMode } = useAppStore();
  const [loadedRoleplays, setLoadedRoleplays] = useState<Roleplay[]>([]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      assistantRole: "",
      userRole: "",
      conversationTone: "",
      conversationContext: "",
    },
  });

  useEffect(() => {
    const fetchRoleplays = async () =>
      fetch("/api/roleplay")
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setLoadedRoleplays(data.roleplays);
          } else {
            console.error("Error loading roleplays:", data.error);
          }
        })
        .catch((error) => {
          console.error("Error loading roleplays:", error);
        });
    if (isSheetOpen) {
      fetchRoleplays();
    }
  }, [setLoadedRoleplays, selectedRoleplay, isSheetOpen]);

  const onSubmit = (values: {
    title: string;
    assistantRole: string;
    userRole: string;
    conversationTone: string;
    conversationContext: string;
  }) => {
    fetch(`/api/roleplay`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSelectedRoleplay(data.roleplay);
          toast.success("Roleplay has been saved!");
        } else {
          toast.error(data.message);
          console.error("Error:", data.error);
        }
      })
      .catch((error) => {
        toast.error(error.message);
        console.error("Error:", error);
      });
  };

  return (
    <div className="grid gap-4 py-4 max-h-fit">
      <ScrollArea>
        <Command className="w-full z-50">
          <CommandInput
            placeholder="Search Roleplay Template..."
            className="h-9 z-50"
          />
          <CommandList className="z-50 h-40">
            <CommandEmpty>
              {!hasRoleplayAccess && (
                <div>
                  You do not have the access to use this feature. Please
                  upgrade.
                </div>
              )}
              {hasRoleplayAccess && loadedRoleplays.length === 0 && (
                <div>No Roleplay template found.</div>
              )}
            </CommandEmpty>
            <CommandGroup>
              {loadedRoleplays.map((roleplay) => (
                <CommandItem
                  key={roleplay.id}
                  value={roleplay.title}
                  onSelect={() => setSelectedRoleplay(roleplay)}
                >
                  {roleplay.title}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedRoleplay?.id === roleplay.id
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </ScrollArea>
      {hasRoleplayAccess && (
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Roleplay title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={selectedRoleplay?.title ?? ""}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="assistantRole"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assistant Role</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={selectedRoleplay?.assistantRole ?? ""}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="userRole"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Role</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={selectedRoleplay?.userRole ?? ""}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="conversationTone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Conversation Tone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={selectedRoleplay?.conversationTone ?? ""}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="conversationContext"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Conversation Context</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={selectedRoleplay?.conversationContext}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SheetFooter>
                <Button type="submit">Create New</Button>
              </SheetFooter>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
}
