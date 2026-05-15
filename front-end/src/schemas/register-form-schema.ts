import * as z from "zod";

export const EmailSchema = z
  .email()
  .min(1, { message: "Email cannot be empty" })
  .toLowerCase();

export const UsernameSchema = z
  .string()
  .trim()
  .min(1, { message: "Username cannot be empty" })
  .max(10, { message: "Username is too long" })
  .toLowerCase();

export const PasswordSchema = z
  .string()
  .trim()
  .min(1, { message: "Password cannot be empty" })
  .max(8)
  .toLowerCase();

export const RegisterFormSchema = z.object({
  email: EmailSchema,
  username: UsernameSchema,
  password: PasswordSchema,
});
