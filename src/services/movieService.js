// // src/services/movieService.js
// import api from "./api";

// export const movieService = {
//   async getAll(page = 0, size = 10) {
//     const res = await api.get(`/movies?page=${page}&size=${size}`);
//     return res.data;
//   },

//   async getInTheaters(page = 0, size = 10) {
//     const res = await api.get(`/movies/in-theaters?page=${page}&size=${size}`);
//     return res.data;
//   },

//   async getBySlug(slug) {
//     const res = await api.get(`/movies/${slug}`);
//     return res.data;
//   },

//   async create(movieData) {
//     const res = await api.post(`/movies`, movieData);
//     return res.data;
//   },

//   async update(id, movieData) {
//     const res = await api.put(`/movies/${id}`, movieData);
//     return res.data;
//   },

//   async delete(id) {
//     await api.delete(`/movies/${id}`);
//   },
// };
// src/services/movieService.js
import api from "./api"; //
import { getAuthHeader } from "@/helpers/auth-helpers"; //

// --- YENİ EKLENEN PUBLIC FONKSİYONLAR ---

/**
 * Vizyondaki filmleri getirir (Sayfalanmış).
 * PDF M04 & MovieController GET /in-theaters
 * @param {number} page
 * @param {number} size
 * @param {string} sort
 * @param {string} type
 */
const getInTheaters = async (page = 0, size = 10, sort = "releaseDate", type = "desc") => {
  const params = new URLSearchParams({ page, size, sort, type });
  // Backend'deki MovieController'a istek atıyoruz
  const res = await api.get(`/movies/in-theaters?${params.toString()}`);
  return res.data; // Bu bir Page<MovieResponse> dönecek
};

/**
 * Yakında gelecek filmleri getirir.
 * PDF M05 & MovieController GET /coming-soon
 * @param {number} page
 * @param {number} size
 * @param {string} sort
 * @param {string} type
 */
const getComingSoon = async (page = 0, size = 10, sort = "releaseDate", type = "asc") => {
  const params = new URLSearchParams({ page, size, sort, type });
  const res = await api.get(`/movies/coming-soon?${params.toString()}`);
  return res.data; // Bu bir List<MovieResponse> dönecek
};

/**
 * Bir filmi ID ile getirir. (Backend'de slug yerine ID kullanılıyor)
 * PDF M09 & MovieController GET /getOneMovie/{id}
 * @param {number} id
 */
const getMovieById = async (id) => {
  const res = await api.get(`/movies/getOneMovie/${id}`);
  return res.data;
};

// --- YÖNETİCİ (ADMIN) VE YETKİLİ KULLANICI FONKSİYONLARI ---

/**
 * Tüm filmleri sayfalanmış olarak getirir (Admin).
 * PDF M08 & MovieController GET /getAllMovies
 */
const getAllMovies = async (page = 0, size = 10, sort = "title", type = "asc") => {
  const authHeader = await getAuthHeader();
  const params = new URLSearchParams({ page, size, sort, type });
  const res = await api.get(`/movies/getAllMovies?${params.toString()}`, {
    headers: authHeader,
  });
  return res.data; // Page<MovieResponse>
};

/**
 * Yeni film oluşturur (Admin).
 * PDF M11 & MovieController POST /save
 * @param {object} movieData (MovieRequest)
 */
const createMovie = async (movieData) => {
  const authHeader = await getAuthHeader();
  const res = await api.post(`/movies/save`, movieData, { headers: authHeader });
  return res.data;
};

/**
 * Filmi günceller (Admin).
 * PDF M12 & MovieController PUT /update/{id}
 * @param {number} id
 * @param {object} movieData (MovieRequest)
 */
const updateMovie = async (id, movieData) => {
  const authHeader = await getAuthHeader();
  const res = await api.put(`/movies/update/${id}`, movieData, {
    headers: authHeader,
  });
  return res.data;
};

/**
 * Filmi siler (Admin).
 * PDF M13 & MovieController DELETE /{id}
 * @param {number} id
 */
const deleteMovie = async (id) => {
  const authHeader = await getAuthHeader();
  const res = await api.delete(`/movies/${id}`, { headers: authHeader });
  return res.data;
};

/**
 * Film seanslarını getirir.
 * PDF M14 & MovieController GET /{id}/show-times
 * @param {number} id
 */
const getShowtimes = async (id) => {
  const authHeader = await getAuthHeader(); // Bu endpoint yetki gerektiriyor
  const res = await api.get(`/movies/${id}/show-times`, { headers: authHeader });
  return res.data;
}

// Servisi export et
export const movieService = {
  getInTheaters,
  getComingSoon,
  getMovieById,
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  getShowtimes,
};