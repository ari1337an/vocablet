import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import UserRepo from "@/server/database/repositories/user";
import bcrypt from "bcryptjs";
import { LoginFormSchema } from "../validation/auth/login-form";
import VerificationRepo from "../database/repositories/verification";

export const authConfig = {
  providers: [
    Github({ allowDangerousEmailAccountLinking: true }),
    Credentials({
      id: "email-password-login",
      async authorize(credentials) {
        const validatedFields = LoginFormSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await UserRepo.findUserByEmail(email);
          if (!user || user.password == null) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              image: user.image,
            };
          } else {
            return null;
          }
        }

        return null;
      },
    }),
    Credentials({
      id: "verification-token-credential",
      credentials: {},
      async authorize(credentials) {
        const { userId, token } = credentials as {
          userId: string;
          token: string;
        };

        // Find the verification token in the database
        const verification =
          await VerificationRepo.findVerificationByTokenAndUserId(
            token,
            userId
          );

        if (!verification || verification?.expires < new Date()) {
          return null;
        }

        // get the user
        const user = await UserRepo.findUserById(userId);

        // Mark the user's email as verified
        await UserRepo.updateEmailVerification(userId, new Date());

        // Delete the verification token
        await VerificationRepo.deleteVerificationToken(userId);

        return {
          id: user!.id,
          name: user!.name,
          email: user!.email,
          image: user!.image,
          emailVerified: user!.emailVerified,
        };
      },
    }),
  ],
};
