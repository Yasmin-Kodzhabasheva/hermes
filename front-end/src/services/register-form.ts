import * as z from "zod";

import { RegisterFormSchema } from "../schemas/register-form-schema.ts";

function validateForm(formData: FormData) {
  const result = RegisterFormSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    const errors = z.treeifyError(result.error);
    if (errors.properties) {
      const { properties } = errors;

      return {
        success: false,
        errors: {
          username: properties.username ? properties.username.errors[0] : "",
          email: properties.email ? properties.email.errors[0] : "",
          password: properties.password ? properties.password.errors[0] : "",
        },
      };
    }
  } else {
    return {
      success: true,
      errors: {
        username: "",
        email: "",
        password: "",
      },
    };
  }
}

export function submitForm(prevState, formData: FormData) {
  return validateForm(formData);
}
