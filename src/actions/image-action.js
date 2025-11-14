"use server";

import {
  response,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { uploadImages } from "@/services/image-service";
import { revalidatePath } from "next/cache";

const DASHBOARD_MOVIES_PATH = "/dashboard/movies";

export const imageAction = async (prevState, formData) => {
  try {
    const movieId = formData.get("movieId");
    const files = formData.getAll("images");

    if (!movieId) {
      return response(false, "Movie ID is required", null);
    }

    if (!files || files.length === 0) {
      return response(false, "At least one image is required", null);
    }

    // Validate file types
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    const invalidFiles = files.filter(
      (file) => !allowedTypes.includes(file.type)
    );

    if (invalidFiles.length > 0) {
      return response(
        false,
        "Invalid file type. Only JPEG, PNG, and WebP images are allowed.",
        null
      );
    }

    const res = await uploadImages(Number(movieId), files);
    const data = await res.json();

    if (!res.ok) {
      return response(
        false,
        data?.message || "Image upload failed",
        data?.validations
      );
    }

    revalidatePath(DASHBOARD_MOVIES_PATH);
    return response(true, "Images uploaded successfully", null);
  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner);
    }

    return response(
      false,
      error.message || "An unexpected error occurred. Please try again.",
      null
    );
  }
};

