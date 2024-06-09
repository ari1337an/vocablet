"use server";

import UserRepo from "@/server/database/repositories/user";

export default async function GetAccountValuesAction(emailId: string) {
  try {
    const user = await UserRepo.findUserByEmail(emailId);
    if (user === null) throw new Error("User not found");

    return {
      firstName: user.name ? user.name.split(" ").slice(0, -1).join(" ") : "",
      lastName: user.name ? user.name.split(" ").slice(-1)[0] : "",
      emailId: user.email,
      hasPassword: user.password ? true : false,
    };
  } catch (error) {
    return {
      firstName: "",
      lastName: "",
      emailId: emailId,
      hasPassword: false,
    };
  }
}
