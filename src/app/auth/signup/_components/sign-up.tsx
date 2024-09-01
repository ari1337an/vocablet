"use client";
import { SignupFormSchema } from "@/server/validation/auth/signup-form";
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
import OAuthSection from "../../_components/oauth-section";
import { Separator } from "@/app/_components/ui/separator";
import AlternateOption from "../../_components/alternate-option";
import { useState, useTransition } from "react";
import { PasswordInput } from "../../_components/password-input";
import SignupAction from "@/server/actions/auth/signup-usecase";
import CheckIcon from "@/app/_icons/check";
import { CSSTransition } from "react-transition-group";
import SignInAction from "@/server/actions/auth/login-usecase";
import { useSignInCallbackUrl } from "@/app/_hooks/auth/useSignInCallbackUrl";
import { useRouter } from "next/navigation";
import XMarkIcon from "@/app/_icons/x-mark";
import toast from "react-hot-toast";
import "../../_components/vibrate-transition.css";
import "../../_components/slide-right-transition.css";
import { useReCaptcha } from "next-recaptcha-v3";

export function SignUp() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccessAnimation, setIsSuccessAnimation] = useState(false);
  const [isErrorAnimation, setIsErrorAnimation] = useState(false);
  const router = useRouter();
  const callbackUrl = useSignInCallbackUrl();

  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Import 'executeRecaptcha' using 'useReCaptcha' hook
  const { executeRecaptcha } = useReCaptcha();

  function onSubmit(values: z.infer<typeof SignupFormSchema>) {
    // clear the messages
    setError(null);
    setSuccess(null);

    startTransition(async () => {
      // Generate ReCaptcha token
      const token = await executeRecaptcha("signup_form_submit");

      // call the signup server action
      SignupAction(values, token)
        .then((result) => {
          if (result.success) {
            setSuccess(result.message || null);
            setIsSuccessAnimation(true);
            setTimeout(() => {
              SignInAction({ email: values.email, password: values.password })
                .then((r) => {
                  if (r.success) {
                    router.push(callbackUrl);
                  } else {
                    toast(r.message, { icon: "❌", id: "1" });
                  }
                })
                .catch((error) => {
                  toast(error.message, { icon: "❌", id: "1" });
                });
            }, 2000);
          } else {
            setError(result.message || null);
            setIsErrorAnimation(true);
            setTimeout(() => {
              setIsErrorAnimation(false);
            }, 5000);
          }
        })
        .catch((error) => {
          toast(error.message, { icon: "❌", id: "2" });
        });
    });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen m-auto flex flex-col items-center justify-center gap-y-5">
      <h1 className="text-2xl font-semibold">Create an account</h1>
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
                      disabled={isPending}
                      placeholder="name@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      field={field}
                      disabled={isPending}
                      showPassword={showPassword}
                      placeholder="********"
                      togglePasswordVisibility={togglePasswordVisibility}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      field={field}
                      disabled={isPending}
                      showPassword={showConfirmPassword}
                      placeholder="********"
                      togglePasswordVisibility={toggleConfirmPasswordVisibility}
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
                Signup
              </Button>
            )}
          </form>
        </Form>
        <div className="flex items-center justify-center my-2">
          <Separator className="w-1/4 h-0.5 rounded bg-slate-200" />
          <div className="mx-2 text-white">or</div>
          <Separator className="w-1/4 h-0.5 rounded bg-slate-200" />
        </div>
        <OAuthSection />
        <AlternateOption />
      </div>
    </div>
  );
}
