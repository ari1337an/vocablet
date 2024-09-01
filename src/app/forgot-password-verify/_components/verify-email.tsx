"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { useState, useTransition } from "react";
import { SetPasswordSchema } from "@/server/validation/account/set-password-form";
import SetPasswordAction from "@/server/actions/account/set-password";
import CheckIcon from "@/app/_icons/check";
import XMarkIcon from "@/app/_icons/x-mark";
import { CSSTransition } from "react-transition-group";
import "@/app/auth/_components/vibrate-transition.css";
import "@/app/auth/_components/slide-right-transition.css";
import { useReCaptcha } from "next-recaptcha-v3";
import VerifyAndChangePass from "@/server/actions/auth/verify-and-change-pass";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { REQUEST_TO_LOGIN_ROUTE } from "@/server/authentication/routes";

export default function ChangePasswordByVerifyingCode({
  code,
}: {
  code: string | null;
}) {
  const [isPasswordPending, startPasswordTransition] = useTransition();
  const [isPasswordSuccess, setIsPasswordSuccess] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState<string | null>(null);

  // Import 'executeRecaptcha' using 'useReCaptcha' hook
  const { executeRecaptcha } = useReCaptcha();

  const passwordForm = useForm({
    resolver: zodResolver(SetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });
  const router = useRouter();

  const handlePasswordSubmit = (values: z.infer<typeof SetPasswordSchema>) => {
    setIsPasswordSuccess(false);
    setIsPasswordError(false);
    setPasswordMessage(null);
    startPasswordTransition(async () => {
      // Generate ReCaptcha tokenx
      const token = await executeRecaptcha("change_password_form");

      VerifyAndChangePass(code, values, token)
        .then((response) => {
          setPasswordMessage(response.message);
          if (response.success) {
            setIsPasswordSuccess(true);
            setTimeout(() => {
              setIsPasswordSuccess(false);
              router.push(REQUEST_TO_LOGIN_ROUTE);
              // passwordForm.reset(); // Reset the password form on success
            }, 3000);
          } else {
            setIsPasswordError(true);
            setTimeout(() => setIsPasswordError(false), 3000);
          }
        })
        .catch(() => {
          setIsPasswordError(true);
          setPasswordMessage("An error occurred while updating the password.");
          setTimeout(() => setIsPasswordError(false), 3000);
        });
    });
  };

  return (
    <Form {...passwordForm}>
      <form
        onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)}
        className="flex-1 space-y-6 bg-black p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold">Set Password</h2>
        <p className="text-muted-foreground">
          Set a new password for your account using the verification code.
        </p>

        <FormField
          control={passwordForm.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  autoComplete="false"
                  placeholder="********"
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={passwordForm.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder="********"
                  className="w-full"
                  autoComplete="false"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <CSSTransition
          in={isPasswordError}
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
              {passwordMessage}
            </div>
          </Button>
        </CSSTransition>

        {isPasswordSuccess && (
          <Button
            disabled={true}
            className="w-full disabled:opacity-100 bg-green-600"
            type="submit"
          >
            <CSSTransition
              in={isPasswordSuccess}
              timeout={{ enter: 1000, exit: 0 }}
              classNames="slide-right"
              unmountOnExit
            >
              <div className="flex flex-row gap-x-3 text-black">
                <CheckIcon className="w-5 h-5 text-black" />
                <span className="button-text">{passwordMessage}</span>
              </div>
            </CSSTransition>
          </Button>
        )}

        {!isPasswordError && !isPasswordSuccess && (
          <Button
            type="submit"
            disabled={isPasswordPending}
            className={`w-full text-white py-2 ${
              isPasswordPending ? "opacity-50" : ""
            }`}
          >
            {isPasswordPending ? "Updating..." : "Update"}
          </Button>
        )}
      </form>
    </Form>
  );
}
