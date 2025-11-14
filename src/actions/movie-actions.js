"use server";

import {
  response,
  transformFormDataToJSON,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { RegisterSchema } from "@/helpers/schemas/register-shema";
import { createRegister } from "@/services/register-service";
import { signIn } from "../../auth";
import { MovieSchema } from "@/helpers/schemas/moviesSchema";
import { createMovies } from "@/services/movie-service";

export const movieAction = async (prevState, formData) => {
  const fields = transformFormDataToJSON(formData);

  // Normalize string inputs (from FormData) into arrays/numbers expected by schema
  if (fields.cast && typeof fields.cast === "string") {
    fields.cast = fields.cast
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }

  if (fields.formats && typeof fields.formats === "string") {
    fields.formats = fields.formats
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }

  if (fields.specialHalls && typeof fields.specialHalls === "string") {
    fields.specialHalls = fields.specialHalls
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }

  if (fields.hallIds && typeof fields.hallIds === "string") {
    fields.hallIds = fields.hallIds
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .map((n) => Number(n));
  }

  if (fields.durationDays) fields.durationDays = Number(fields.durationDays);
  if (fields.rating) fields.rating = Number(fields.rating);
  if (fields.posterId) fields.posterId = Number(fields.posterId);

  try {
    MovieSchema.validateSync(fields, { abortEarly: false });

    if (!fields.hallIds || fields.hallIds.length === 0) {
      fields.hallIds = [1]; // default hallId
    }
    const result = await createMovies(fields);

    if (!result || !result.ok) {
      const errMsg =
        result?.data?.message ||
        `Movie creation failed (status: ${result?.status})`;
      return response(false, errMsg);
    }

    return response(true, "Movie created successfully!");
  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner);
    }
    return response(false, error.message || "Unexpected error");
  }
};
