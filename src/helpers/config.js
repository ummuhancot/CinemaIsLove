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
  // Users
  userRightsOnRoutes: [
    {
      urlRegex: /\/api\/users(\/.*)?$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    { urlRegex: /\/api\/users\/reset-password$/, roles:["Admin,Manager"]},
    { urlRegex: /\/api\/users\/admin$/, roles: ["Admin", "Manager"] },
    { urlRegex: /\/api\/users\/\d+\/admin$/, roles: ["Admin", "Manager"] },
    {
      urlRegex: /\/api\/users\/auth$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    {
      urlRegex: /\/api\/users\/auth\/[A-Za-z]+$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    {
      urlRegex: /\/api\/users\/getAllAdminManager$/,
      roles: ["Admin", "Manager"],
    },
    { urlRegex: /\/api\/users\/getAllCustomers$/, roles: ["Admin", "Manager"] },
  ],
  // Favorite Controller
  favoriteRightsOnRoutes: [
    {
      urlRegex: /\/api\/favorites\/\d+$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    {
      urlRegex: /\/api\/favorites\/\d+\/favorites\/\d+$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    { urlRegex: /\/api\/favorites\/getAll$/, roles: ["Admin", "Manager"] },
    {
      urlRegex: /\/api\/favorites\/\d+\/getAll$/,
      roles: ["Admin", "Manager", "Customer"],
    },
  ],

  // City Controller
  cityRightsOnRoutes: [
    { urlRegex: /\/api\/cities\/save$/, roles: ["Admin"] },
    {
      urlRegex: /\/api\/cities\/city-cinema\/\d+$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    { urlRegex: /\/api\/cities\/delete\/\d+$/, roles: ["Admin"] },
    { urlRegex: /\/api\/cities\/update\/\d+$/, roles: ["Admin", "Manager"] },
    {
      urlRegex: /\/api\/cities\/getAllcity-movie$/,
      roles: ["Admin", "Manager", "Customer"],
    },
  ],

  // Cinema Controller
  cinemaRightsOnRoutes: [
    {
      urlRegex: /\/api\/cinemas\/city-hall$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    { urlRegex: /\/api\/cinemas\/save$/, roles: ["Admin"] },
    { urlRegex: /\/api\/cinemas\/\d+\/auth\/\d+$/, roles: ["Admin"] },
    { urlRegex: /\/api\/cinemas\/update\/\d+$/, roles: ["Admin"] },
    {
      urlRegex: /\/api\/cinemas\/\d+$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    { urlRegex: /\/api\/cinemas\/\d+\/halls$/, roles: ["Admin", "Manager"] },
    {
      urlRegex: /\/api\/cinemas\/specialhalls\/\d+$/,
      roles: ["Admin", "Manager", "Customer"],
    },
  ],
  // Tickets
  ticketRightsOnRoutes: [
    { urlRegex: /\/api\/tickets\/reserve$/, roles: ["PUBLIC"] },
    {
      urlRegex: /\/api\/tickets\/reserve-multiple$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    {
      urlRegex: /\/api\/tickets\/cancel\/\d+$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    { urlRegex: /\/api\/tickets\/getAll$/, roles: ["Admin", "Manager"] },
    {
      urlRegex: /\/api\/tickets\/getById\/\d+$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    { urlRegex: /\/api\/tickets\/status\/[A-Za-z]+$/, roles: ["PUBLIC"] },
    {
      urlRegex: /\/api\/tickets\/user\/\d+\/status\/[A-Za-z]+$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    { urlRegex: /\/api\/tickets\/update\/\d+$/, roles: ["Admin", "Manager"] },
  ],

  // ShowTimes
  showTimeRightsOnRoutes: [
    {
      urlRegex: /\/api\/showtime(\/.*)?$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    { urlRegex: /\/api\/showtime\/create$/, roles: ["Admin", "Manager"] },
    {
      urlRegex: /\/api\/showtime\/create-multiple$/,
      roles: ["Admin", "Manager"],
    },
    { urlRegex: /\/api\/showtime\/\d+$/, roles: ["PUBLIC"] },
    { urlRegex: /\/api\/showtime\/update\/\d+$/, roles: ["Admin", "Manager"] },
    { urlRegex: /\/api\/showtime\/delete\/\d+$/, roles: ["Admin", "Manager"] },
    { urlRegex: /\/api\/showtime\/all$/, roles: ["Admin", "Manager"] },
  ],

  // Payments
  paymentRightsOnRoutes: [
    {
      urlRegex: /\/api\/payments(\/.*)?$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    { urlRegex: /\/api\/payments\/pay$/, roles: ["PUBLIC"] },
    { urlRegex: /\/api\/payments\/pay-multiple$/, roles: ["PUBLIC"] },
    { urlRegex: /\/api\/payments\/fail\/\d+$/, roles: ["PUBLIC"] },
    { urlRegex: /\/api\/payments\/successful$/, roles: ["Admin", "Manager"] },
    {
      urlRegex: /\/api\/payments\/successful\/\d+$/,
      roles: ["Admin", "Manager"],
    },
    { urlRegex: /\/api\/payments\/failed$/, roles: ["Admin", "Manager"] },
    { urlRegex: /\/api\/payments\/failed\/\d+$/, roles: ["Admin", "Manager"] },
  ],

  // Movies
  movieRightsOnRoutes: [
    {
      urlRegex: /\/api\/movies(\/.*)?$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    { urlRegex: /\/api\/movies\/save$/, roles: ["Admin"] },
    { urlRegex: /\/api\/movies\/update\/\d+$/, roles: ["Admin"] },
    { urlRegex: /\/api\/movies\/\d+$/, roles: ["Admin"] },
    { urlRegex: /\/api\/movies\/\d+\/show-times$/, roles: ["PUBLIC"] },
    { urlRegex: /\/api\/movies\/hall\/[A-Za-z]+$/, roles: ["PUBLIC"] },
    { urlRegex: /\/api\/movies\/in-theaters$/, roles: ["PUBLIC"] },
    { urlRegex: /\/api\/movies\/in-theaters\/active$/, roles: ["PUBLIC"] },
    { urlRegex: /\/api\/movies\/coming-soon$/, roles: ["PUBLIC"] },
    { urlRegex: /\/api\/movies\/search$/, roles: ["PUBLIC"] },
    { urlRegex: /\/api\/movies\/getOneMovie\/\d+$/, roles: ["PUBLIC"] },
    { urlRegex: /\/api\/movies\/\d+\/admin$/, roles: ["Admin"] },
    { urlRegex: /\/api\/movies\/getAllMovies$/, roles: ["PUBLIC"] },
    { urlRegex: /\/api\/movies\/bulk$/, roles: ["Admin", "Manager"] },
  ],

  // Images
  imageRightsOnRoutes: [
    {
      urlRegex: /\/api\/image(\/.*)?$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    { urlRegex: /\/api\/image\/\d+$/, roles: ["PUBLIC"] },
    { urlRegex: /\/api\/image\/\d+$/, roles: ["Admin"] },
    { urlRegex: /\/api\/image\/movie\/\d+$/, roles: ["PUBLIC"] },
  ],

  // Halls
  hallRightsOnRoutes: [
    { urlRegex: /\/api\/halls(\/.*)?$/, roles: ["Admin", "Manager"] },
    { urlRegex: /\/api\/halls\/save$/, roles: ["Admin"] },
    { urlRegex: /\/api\/halls\/\d+$/, roles: ["Admin", "Manager"] },
    { urlRegex: /\/api\/halls\/deleted\/\d+$/, roles: ["Admin", "Manager"] },
    { urlRegex: /\/api\/halls\/getAllHall$/, roles: ["Admin", "Manager"] },
    { urlRegex: /\/api\/halls\/updateHall\/\d+$/, roles: ["Admin", "Manager"] },
    { urlRegex: /\/api\/halls\/\d+\/seats$/, roles: ["PUBLIC"] },
  ],
};
