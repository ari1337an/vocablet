"use server";
import UserRepo from "@/server/database/repositories/user";
import bcrypt from "bcryptjs";
import sendCredentialEmail from "../email/send-credentials-email";

export default async function createUserWithCustomerEmailIfNotExists(
  customerEmail: string
) {
  try {
    // Check if the user already exists in the database
    if (await UserRepo.findUserByEmail(customerEmail)) {
      return;
    } // else create a new user and send the details to the user email address

    // Generate a random password for the user
    const generatedPassword =
      customerEmail.split("@")[0] + Math.floor(Math.random() * 1000000);

    // Hash the password
    const hashedPassword = await bcrypt.hash(generatedPassword, 10);

    // Create a new user account
    await UserRepo.createUserAndVerify(customerEmail, hashedPassword);

    // Send Email to User Regarding the Credentials customerEmail and generatedPassword
    await sendCredentialEmail(customerEmail, generatedPassword);
  } catch (error) {
    console.log(error)
    throw new Error("Couldn't Create User, Kindly Contact Support!");
  }
}
