import { z } from "zod";

// Custom validation function for strong passwords
const strongPassword = (password: string) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isLongEnough = password.length >= 8;

  return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isLongEnough;
};

export const SignupFormSchema = z
  .object({
    email: z.string().max(320, {message: "Email can't be more than 320 characters!"}).email({ message: "Invalid email address" }),
    password: z.string().min(1, { message: "Password is required" }).max(100, {message: "Password can't be more than 100 characters!"}).refine(strongPassword, {
      message: "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character",
    }),
    confirmPassword: z.string().min(1, { message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
