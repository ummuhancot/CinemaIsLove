import * as Yup from "yup";

export const HallSchema = Yup.object({
  name: Yup.string()
    .required("Hall name cannot be blank")
    .max(100, "Hall name cannot exceed 100 characters"),
  seatCapacity: Yup.number()
    .required("Seat capacity cannot be null")
    .integer("Seat capacity must be an integer")
    .min(1, "Seat capacity must be at least 1")
    .max(1000, "Seat capacity cannot exceed 1000"),
  type: Yup.string()
    .required("Type cannot be blank")
    .oneOf(["IMAX", "VIP", "STANDARD", "THREE_D"], "Invalid hall type"),
  cinemaId: Yup.number()
    .required("Cinema ID cannot be null")
    .integer("Cinema ID must be an integer")
    .positive("Cinema ID must be positive"),
  isSpecial: Yup.boolean(),
});

