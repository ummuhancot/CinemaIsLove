import * as Yup from "yup";

export const CitySchema = Yup.object({
  name: Yup.string()
    .required("City name cannot be empty")
    .max(30, "City name cannot exceed 30 characters"),
});
