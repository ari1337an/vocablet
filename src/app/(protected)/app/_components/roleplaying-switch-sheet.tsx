"use client";

import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter
} from "@/app/_components/ui/sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { z } from "zod";
import { Button } from "@/app/_components/ui/button";
import useAppStore from "../../_store/useAppStore";
import { Switch } from "@/app/_components/ui/switch";
import { Label } from "@/app/_components/ui/label";
import { Input } from "@/app/_components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";


const formSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Roleplay must be at least 3 characters." })
    .max(50, { message: "Roleplay cannot be more than 50 characters." }),
  assistantRole: z
    .string()
    .min(3, { message: "Assistant role must be at least 3 characters." })
    .max(50, { message: "Assistant role cannot be more than 50 characters." }),
  userRole: z
    .string()
    .min(2, { message: "User role be at least 3 characters." })
    .max(50, { message: "User role cannot be more than 50 characters." }),
  conversationTone: z
    .string()
    .min(3, { message: "Conversation tone must be at least 3 characters." })
    .max(50, {
      message: "Conversation tone cannot be more than 50 characters.",
    }),
  conversationContext: z
    .string()
    .max(300, { message: "Conversation Context cannot be more than 300 characters." }),
});


export function RoleplayingSwitchSheet() {
  const { roleplayMode, setRoleplayMode } = useAppStore();
  const [open, setOpen] = useState(false);

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

  const onSubmit = (values: { title: string, assistantRole: string, userRole: string, conversationTone: string, conversationContext: string }) => {

    // setRoleplayMode({
    //     agent: "roleplay",
    //     assistantRole: values.assistantRole,
    //     userRole: values.userRole,
    //     conversationTone: values.conversationTone,
    //     conversationContext: values.conversationContext,
    //     });
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
          setRoleplayMode({
            agent: "roleplay",
            id: data.roleplay.id,
            title: values.title,
            assistantRole: values.assistantRole,
            userRole: values.userRole,
            conversationTone: values.conversationTone,
            conversationContext: values.conversationContext,
          });

          toast.success("Roleplay has been saved!");
          form.reset(); // Reset the form
          setOpen(false);
        } else {
          console.error("Error creating vocabulary:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error creating vocab:", error);
      });
  };


  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <div>
          <Switch
            checked={roleplayMode.agent === "roleplay"}
            id="roleplay-mode"
          />
          <Label>Roleplay Mode</Label>
        </div>
      </SheetTrigger>
      <SheetContent className="z-20">
        <SheetHeader>
          <SheetTitle>Add Vocabulary to Bucket(s)</SheetTitle>
          <SheetDescription>{`Click Set when you're done.`}</SheetDescription>
        </SheetHeader>
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
                        placeholder={roleplayMode.assistantRole}
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
                        placeholder={roleplayMode.assistantRole}
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
                      <Input placeholder={roleplayMode.userRole} {...field} />
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
                        placeholder={roleplayMode.conversationTone}
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
                      <Input
                        placeholder={roleplayMode.conversationContext}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SheetFooter>
                <Button type="submit">Set</Button>
              </SheetFooter>
            </form>
          </Form>
        </div>
        {/*         
        <Label htmlFor="assistant-role">Assistant role</Label>
        <Input id="assistant-role" placeholder="Assistant role" />

        <Label htmlFor="user-role">User role</Label>
        <Input id="user-role" placeholder="User role" />

        <Label htmlFor="conversation-tone">Conversation tone</Label>
        <Input id="conversation-tone" placeholder="Conversation tone" />

        <Label htmlFor="conversation-context">Conversation context</Label>
        <Input id="conversation-context" placeholder="Conversation context" /> */}
      </SheetContent>
    </Sheet>
  );
}
