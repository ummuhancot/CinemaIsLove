"use server";

import { response, transformFormDataToJSON, transformYupErrors, YupValidationError } from "@/helpers/form-validation";
import { RegisterSchema } from "@/helpers/schemas/register-shema";
import { createRegister } from "@/services/register-service";
import { signIn } from "../../auth";

export const registerAction = async (prevState, formData) => {
  const fields = transformFormDataToJSON(formData);

  try {
    RegisterSchema.validateSync(fields, { abortEarly: false });

    const result = await createRegister(fields);

    if (result?.success === false) {
      return response(false, result.message || "Registration failed");
    }

    await signIn("credentials", {
      redirectTo: "/login",
      email: fields.email,
      password: fields.password,
    });

    return response(true, "Registration successful!");
  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner);
    }
    return response(false, error.message || "Unexpected error");
  }
};
