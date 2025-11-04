export const appConfig = {
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
  apiURL: "http://localhost:8090",
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
  // USERS
  userRightsOnRoutes: [
    {
      urlRegex: /\/dashboard$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    { urlRegex: /\/dashboard\/admin$/, roles: ["ADMIN"] },
    { urlRegex: /\/dashboard\/admin\/new$/, roles: ["ADMIN"] },
    { urlRegex: /\/dashboard\/admin\/\d+$/, roles: ["ADMIN"] },

    { urlRegex: /\/dashboard\/manager$/, roles: ["Admin", "Manager"] },
    { urlRegex: /\/dashboard\/manager\/new$/, roles: ["Admin", "Manager"] },
    { urlRegex: /\/dashboard\/manager\/\d+$/, roles: ["Admin", "Manager"] },
    
    {
      urlRegex: /\/dashboard\/customer$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    {
      urlRegex: /\/dashboard\/customer\/new$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    {
      urlRegex: /\/dashboard\/customer\/\d+$/,
      roles: ["Admin", "Manager", "Customer"],
    },

    { urlRegex: /\/dashboard\/cinemas$/, roles: ["ADMIN"] },
    { urlRegex: /\/dashboard\/cinemas\/new$/, roles: ["ADMIN"] },
    { urlRegex: /\/dashboard\/cinemas\/\d+$/, roles: ["ADMIN"] },

    { urlRegex: /\/dashboard\/cities$/, roles: ["ADMIN"] },
    { urlRegex: /\/dashboard\/cities\/new$/, roles: ["ADMIN"] },
    { urlRegex: /\/dashboard\/cities\/\d+$/, roles: ["ADMIN"] },

    {
      urlRegex: /\/dashboard\/favorites$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    {
      urlRegex: /\/dashboard\/favorites\/new$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    {
      urlRegex: /\/dashboard\/favorites\/\d+$/,
      roles: ["Admin", "Manager", "Customer"],
    },

    { urlRegex: /\/dashboard\/halls$/, roles: ["ADMIN"] },
    { urlRegex: /\/dashboard\/halls\/new$/, roles: ["ADMIN"] },
    { urlRegex: /\/dashboard\/halls\/\d+$/, roles: ["ADMIN"] },

    { urlRegex: /\/dashboard\/image$/, roles: ["ADMIN"] },
    { urlRegex: /\/dashboard\/image\/new$/, roles: ["ADMIN"] },
    { urlRegex: /\/dashboard\/image\/\d+$/, roles: ["ADMIN"] },

    { urlRegex: /\/dashboard\/movies$/, roles: ["ADMIN"] },
    { urlRegex: /\/dashboard\/movies\/new$/, roles: ["ADMIN"] },
    { urlRegex: /\/dashboard\/movies\/\d+$/, roles: ["ADMIN"] },

    { urlRegex: /\/dashboard\/payments$/, roles: ["ADMIN"] },
    { urlRegex: /\/dashboard\/payments\/new$/, roles: ["ADMIN"] },
    { urlRegex: /\/dashboard\/payments\/\d+$/, roles: ["ADMIN"] },

    { urlRegex: /\/dashboard\/showtime$/, roles: ["ADMIN"] },
    { urlRegex: /\/dashboard\/showtime\/new$/, roles: ["ADMIN"] },
    { urlRegex: /\/dashboard\/showtime\/\d+$/, roles: ["ADMIN"] },

    { urlRegex: /\/dashboard\/tickets$/, roles: ["ADMIN"] },
    { urlRegex: /\/dashboard\/tickets\/new$/, roles: ["ADMIN"] },
    { urlRegex: /\/dashboard\/tickets\/\d+$/, roles: ["ADMIN"] },
  ],
};
