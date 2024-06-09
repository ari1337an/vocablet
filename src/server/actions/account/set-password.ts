"use server";

import { auth } from "@/server/authentication/auth";
import UserRepo from "@/server/database/repositories/user";
import { SetPasswordSchema } from "@/server/validation/account/set-password-form";
import { z } from "zod";
import bcrypt from "bcryptjs";

export default async function SetPasswordAction(
  values: z.infer<typeof SetPasswordSchema>
) {
  try {
    const session = await auth();
    const emailId = session?.user?.email;
    if (!emailId) {
      throw new Error("Unauthorized!");
    }

    const validatedValues = SetPasswordSchema.safeParse(values);
    if (!validatedValues.success) {
      throw new Error(validatedValues.error.errors[0].message);
    }

    const { newPassword, confirmPassword } = validatedValues.data;

    if (newPassword !== confirmPassword) {
      throw new Error("Passwords do not match!");
    }

    // hash the password
    const hashPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    await UserRepo.updatePassword(emailId, hashPassword);

    return { success: true, message: "Password updated successfully!" };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
}
