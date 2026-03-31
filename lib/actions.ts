"use server";

import { FormStateSignUp, signUpSchema } from "./validations";

export async function LoginAction(
  _prevState: FormStateSignUp,
  formData: FormData,
) {
  const values = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const result = signUpSchema.safeParse(values);

  if (!result.success) {
    return {
      values,
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  return {
    values: {
      email: "",
      password: "",
    },
    errors: null,
    success: true,
  };
}
