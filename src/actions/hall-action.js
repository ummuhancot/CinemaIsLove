"use server";

import {
  response,
  transformFormDataToJSON,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { HallSchema } from "@/helpers/schemas/hall-schema";
import { createHall } from "@/services/hall-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const DASHBOARD_HALLS_PATH = "/dashboard/halls";

export const hallAction = async (prevState, formData) => {
  try {
    const fields = transformFormDataToJSON(formData);
    HallSchema.validateSync(fields, { abortEarly: false });

    const payload = {
      ...fields,
      seatCapacity: Number(fields.seatCapacity),
      cinemaId: Number(fields.cinemaId),
      isSpecial: fields.isSpecial === "on" || fields.isSpecial === true,
    };

    const res = await createHall(payload);
    const data = await res.json();

    if (!res.ok) {
      return response(
        false,
        data?.message || "Hall creation failed",
        data?.validations
      );
    }

    revalidatePath(DASHBOARD_HALLS_PATH);
    redirect(DASHBOARD_HALLS_PATH);
  } catch (error) {
    if (error instanceof YupValidationError) {
      return transformYupErrors(error.inner);
    }

    throw error;
  }
};

