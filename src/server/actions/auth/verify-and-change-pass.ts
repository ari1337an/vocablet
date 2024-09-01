"use server";

import { Response } from "@/app/_components/message/message";
import { DEFAULT_LOGIN_REDIRECT } from "@/server/authentication/routes";
import UserRepo from "@/server/database/repositories/user";
import VerificationRepo from "@/server/database/repositories/verification";
import { SetPasswordSchema } from "@/server/validation/account/set-password-form";
import bcrypt from "bcryptjs";
import VerifyReCaptchaToken from "../recaptcha/verify";
import { z } from "zod";

export default async function VerifyAndChangePass(
  code: string | null,
  values: z.infer<typeof SetPasswordSchema>,
  recaptchaToken: string
) {
  try {
    if (!code) {
      throw new Error("Unexpected error!");
    }
    await VerifyReCaptchaToken(recaptchaToken);

    // check the verification code and fetch the user first
    const verification = await VerificationRepo.findVerificationByToken(code);
    if (!verification) throw new Error("Unexpected error!");
    const user = await UserRepo.findUserById(
      verification?.identifier as string
    );
    if (!user) throw new Error("Unexpected error!");

    // Update the password
    const validatedValues = SetPasswordSchema.safeParse(values);
    if (!validatedValues.success) {
      throw new Error(validatedValues.error.errors[0].message);
    }
    const { newPassword, confirmPassword } = validatedValues.data;
    if (newPassword !== confirmPassword) {
      throw new Error("Passwords do not match!");
    }
    const hashPassword = await bcrypt.hash(newPassword, 10); // hash the password
    await UserRepo.updatePassword(user.email, hashPassword); // Update the user's password

    // done
    return {
      success: true,
      message: "Password updated successfully!",
      redirect: DEFAULT_LOGIN_REDIRECT,
      redirectTimeout: 5000,
    } as Response;
  } catch (error) {
    return {
      success: false,
      message: "Unexpected Error!",
    } as Response;
  }
}
