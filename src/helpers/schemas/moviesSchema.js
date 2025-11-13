import * as Yup from "yup";
import { appConfig } from "../config"; // eğer özel config varsa

export const MovieSchema = Yup.object({
  title: Yup.string()
    .required("Title cannot be null")
    .min(2, "Title must be between 2 and 100 characters")
    .max(100, "Title must be between 2 and 100 characters"),

  slug: Yup.string(), // opsiyonel

  summary: Yup.string()
    .required("Summary cannot be null")
    .min(10, "Summary must be between 10 and 500 characters")
    .max(500, "Summary must be between 10 and 500 characters"),

  releaseDate: Yup.date()
    .typeError("Invalid date format (yyyy-MM-dd)")
    .required("Release date cannot be null"),

  durationDays: Yup.number()
    .required("DurationDays cannot be null")
    .min(1, "DurationDays must be at least 1"),

  rating: Yup.number()
    .min(0, "Rating must be positive")
    .max(10, "Rating must be at most 10")
    .nullable(),

  director: Yup.string()
    .required("Director cannot be null")
    .min(2, "Director name must be between 2 and 50 characters")
    .max(50, "Director name must be between 2 and 50 characters")
    .matches(
      /^[a-zA-Z \-']+$/,
      "Director name must contain only letters, spaces, hyphens or apostrophes"
    ),

  genre: Yup.string().required("Genre cannot be null"),

  posterId: Yup.number().nullable(),

  status: Yup.mixed().oneOf(["COMING_SOON", "ACTIVE", "INACTIVE"]),

  cast: Yup.array()
    .of(Yup.string().required("Cast member cannot be empty"))
    .required("Cast list cannot be null")
    .min(1, "At least one cast member is required"),

  formats: Yup.array()
    .of(Yup.string().required("Format cannot be empty"))
    .required("Formats list cannot be null")
    .min(1, "At least one format is required"),

  hallIds: Yup.array()
    .of(Yup.number().required("Hall ID cannot be empty"))
    .nullable(),

  specialHalls: Yup.array()
    .of(Yup.string().required("Special hall cannot be empty"))
    .nullable(),
});
