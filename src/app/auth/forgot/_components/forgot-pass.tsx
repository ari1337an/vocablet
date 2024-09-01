"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/app/_components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { z } from "zod";
import { Separator } from "@/app/_components/ui/separator";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import toast from "react-hot-toast";
import AlternateOption from "../../_components/alternate-option";
import { CSSTransition } from "react-transition-group";
import CheckIcon from "@/app/_icons/check";
import { useSignInCallbackUrl } from "@/app/_hooks/auth/useSignInCallbackUrl";
import XMarkIcon from "@/app/_icons/x-mark";
import "../../_components/vibrate-transition.css";
import "../../_components/slide-right-transition.css";
import { Suspense } from "react";
import { ForgotFormSchema } from "@/server/validation/auth/forgot-form";
import ForgotPasswordAction from "@/server/actions/auth/forgot-password-usecase";
import { useReCaptcha } from "next-recaptcha-v3";
import Link from "next/link";

export function ForgotPassword() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isSuccessAnimation, setIsSuccessAnimation] = useState(false);
  const [isErrorAnimation, setIsErrorAnimation] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Import 'executeRecaptcha' using 'useReCaptcha' hook
  const { executeRecaptcha } = useReCaptcha();

  const form = useForm<z.infer<typeof ForgotFormSchema>>({
    resolver: zodResolver(ForgotFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function onSubmit(values: z.infer<typeof ForgotFormSchema>) {
    // clear the messages
    setError(null);
    setSuccess(null);

    startTransition(async () => {
      // Generate ReCaptcha token
      const token = await executeRecaptcha("password_reset_form_submit");

      // call the login server action
      ForgotPasswordAction(values, token)
        .then((result) => {
          if (result && result.success) {
            setSuccess(result.message || null);
            setIsSuccessAnimation(true);
          } else {
            setError(result.message || "Something went wrong!");
            setIsErrorAnimation(true);
            setTimeout(() => {
              setIsErrorAnimation(false);
            }, 5000);
          }
        })
        .catch((error) => {
          toast(error.message, { icon: "❌", id: "1" });
        });
    });
  }

  return (
    <Suspense>
      <div className="min-h-screen m-auto flex flex-col items-center justify-center gap-y-5">
        <h1 className="text-2xl font-semibold">Reset your password</h1>
        <div className="w-2/3 sm:w-1/2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={
                          isPending || isErrorAnimation || isSuccessAnimation
                        }
                        placeholder="name@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CSSTransition
                in={isErrorAnimation}
                timeout={{ enter: 1000, exit: 0 }}
                classNames="vibrate"
                unmountOnExit
              >
                <Button
                  disabled={true}
                  className="w-full bg-red-600 hover:bg-red-600 disabled:opacity-100"
                >
                  <div className="flex flex-row gap-x-3 text-black">
                    <XMarkIcon className="w-5 h-5 text-black" />
                    {error}
                  </div>
                </Button>
              </CSSTransition>

              {isSuccessAnimation && (
                <Button
                  disabled={true}
                  className="w-full disabled:opacity-100 bg-green-600"
                  type="submit"
                >
                  <CSSTransition
                    in={isSuccessAnimation}
                    timeout={{ enter: 1000, exit: 0 }}
                    classNames="slide-right"
                    unmountOnExit
                  >
                    <div className="flex flex-row gap-x-3 text-black">
                      <CheckIcon className="w-5 h-5 text-black" />
                      <span className="button-text">{success}</span>
                    </div>
                  </CSSTransition>
                </Button>
              )}

              {!isErrorAnimation && !success && (
                <Button disabled={isPending} className="w-full" type="submit">
                  Send Verification Link
                </Button>
              )}
            </form>
          </Form>
          <div className="flex items-center justify-center my-2">
            <Separator className="w-1/4 h-0.5 rounded bg-slate-200" />
            <div className="mx-2 text-white">or</div>
            <Separator className="w-1/4 h-0.5 rounded bg-slate-200" />
          </div>
          <AlternateOption />
        </div>
      </div>
    </Suspense>
  );
}
