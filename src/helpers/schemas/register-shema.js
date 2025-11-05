import * as Yup from "yup";
import { appConfig } from "../config";

export const RegisterSchema = Yup.object({
  name: Yup.string()
    .required("Name cannot be null")
    .min(2, "Name must be between 2 and 50 characters")
    .max(50, "Name must be between 2 and 50 characters")
    .matches(/^[a-zA-Z]+$/, "Name must contain only letters"),

  surname: Yup.string()
    .required("Surname cannot be null")
    .min(2, "Surname must be between 2 and 50 characters")
    .max(50, "Surname must be between 2 and 50 characters")
    .matches(/^[a-zA-Z]+$/, "Surname must contain only letters"),

  password: Yup.string()
    .required("Password cannot be null")
    .min(8, "Password must be at least 8 and at most 30 characters long")
    .max(30, "Password must be at least 8 and at most 30 characters long")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
      "Password must contain at least one digit, one lowercase, one uppercase letter and one special character"
    ),

  email: Yup.string()
    .required("Email cannot be null")
    .min(5, "Email must be between 5 and 50 characters")
    .max(50, "Email must be between 5 and 50 characters")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email should be valid"
    ),

  phoneNumber: Yup.string()
    .required("Phone number cannot be null")
    .min(8, "Phone number must be between 8 and 20 characters")
    .max(20, "Phone number must be between 8 and 20 characters")
    .matches(
      /^(\d{3}\s?\d{3}\s?\d{4})$/,
      "Phone number should be in the form of 555 555 5555 or 5555555555"
    ),

  birthDate: Yup.date()
    .typeError("Invalid date format (yyyy-MM-dd)")
    .required("Birth date cannot be null")
    .max(new Date(), "Birth date must be in the past"),

  gender: Yup.string()
    .oneOf(
      appConfig.genders.map((g) => g.value),
      "Invalid gender"
    )
    .required("Gender cannot be null"),
});