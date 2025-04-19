import { z } from "zod";
import { emailSchema, passwordSchema } from "@/schemas/auth";

export const loginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
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
