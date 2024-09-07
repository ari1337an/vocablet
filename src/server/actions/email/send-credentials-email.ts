"use server";
import { renderAsync } from "@react-email/render";
import sendEmail from "./send-email-aws";
import UserCredentialEmail from "@/app/_templates/user-credentials";

export default async function sendCredentialEmail(
  to: string,
  dummypass: string
) {
  const html = await renderAsync(UserCredentialEmail({ email: to, dummypass }));
  return sendEmail(to, "Temporary Access Details Inside", html, "no-reply");
}
