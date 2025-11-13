"use server";

import {
  response,
  transformFormDataToJSON,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";

import { CinemaSchema } from "@/helpers/schemas/cinema-schema";
import { createCinema } from "@/services/cinema-service";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const cinemaAction = async (prevState, formData) => {
  let isSuccess = false;

  try {
    // Form verisini JSON'a dönüştür
    const fields = transformFormDataToJSON(formData);
    CinemaSchema.validateSync(fields, { abortEarly: false });

    const payload = {
      ...fields,
      compulsory: fields.compulsory === "on" ? true : false,
    };

       const res = await createCinema(payload);
       const data = await res.json();

    if (!res.ok) {
      return response(
        false,
        data?.message || "Cinema creation failed",
        data?.validations
      );
    }
        return response(true, "Your message was sent successfully", null);
  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner);
    }

    throw error;

  } finally {
    if (isSuccess) {
    
      revalidatePath("/dashboard/cinema");
      redirect("/dashboard/cinema");
    }
  }
};
