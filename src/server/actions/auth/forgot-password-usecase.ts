"use server";
import { z } from "zod";
import { ForgotFormSchema } from "@/server/validation/auth/forgot-form";
import UserRepo from "@/server/database/repositories/user";
import sendForgotPassLink from "../email/send-forgotpass-link";
import VerifyReCaptchaToken from "../recaptcha/verify";

export default async function ForgotPasswordAction(
  values: z.infer<typeof ForgotFormSchema>,
  recaptchaToken: string
) {
  try {
    // validate the recaptchatoken here
    await VerifyReCaptchaToken(recaptchaToken);

    const validatedFields = ForgotFormSchema.safeParse(values);
    if (!validatedFields.success) {
      return { success: false, message: "Invalid email or password!" };
    }
    const { email } = validatedFields.data;

    const user = await UserRepo.findUserByEmail(email);
    if (!user) return { success: false, message: "Coudn't find your email!" };

    // call the forgot pass email sender with that link
    await sendForgotPassLink(email, user.id);

    return { success: true, message: "Check your email!" };
  } catch (error) {
    throw new Error("Coudn't find your email!");
  }
}
