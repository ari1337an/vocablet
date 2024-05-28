"use server";

import VerificationRepo from '@/server/database/repositories/verification';
import {v4 as uuidv4} from 'uuid';
import sendVerificationEmail from './send-verification-email';

export default async function sendVerificationLink(email: string, userId: string) {
  const code = uuidv4();
  await VerificationRepo.createVerificationToken(userId, code);
  await sendVerificationEmail(email, code);
  return code;
}