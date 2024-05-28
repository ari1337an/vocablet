"use server";
import { renderAsync } from "@react-email/render";
import sendEmail from "./send-email-aws";
import VerificationCodeEmail from "@/app/_templates/verification-code";

export default async function sendVerificationEmail(to: string, code: string) {
  const html = await renderAsync(
    VerificationCodeEmail({ code, host: process.env.AWS_SES_DOMAIN as string })
  );
  return sendEmail(to, "Verify your email", html, "no-reply");
}
