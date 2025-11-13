"use server";

import {
  response,
  transformFormDataToJSON,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { AuthSchema } from "@/helpers/schemas/auth-schema";
import { AuthError } from "next-auth";
import { signIn } from "../../auth";

export const loginAction = async (prevState, formData) => {
  const fields = transformFormDataToJSON(formData);

  try {
    AuthSchema.validateSync(fields, { abortEarly: false });

    await signIn("credentials", {
      ...fields,
      redirectTo: "/dashboard",

    });

  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner);
    } else if (error instanceof AuthError) {
      return response(false, "Invalid username or password", null);
    }
    throw error;
  }
};
