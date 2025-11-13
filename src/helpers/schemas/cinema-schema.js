import * as Yup from "yup";

export const CinemaSchema = Yup.object({
  name: Yup.string().required("Cinema name cannot be blank"),
  cityName: Yup.string().required("City name cannot be blank"),
  address: Yup.string().required("Address cannot be blank"),
  phoneNumber: Yup.string().required("Phone number cannot be blank"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email cannot be blank"),
});
