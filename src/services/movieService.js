import api from "./api.js"; // Merkezi axios instance'ımızı import ediyoruz

/**
 * Vizyondaki filmleri sayfalı olarak getirir (PDF M04).
 * Backend -> MovieController -> @GetMapping("/in-theaters")
 *
 * @param {number} page - Sayfa numarası
 * @param {number} size - Sayfa başına film sayısı
 * @param {string} sort - Sıralama alanı (örn: "releaseDate")
 * @param {string} type - Sıralama yönü (örn: "DESC")
 * @returns {Promise} Axios response promise
 */
export const getMoviesInTheaters = (
  page = 0,
  size = 10,
  sort = "releaseDate",
  type = "DESC"
) => {
  return api.get("/api/movies/in-theaters", {
    params: {
      page,
      size,
      sort,
      type,
    },
  });
};

/**
 * Yakında gelecek filmleri sayfalı olarak getirir (PDF M05).
 * Backend -> MovieController -> @GetMapping("/coming-soon")
 *
 * @param {number} page
 * @param {number} size
 * @param {string} sort
 * @param {string} type
 * @returns {Promise} Axios response promise
 */
export const getComingSoon = (
  page = 0,
  size = 10,
  sort = "releaseDate",
  type = "ASC"
) => {
  return api.get("/api/movies/coming-soon", {
    params: {
      page,
      size,
      sort,
      type,
    },
  });
};

/**
 * ID'ye göre tek bir filmin detaylarını getirir (PDF M09).
 * Backend -> MovieController -> @GetMapping("/getOneMovie/{id}")
 *
 * @param {number} id - Film ID'si
 * @returns {Promise} Axios response promise
 */
export const getMovieById = (id) => {
  return api.get(`/api/movies/getOneMovie/${id}`);
};

/**
 * Bir filmin yaklaşan seanslarını getirir (PDF M14).
 * Backend -> MovieController -> @GetMapping("/{id}/show-times")
 *
 * @param {number} id - Film ID'si
 * @returns {Promise<MovieShowTimesResponse>} Axios response promise
 */
export const getMovieShowTimes = (id) => {
  return api.get(`/api/movies/${id}/show-times`);
};

/**
 * Film arama yapar (PDF M01).
 * Backend -> MovieController -> @GetMapping("/search")
 *
 * @param {string} q - Arama sorgusu
 * @param {number} page
 * @param {number} size
 * @param {string} sort
 * @param {string} type
 * @returns {Promise} Axios response promise
 */
export const searchMovies = (
  q = "",
  page = 0,
  size = 10,
  sort = "title",
  type = "ASC"
) => {
  return api.get("/api/movies/search", {
    params: {
      q,
      page,
      size,
      sort,
      type,
    },
  });
};