"use server";

import VerificationRepo from '@/server/database/repositories/verification';
import {v4 as uuidv4} from 'uuid';
import { renderAsync } from '@react-email/render';
import sendEmail from './send-email-aws';
import ForgotPassEmail from '@/app/_templates/forgot-pass';

export default async function sendForgotPassLink(email: string, userId: string) {
  // Creathe the code in database
  const code = uuidv4();
  await VerificationRepo.createVerificationToken(userId, code);

  // Ready the html
  const html = await renderAsync(
    ForgotPassEmail({ code, host: process.env.NEXT_PUBLIC_BRAND_URI as string })
  );

  // Send the email
  await sendEmail(email, "Verify your email", html, "no-reply");
}