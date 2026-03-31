import z from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(3),
  email: z.email(),
  password: z.string().min(8),
});

export const signInSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type FormStateSignUp = {
  values?: z.infer<typeof signUpSchema>;
  errors: null | Partial<Record<keyof z.infer<typeof signUpSchema>, string[]>>;
  success: boolean;
};

export type FormStateSignIn = {
  values?: z.infer<typeof signInSchema>;
  errors: null | Partial<Record<keyof z.infer<typeof signInSchema>, string[]>>;
  success: boolean;
};
