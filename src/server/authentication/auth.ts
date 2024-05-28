import NextAuth, { DefaultSession } from "next-auth";
import { authConfig } from "@/server/authentication/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import UserRepo from "../database/repositories/user";

const prisma = new PrismaClient();

type ExtendedUser = DefaultSession["user"] & {
  userId: string;
  emailVerified: Date | null;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

export const { auth, signIn, signOut, handlers } = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
    signOut: "/auth/logout",
  },
  events: {
    async linkAccount({ user }) {
      await UserRepo.linkAccount(user.id as string);
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id as string;
        // Extend the token with custom properties
        const currentUser = await UserRepo.findUserById(user.id as string);
        if (!currentUser) return token;
        token.emailVerified = currentUser?.emailVerified;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.userId = token.userId as string;
      session.user.emailVerified = token.emailVerified as Date | null;
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  session: { strategy: "jwt" },
  trustHost: true,
  ...authConfig,
});
