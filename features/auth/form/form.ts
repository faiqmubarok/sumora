import { z } from "zod";
import { emailSchema, passwordSchema } from "@/schemas/auth";

export const loginFormSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, "Email is required")
    .email("Email is invalid"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, "Password is required"),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;

export const registerFormSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // tempat error ditampilkan
  });

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
