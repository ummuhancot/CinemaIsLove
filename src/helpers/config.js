export const config = {
  project: {
    name: "CinemaIsLove",
    slogan: "Where Every Film Finds Its Heart",
    description:
      "CinemaIsLove brings the magic of cinema to life. Discover films that inspire, entertain, and connect people. From timeless classics to the latest releases, we make every movie experience unforgettable. Join us in celebrating the art of storytelling on the big screen.",
  },
  socialMedia: {
    twitter: {
      url: "https://x.com",
      icon: "pi pi-twitter",
    },
    facebook: {
      url: "https://facebook.com",
      icon: "pi pi-facebook",
    },
    instagram: {
      url: "https://instagram.com",
      icon: "pi pi-instagram",
    },
    linkedin: {
      url: "https://linkedin.com",
      icon: "pi pi-linkedin",
    },
    youtube: {
      url: "https://youtube.com",
      icon: "pi pi-youtube",
    },
  },
  apiURL: "https://localhost:8090",
  genders: [
    { label: "Female", value: "FEMALE" },
    { label: "Male", value: "MALE" },
    { label: "Other", value: "OTHER" },
  ],
  haltype: [
    { label: "IMAX", value: "IMAX" },
    { label: "VIP", value: "VIP" },
    { label: "Standard", value: "STANDARD" },
    { label: "3D salon", value: "THREE_D" },
  ],
  movestatus: [
    { label: "Coming Soon", value: "COMING_SOON" },
    { label: "In Theaters", value: "IN_THEATERS" },
    { label: "Presale", value: "PRESALE" },
    { label: "Finished", value: "FINISHED" },
  ],
  paymentstatus: [
    { label: "Pending", value: "PENDING" },
    { label: "Success", value: "SUCCESS" },
    { label: "Failed", value: "FAILED" },
  ],
  ticketstatus: [
    { label: "Empty", value: "EMPTY" },
    { label: "Reserved", value: "RESERVED" },
    { label: "Cancelled", value: "CANCELLED" },
    { label: "Paid", value: "PAID" },
  ],
  userRightsOnRoutes: [
    {
      urlRegex: /\/dashboard$/,
      roles: ["Admin", "Manager", "Customer"],
    },
  ],
};