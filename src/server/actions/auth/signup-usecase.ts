"use server";
import { SignupFormSchema } from "@/server/validation/auth/signup-form";
import { z } from "zod";
import bcrypt from "bcryptjs";
import UserRepo from "@/server/database/repositories/user";
import sendVerificationLinkUseCase from "../email/send-verification-link-usecase";

export default async function SignupAction(
  values: z.infer<typeof SignupFormSchema>
) {
  try {
    // Validate the form values using zod
    const parsedValues = SignupFormSchema.parse(values);

    const { email, password, confirmPassword } = parsedValues;

    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if the user already exists in the database
    if (await UserRepo.findUserByEmail(email)) {
      throw new Error("User with this email already exists");
    }

    // Create a new user account
    const user = await UserRepo.createUser(email, hashedPassword);

    // send a verification email
    await sendVerificationLinkUseCase(email, user.id);

    return {
      success: true,
      message: "You're all set! Logging in...",
    };
  } catch (error) {
    // If an error occurs, throw an error
    throw new Error(
      (error as Error).message || "An error occurred during signup!"
    );
  }
}
