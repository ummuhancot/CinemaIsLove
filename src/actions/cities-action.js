"use server";

import {
  response,
  transformFormDataToJSON,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { CitySchema } from "@/helpers/schemas/cities-schema";
import { createCities } from "@/services/cities-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const DASHBOARD_CITIES_PATH = "/dashboard/cities";

export const citiesAction = async (prevState, formData) => {
  try {
    const fields = transformFormDataToJSON(formData);
    CitySchema.validateSync(fields, { abortEarly: false });

    const payload = {
      ...fields,
      compulsory: fields.compulsory === "on",
    };

    const res = await createCities(payload);
    const data = await res.json();

    if (!res.ok) {
      return response(
        false,
        data?.message || "City creation failed",
        data?.validations
      );
    }

    revalidatePath(DASHBOARD_CITIES_PATH);
    redirect(DASHBOARD_CITIES_PATH);
  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner);
    }

    throw error;
  }
};
