import api from "./api"; // Mevcut api.js dosyamız
import { getAuthHeader } from "@/helpers/auth-helpers"; // Yetkilendirme için mevcut helper

// --- Herkese Açık (Public) Fonksiyonlar ---

/**
 * Bir salona ait koltuk listesini getirir (Bilet alım ekranı için).
 * HallController GET /{id}/seats
 * @param {number} hallId - Salon ID'si.
 */
const getHallSeats = async (hallId) => {
  // Backend controller'da bu endpoint @PreAuthorize içermediği için public kabul ediyoruz.
  const res = await api.get(`/halls/${hallId}/seats`);
  return res.data;
};

// --- Yetki Gerektiren (Admin/Manager) Fonksiyonlar ---

/**
 * Tüm salonları listeler. (Admin/Manager Gerekli)
 * HallController GET /getAllHall
 */
const getAllHalls = async () => {
  const authHeader = await getAuthHeader();
  const res = await api.get("/halls/getAllHall", { headers: authHeader });
  return res.data;
};

/**
 * ID'ye göre bir salon detayını getirir. (Admin/Manager Gerekli)
 * HallController GET /{id}
 * @param {number} id - Salon ID'si.
 */
const getHallById = async (id) => {
  const authHeader = await getAuthHeader();
  const res = await api.get(`/halls/${id}`, { headers: authHeader });
  return res.data;
};

/**
 * Yeni salon oluşturur. (Admin Gerekli)
 * HallController POST /save
 * @param {object} payload - HallRequest verisi
 */
const createHall = async (payload) => {
  const authHeader = await getAuthHeader();
  const res = await api.post("/halls/save", payload, { headers: authHeader });
  return res.data;
};

/**
 * Mevcut salonu günceller. (Admin/Manager Gerekli)
 * HallController PUT /updateHall/{id}
 * @param {number} id - Salon ID'si.
 * @param {object} payload - HallRequest verisi
 */
const updateHall = async (id, payload) => {
  const authHeader = await getAuthHeader();
  const res = await api.put(`/halls/updateHall/${id}`, payload, {
    headers: authHeader,
  });
  return res.data;
};

/**
 * Salonu siler. (Admin/Manager Gerekli)
 * HallController DELETE /deleted/{id}
 * @param {number} id - Salon ID'si.
 */
const deleteHall = async (id) => {
  const authHeader = await getAuthHeader();
  const res = await api.delete(`/halls/deleted/${id}`, { headers: authHeader });
  return res.data;
};

// Tüm fonksiyonları export ediyoruz
export const hallService = {
  getHallSeats,
  getAllHalls,
  getHallById,
  createHall,
  updateHall,
  deleteHall,
};