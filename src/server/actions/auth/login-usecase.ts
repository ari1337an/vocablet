"use server";
import { z } from "zod";
import { LoginFormSchema } from "@/server/validation/auth/login-form";
import { signIn } from "@/server/authentication/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/server/authentication/routes";
import { AuthError } from "next-auth";
import UserRepo from "@/server/database/repositories/user";

export default async function SignInAction(
  values: z.infer<typeof LoginFormSchema>
) {
  try {
    const validatedFields = LoginFormSchema.safeParse(values);

    if (!validatedFields.success) {
      return { success: false, message: "Invalid email or password!" };
    }

    const { email, password } = validatedFields.data;

    // check if a password is set
    // TODO: Try to figure out how not to check for password here as it is already checked in the authorize function
    const user = await UserRepo.findUserByEmail(email);
    if (!user) return { success: false, message: "Invalid credentials!" };
    if(!user.password) return { success: false, message: "Password is not set for this account!" };

    await signIn("email-password-login", {
      email,
      password,
      redirect: false,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return { success: true, message: "Welcome back! Redirecting..." };
  } catch (error) {
    if (error instanceof AuthError) {
      switch ((error as AuthError).type) {
        case "CredentialsSignin":
          return { success: false, message: "Invalid credentials!" };
        default:
          return { success: false, message: "Something went wrong!" };
      }
    } else {
      return { success: false, message: (error as Error).message };
    }
  }
}
