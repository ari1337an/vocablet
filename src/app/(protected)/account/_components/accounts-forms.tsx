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
import { ChangePasswordSchema } from "@/server/validation/account/change-password-form";
import { SetPasswordSchema } from "@/server/validation/account/set-password-form";
import { ProfileSchema } from "@/server/validation/account/profile-form";
import { z } from "zod";
import UpdateNameAction from "@/server/actions/account/update-name";
import ChangePasswordAction from "@/server/actions/account/change-password";
import SetPasswordAction from "@/server/actions/account/set-password";
import CheckIcon from "@/app/_icons/check";
import XMarkIcon from "@/app/_icons/x-mark";
import { CSSTransition } from "react-transition-group";
import "@/app/auth/_components/vibrate-transition.css";
import "@/app/auth/_components/slide-right-transition.css";

export default function AccountForms({
  user,
}: {
  user: {
    firstName: string;
    lastName: string;
    emailId: string;
    hasPassword: boolean;
  };
}) {
  const [isProfilePending, startProfileTransition] = useTransition();
  const [isPasswordPending, startPasswordTransition] = useTransition();
  const [isProfileSuccess, setIsProfileSuccess] = useState(false);
  const [isProfileError, setIsProfileError] = useState(false);
  const [isPasswordSuccess, setIsPasswordSuccess] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [hasPassword, setHasPassword] = useState(user.hasPassword);
  const [profileMessage, setProfileMessage] = useState<string | null>(null);
  const [passwordMessage, setPasswordMessage] = useState<string | null>(null);
  const [showSetPasswordForm, setShowSetPasswordForm] = useState(!user.hasPassword);

  const profileForm = useForm({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });

  const passwordSchema = hasPassword ? ChangePasswordSchema : SetPasswordSchema;

  const passwordForm = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const handleProfileSubmit = (values: z.infer<typeof ProfileSchema>) => {
    setIsProfileSuccess(false);
    setIsProfileError(false);
    setProfileMessage(null);
    startProfileTransition(() => {
      UpdateNameAction(values)
        .then((response) => {
          setProfileMessage(response.message);
          if (response.success) {
            setIsProfileSuccess(true);
            setTimeout(() => setIsProfileSuccess(false), 3000);
          } else {
            setIsProfileError(true);
            setTimeout(() => setIsProfileError(false), 3000);
          }
        })
        .catch(() => {
          setIsProfileError(true);
          setProfileMessage("An error occurred while updating profile.");
          setTimeout(() => setIsProfileError(false), 3000);
        });
    });
  };

  const handlePasswordSubmit = (
    values: z.infer<typeof passwordSchema> & { currentPassword: string }
  ) => {
    setIsPasswordSuccess(false);
    setIsPasswordError(false);
    setPasswordMessage(null);
    startPasswordTransition(() => {
      const passwordAction = hasPassword
        ? ChangePasswordAction
        : SetPasswordAction;

      passwordAction(values)
        .then((response) => {
          setPasswordMessage(response.message);
          if (response.success) {
            setIsPasswordSuccess(true);
            setTimeout(() => {
              setIsPasswordSuccess(false);
              if (!hasPassword) {
                setHasPassword(true);
                setShowSetPasswordForm(false);
              }
              passwordForm.reset(); // Reset the password form on success
            }, 3000);
          } else {
            setIsPasswordError(true);
            setTimeout(() => setIsPasswordError(false), 3000);
          }
        })
        .catch(() => {
          setIsPasswordError(true);
          setPasswordMessage("An error occurred while updating password.");
          setTimeout(() => setIsPasswordError(false), 3000);
        });
    });
  };

  return (
    <div className="p-6 ">
      <h1 className="text-3xl font-bold mb-4 text-center">My Account</h1>
      <p className="mb-6 text-center text-muted-foreground">
        Manage your personal information and change your password to keep your
        account secure.
      </p>

      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <Form {...profileForm}>
          <form
            onSubmit={profileForm.handleSubmit(handleProfileSubmit)}
            className="flex-1 mb-8 lg:mb-0 space-y-6 bg-black p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold">My Profile</h2>
            <p className="text-muted-foreground">
              Your profile is a record of your personal information that defines
              who you are.
            </p>

            <div className="mb-4">
              <label className="block mb-2 ">Email</label>
              <Input
                type="email"
                value={user.emailId}
                disabled
                autoComplete="false"
                className="w-full bg-gray-200 cursor-not-allowed"
              />
            </div>

            <FormField
              control={profileForm.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="John"
                      className="w-full"
                      autoComplete="false"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={profileForm.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Doe"
                      className="w-full"
                      autoComplete="false"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <CSSTransition
              in={isProfileError}
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
                  {profileMessage}
                </div>
              </Button>
            </CSSTransition>

            {isProfileSuccess && (
              <Button
                disabled={true}
                className="w-full disabled:opacity-100 bg-green-600"
                type="submit"
              >
                <CSSTransition
                  in={isProfileSuccess}
                  timeout={{ enter: 1000, exit: 0 }}
                  classNames="slide-right"
                  unmountOnExit
                >
                  <div className="flex flex-row gap-x-3 text-black">
                    <CheckIcon className="w-5 h-5 text-black" />
                    <span className="button-text">{profileMessage}</span>
                  </div>
                </CSSTransition>
              </Button>
            )}

            {!isProfileError && !isProfileSuccess && (
              <Button
                type="submit"
                disabled={isProfilePending}
                className={`w-full text-white py-2 ${
                  isProfilePending ? "opacity-50" : ""
                }`}
              >
                {isProfilePending ? "Updating..." : "Update"}
              </Button>
            )}
          </form>
        </Form>

        <Form {...passwordForm}>
          <form
            onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)}
            className="flex-1 space-y-6 bg-black p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold">
              {showSetPasswordForm ? "Set Password" : "Change Password"}
            </h2>
            <p className="text-muted-foreground">
              {showSetPasswordForm
                ? "Set a password for your account."
                : "You can change your password for security reasons or reset it if you forget it."}
            </p>

            {showSetPasswordForm ? (
              <>
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
              </>
            ) : (
              <>
                <FormField
                  control={passwordForm.control}
                  name="currentPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Password</FormLabel>
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
              </>
            )}

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
      </div>
    </div>
  );
}
