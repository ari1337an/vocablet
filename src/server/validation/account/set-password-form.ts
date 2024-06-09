import { z } from "zod";
import { strongPassword } from "../auth/signup-form";

export const SetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(1, { message: "New password is required" })
      .refine(strongPassword, {
        message:
          "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
