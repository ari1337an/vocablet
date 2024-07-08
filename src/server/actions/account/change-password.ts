"use server";

import { auth } from "@/server/authentication/auth";
import UserRepo from "@/server/database/repositories/user";
import { ChangePasswordSchema } from "@/server/validation/account/change-password-form";
import { z } from "zod";
import bcrypt from "bcryptjs";

export default async function ChangePasswordAction(
  values: z.infer<typeof ChangePasswordSchema>
) {
  try {
    const validatedValues = ChangePasswordSchema.safeParse(values);
    if (!validatedValues.success) {
      throw new Error(validatedValues.error.errors[0].message);
    }

    const session = await auth();
    const emailId = session?.user?.email;
    if (!emailId) {
      throw new Error("Unauthorized!");
    }

    const { currentPassword, newPassword, confirmPassword } =
      validatedValues.data;

    if (newPassword !== confirmPassword) {
      throw new Error("Passwords do not match!");
    }

    // Check if the current password is correct
    const user = await UserRepo.findUserByEmail(emailId);
    if (!user) {
      throw new Error("User not found");
    }
    const passwordMatch = await bcrypt.compare(
      currentPassword,
      user.password as string
    );
    if (!passwordMatch) {
      throw new Error("Current password is incorrect!");
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
