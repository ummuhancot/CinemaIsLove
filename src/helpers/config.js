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
    { urlRegex: /(?:\/dashboard)?\/api\/login$/, roles: ["Public"] },

    {
      urlRegex: /(?:\/dashboard)?\/api\/users(\/.*)?$/,
      roles: ["Admin", "Manager", "Customer"],
    },
    { urlRegex: /(?:\/dashboard)?\/api\/users\/reset-password$/, roles: ["Admin", "Manager"] },
    { urlRegex: /(?:\/dashboard)?\/api\/users\/admin$/, roles: ["Admin", "Manager"] },
    { urlRegex: /(?:\/dashboard)?\/api\/users\/\d+\/admin$/, roles: ["Admin", "Manager"] },
    { urlRegex: /(?:\/dashboard)?\/api\/users\/auth$/, roles: ["Admin", "Manager", "Customer"] },
    { urlRegex: /(?:\/dashboard)?\/api\/users\/auth\/[A-Za-z]+$/, roles: ["Admin", "Manager", "Customer"] },
    { urlRegex: /(?:\/dashboard)?\/api\/users\/getAllAdminManager$/, roles: ["Admin", "Manager"] },
    { urlRegex: /(?:\/dashboard)?\/api\/users\/getAllCustomers$/, roles: ["Admin", "Manager"] },
  ],

  // FAVORITES
  favoriteRightsOnRoutes: [
    { urlRegex: /(?:\/dashboard)?\/api\/favorites\/\d+$/, roles: ["Admin", "Manager", "Customer"] },
    { urlRegex: /(?:\/dashboard)?\/api\/favorites\/\d+\/favorites\/\d+$/, roles: ["Admin", "Manager", "Customer"] },
    { urlRegex: /(?:\/dashboard)?\/api\/favorites\/getAll$/, roles: ["Admin", "Manager"] },
    { urlRegex: /(?:\/dashboard)?\/api\/favorites\/\d+\/getAll$/, roles: ["Admin", "Manager", "Customer"] },
  ],

  // CITIES
  cityRightsOnRoutes: [
    { urlRegex: /(?:\/dashboard)?\/api\/cities\/save$/, roles: ["Admin"] },
    { urlRegex: /(?:\/dashboard)?\/api\/cities\/city-cinema\/\d+$/, roles: ["Admin", "Manager", "Customer"] },
    { urlRegex: /(?:\/dashboard)?\/api\/cities\/delete\/\d+$/, roles: ["Admin"] },
    { urlRegex: /(?:\/dashboard)?\/api\/cities\/update\/\d+$/, roles: ["Admin", "Manager"] },
    { urlRegex: /(?:\/dashboard)?\/api\/cities\/getAllcity-movie$/, roles: ["Admin", "Manager", "Customer"] },
  ],

  // CINEMAS
  cinemaRightsOnRoutes: [
    { urlRegex: /(?:\/dashboard)?\/api\/cinemas\/city-hall$/, roles: ["Admin", "Manager", "Customer"] },
    { urlRegex: /(?:\/dashboard)?\/api\/cinemas\/save$/, roles: ["Admin"] },
    { urlRegex: /(?:\/dashboard)?\/api\/cinemas\/\d+\/auth\/\d+$/, roles: ["Admin"] },
    { urlRegex: /(?:\/dashboard)?\/api\/cinemas\/update\/\d+$/, roles: ["Admin"] },
    { urlRegex: /(?:\/dashboard)?\/api\/cinemas\/\d+$/, roles: ["Admin", "Manager", "Customer"] },
    { urlRegex: /(?:\/dashboard)?\/api\/cinemas\/\d+\/halls$/, roles: ["Admin", "Manager"] },
    { urlRegex: /(?:\/dashboard)?\/api\/cinemas\/specialhalls\/\d+$/, roles: ["Admin", "Manager", "Customer"] },
  ],

  // TICKETS
  ticketRightsOnRoutes: [
    { urlRegex: /(?:\/dashboard)?\/api\/tickets\/reserve$/, roles: ["PUBLIC"] },
    { urlRegex: /(?:\/dashboard)?\/api\/tickets\/reserve-multiple$/, roles: ["Admin", "Manager", "Customer"] },
    { urlRegex: /(?:\/dashboard)?\/api\/tickets\/cancel\/\d+$/, roles: ["Admin", "Manager", "Customer"] },
    { urlRegex: /(?:\/dashboard)?\/api\/tickets\/getAll$/, roles: ["Admin", "Manager"] },
    { urlRegex: /(?:\/dashboard)?\/api\/tickets\/getById\/\d+$/, roles: ["Admin", "Manager", "Customer"] },
    { urlRegex: /(?:\/dashboard)?\/api\/tickets\/status\/[A-Za-z]+$/, roles: ["PUBLIC"] },
    { urlRegex: /(?:\/dashboard)?\/api\/tickets\/user\/\d+\/status\/[A-Za-z]+$/, roles: ["Admin", "Manager", "Customer"] },
    { urlRegex: /(?:\/dashboard)?\/api\/tickets\/update\/\d+$/, roles: ["Admin", "Manager"] },
  ],

  // SHOWTIMES
  showTimeRightsOnRoutes: [
    { urlRegex: /(?:\/dashboard)?\/api\/showtime(\/.*)?$/, roles: ["Admin", "Manager", "Customer"] },
  ],

  // PAYMENTS
  paymentRightsOnRoutes: [
    { urlRegex: /(?:\/dashboard)?\/api\/payments(\/.*)?$/, roles: ["Admin", "Manager", "Customer"] },
  ],

  // MOVIES
  movieRightsOnRoutes: [
    { urlRegex: /(?:\/dashboard)?\/api\/movies(\/.*)?$/, roles: ["Admin", "Manager", "Customer"] },
    { urlRegex: /(?:\/dashboard)?\/api\/movies\/save$/, roles: ["Admin"] },
    { urlRegex: /(?:\/dashboard)?\/api\/movies\/update\/\d+$/, roles: ["Admin"] },
    { urlRegex: /(?:\/dashboard)?\/api\/movies\/\d+$/, roles: ["Admin"] },
    { urlRegex: /(?:\/dashboard)?\/api\/movies\/\d+\/admin$/, roles: ["Admin"] },
    { urlRegex: /(?:\/dashboard)?\/api\/movies\/bulk$/, roles: ["Admin", "Manager"] },

    // PUBLIC endpoints
    { urlRegex: /(?:\/dashboard)?\/api\/movies\/\d+\/show-times$/, roles: ["PUBLIC"] },
    { urlRegex: /(?:\/dashboard)?\/api\/movies\/hall\/[A-Za-z]+$/, roles: ["PUBLIC"] },
    { urlRegex: /(?:\/dashboard)?\/api\/movies\/in-theaters$/, roles: ["PUBLIC"] },
    { urlRegex: /(?:\/dashboard)?\/api\/movies\/in-theaters\/active$/, roles: ["PUBLIC"] },
    { urlRegex: /(?:\/dashboard)?\/api\/movies\/coming-soon$/, roles: ["PUBLIC"] },
    { urlRegex: /(?:\/dashboard)?\/api\/movies\/search$/, roles: ["PUBLIC"] },
    { urlRegex: /(?:\/dashboard)?\/api\/movies\/getOneMovie\/\d+$/, roles: ["PUBLIC"] },
    { urlRegex: /(?:\/dashboard)?\/api\/movies\/getAllMovies$/, roles: ["PUBLIC"] },
  ],

  // HALLS
  hallRightsOnRoutes: [
    { urlRegex: /(?:\/dashboard)?\/api\/halls(\/.*)?$/, roles: ["Admin", "Manager"] },
    { urlRegex: /(?:\/dashboard)?\/api\/halls\/save$/, roles: ["Admin"] },
    { urlRegex: /(?:\/dashboard)?\/api\/halls\/\d+$/, roles: ["Admin", "Manager"] },
    { urlRegex: /(?:\/dashboard)?\/api\/halls\/deleted\/\d+$/, roles: ["Admin", "Manager"] },
    { urlRegex: /(?:\/dashboard)?\/api\/halls\/getAllHall$/, roles: ["Admin", "Manager"] },
    { urlRegex: /(?:\/dashboard)?\/api\/halls\/updateHall\/\d+$/, roles: ["Admin", "Manager"] },
    { urlRegex: /(?:\/dashboard)?\/api\/halls\/\d+\/seats$/, roles: ["PUBLIC"] },
  ],
};
