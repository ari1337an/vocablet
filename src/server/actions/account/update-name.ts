"use server";

import { auth } from "@/server/authentication/auth";
import UserRepo from "@/server/database/repositories/user";
import { ProfileSchema } from "@/server/validation/account/profile-form";
import { z } from "zod";

export default async function UpdateNameAction(
  values: z.infer<typeof ProfileSchema>
) {
  try {
    const session = await auth();
    if (!session) {
      throw new Error("Unauthorized!");
    }

    const validatedFields = ProfileSchema.safeParse(values);
    if (!validatedFields.success) {
      throw new Error("Invalid fields!");
    }

    // update the user's name
    await UserRepo.updateName(
      session.user.userId,
      values.firstName,
      values.lastName
    );

    return { success: true, message: "Successfully updated!" };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
}
