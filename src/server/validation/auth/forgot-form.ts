import { z } from "zod";

export const ForgotFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address"}),
});
