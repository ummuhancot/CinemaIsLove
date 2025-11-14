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
      roles: ["admin", "manager", "customer"],
    },
    { urlRegex: /\/dashboard\/admin$/, roles: ["admin"] },
    { urlRegex: /\/dashboard\/admin\/new$/, roles: ["admin"] },
    { urlRegex: /\/dashboard\/admin\/\d+$/, roles: ["admin"] },

    { urlRegex: /\/dashboard\/manager$/, roles: ["admin", "manager"] },
    { urlRegex: /\/dashboard\/manager\/new$/, roles: ["admin", "manager"] },
    { urlRegex: /\/dashboard\/manager\/\d+$/, roles: ["admin", "manager"] },

    {
      urlRegex: /\/dashboard\/customer$/,
      roles: ["admin", "manager", "customer"],
    },
    {
      urlRegex: /\/dashboard\/customer\/new$/,
      roles: ["admin", "manager", "customer"],
    },
    {
      urlRegex: /\/dashboard\/customer\/\d+$/,
      roles: ["admin", "manager", "customer"],
    },

    { urlRegex: /\/dashboard\/cinemas$/, roles: ["admin"] },
    { urlRegex: /\/dashboard\/cinemas\/new$/, roles: ["admin"] },
    { urlRegex: /\/dashboard\/cinemas\/\d+$/, roles: ["admin"] },

    { urlRegex: /\/dashboard\/cities$/, roles: ["admin"] },
    { urlRegex: /\/dashboard\/cities\/new$/, roles: ["admin"] },
    { urlRegex: /\/dashboard\/cities\/\d+$/, roles: ["admin"] },

    {
      urlRegex: /\/dashboard\/favorites$/,
      roles: ["admin", "manager", "customer"],
    },
    {
      urlRegex: /\/dashboard\/favorites\/new$/,
      roles: ["admin", "manager", "customer"],
    },
    {
      urlRegex: /\/dashboard\/favorites\/\d+$/,
      roles: ["admin", "manager", "customer"],
    },

    { urlRegex: /\/dashboard\/halls$/, roles: ["admin"] },
    { urlRegex: /\/dashboard\/halls\/new$/, roles: ["admin"] },
    { urlRegex: /\/dashboard\/halls\/\d+$/, roles: ["admin"] },

    { urlRegex: /\/dashboard\/image$/, roles: ["admin"] },
    { urlRegex: /\/dashboard\/image\/new$/, roles: ["admin"] },
    { urlRegex: /\/dashboard\/image\/\d+$/, roles: ["admin"] },

    { urlRegex: /\/dashboard\/movies$/, roles: ["admin"] },
    { urlRegex: /\/dashboard\/movies\/new$/, roles: ["admin"] },
    { urlRegex: /\/dashboard\/movies\/\d+$/, roles: ["admin"] },

    { urlRegex: /\/dashboard\/payments$/, roles: ["admin"] },
    { urlRegex: /\/dashboard\/payments\/new$/, roles: ["admin"] },
    { urlRegex: /\/dashboard\/payments\/\d+$/, roles: ["admin"] },

    { urlRegex: /\/dashboard\/showtime$/, roles: ["admin"] },
    { urlRegex: /\/dashboard\/showtime\/new$/, roles: ["admin"] },
    { urlRegex: /\/dashboard\/showtime\/\d+$/, roles: ["admin"] },

    { urlRegex: /\/dashboard\/tickets$/, roles: ["admin"] },
    { urlRegex: /\/dashboard\/tickets\/new$/, roles: ["admin"] },
    { urlRegex: /\/dashboard\/tickets\/\d+$/, roles: ["admin"] },
  ],
};
