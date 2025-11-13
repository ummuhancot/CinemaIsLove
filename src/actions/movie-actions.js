"use server";

import { response, transformFormDataToJSON, transformYupErrors, YupValidationError } from "@/helpers/form-validation";
import { RegisterSchema } from "@/helpers/schemas/register-shema";
import { createRegister } from "@/services/register-service";
import { signIn } from "../../auth";
import { MovieSchema } from "@/helpers/schemas/moviesSchema";
import { createMovies } from "@/services/movie-service";

export const movieAction = async (prevState, formData) => {
  const fields = transformFormDataToJSON(formData);

  try {
    MovieSchema.validateSync(fields, { abortEarly: false });

    if (!fields.hallIds || fields.hallIds.length === 0) {
      fields.hallIds = [1]; // default hallId
    }
    const result = await createMovies(fields);

    if (!result || result.success === false) {
      return response(false, result?.message || "Movie creation failed");
    }

    return response(true, "Movie created successfully!");
  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner);
    }
    return response(false, error.message || "Unexpected error");
  }
};