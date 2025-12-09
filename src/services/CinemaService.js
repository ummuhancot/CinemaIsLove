import api from "./api"
import {getAuthHeader } from "@/helpers/auth-helpers";


// --- Herkese Açık (Public) Fonksiyonlar ---

/**
 * Sinemaları şehre ve/veya özel salon tipine göre getirir.
 * PDF C01 & CinemaController GET /city-hall
 * @param {string} city - Opsiyonel. Şehir adı.
 * @param {string} specialHall - Opsiyonel. Salon tipi (IMAX, VIP, vb.).
 */
const getCinemas = async (city = "", specialHall = "") => {
  const params = new URLSearchParams();
  if (city) params.append("city", city);
  if (specialHall) params.append("specialHall", specialHall);

  // Backend'deki endpoint'e istek atıyoruz
  const res = await api.get(`/cinemas/city-hall?${params.toString()}`);
  return res.data;
};

/**
 * ID'ye göre bir sinema detayını getirir.
 * PDF C03 & CinemaController GET /{id}
 * @param {number} id - Sinema ID'si.
 */
const getCinemaById = async (id) => {
  const res = await api.get(`/cinemas/${id}`);
  return res.data;
};

/**
 * Bir sinemaya ait özel salonları (VIP, 3D) getirir.
 * PDF C05 & CinemaController GET /specialhalls/{cinemaId}
 * @param {number} cinemaId - Sinema ID'si.
 */
const getSpecialHallsByCinema = async (cinemaId) => {
  const res = await api.get(`/cinemas/specialhalls/${cinemaId}`);
  return res.data;
};

// --- Yetki Gerektiren (Admin/Manager) Fonksiyonlar ---

/**
 * Bir sinemaya ait tüm salonları getirir. (Admin/Manager Gerekli)
 * PDF C04 & CinemaController GET /{id}/halls
 * @param {number} cinemaId - Sinema ID'si.
 */
const getHallsByCinema = async (cinemaId) => {
  const authHeader = await getAuthHeader(); // Token'ı al
  const res = await api.get(`/cinemas/${cinemaId}/halls`, { headers: authHeader });
  return res.data;
};

/**
 * Yeni bir sinema oluşturur. (Admin Gerekli)
 * CinemaController POST /save
 * @param {object} payload - CinemaRequest verisi
 */
const createCinema = async (payload) => {
  const authHeader = await getAuthHeader();
  const res = await api.post("/cinemas/save", payload, { headers: authHeader });
  return res.data;
};


/**
 * Mevcut bir sinemayı günceller. (Admin Gerekli)
 * CinemaController PUT /update/{id}
 * @param {number} id - Sinema ID'si.
 * @param {object} payload - CinemaRequest verisi
 */
const updateCinema = async (id, payload) => {
  const authHeader = await getAuthHeader();
  const res = await api.put(`/cinemas/update/${id}`, payload, {
    headers: authHeader,
  });
  return res.data;
};

/**
 * Bir sinemayı siler. (Admin Gerekli)
 * CinemaController DELETE /{cityId}/auth/{cinemaId}
 * @param {number} cityId - Şehir ID'si.
 * @param {number} cinemaId - Sinema ID'si.
 */
const deleteCinema = async (cityId, cinemaId) => {
  const authHeader = await getAuthHeader();
  const res = await api.delete(`/cinemas/${cityId}/auth/${cinemaId}`, {
    headers: authHeader,
  });
  return res.data;
};


// Tüm fonksiyonları export ediyoruz
export const cinemaService = {
  getCinemas,
  getCinemaById,
  getHallsByCinema,
  getSpecialHallsByCinema,
  createCinema,
  updateCinema,
  deleteCinema,
};
