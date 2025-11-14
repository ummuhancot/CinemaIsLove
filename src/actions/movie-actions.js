"use server";

import {
  response,
  transformFormDataToJSON,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { MovieSchema } from "@/helpers/schemas/moviesSchema";
import { createMovies } from "@/services/movie-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const DASHBOARD_MOVIES_PATH = "/dashboard/movies";

export const movieAction = async (prevState, formData) => {
  try {
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

    // Handle hallIds - can be empty/null (backend accepts empty list)
    if (fields.hallIds) {
      if (typeof fields.hallIds === "string") {
        const hallIdsArray = fields.hallIds
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
          .map((n) => Number(n));
        fields.hallIds = hallIdsArray.length > 0 ? hallIdsArray : null;
      }
    } else {
      fields.hallIds = null; // Backend accepts null/empty list
    }

    if (fields.durationDays) fields.durationDays = Number(fields.durationDays);
    if (fields.rating) fields.rating = Number(fields.rating);
    if (fields.posterId && fields.posterId !== 0) {
      fields.posterId = Number(fields.posterId);
    } else {
      fields.posterId = null; // Backend expects null if not provided
    }

    MovieSchema.validateSync(fields, { abortEarly: false });

    // Build payload - exclude slug (backend generates it automatically)
    const { slug, ...restFields } = fields;
    const payload = {
      ...restFields,
      status: fields.status || "COMING_SOON",
    };

    const res = await createMovies(payload);
    const data = await res.json();

    if (!res.ok) {
      return response(
        false,
        data?.message || "Movie creation failed",
        data?.validations
      );
    }

    revalidatePath(DASHBOARD_MOVIES_PATH);
    redirect(DASHBOARD_MOVIES_PATH);
  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner);
    }

    throw error;
  }
};
