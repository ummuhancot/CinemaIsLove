// src/services/movieService.js
import api from "./api";

export const movieService = {
  async getAll(page = 0, size = 10) {
    const res = await api.get(`/movies?page=${page}&size=${size}`);
    return res.data;
  },

  async getInTheaters(page = 0, size = 10) {
    const res = await api.get(`/movies/in-theaters?page=${page}&size=${size}`);
    return res.data;
  },

  async getBySlug(slug) {
    const res = await api.get(`/movies/${slug}`);
    return res.data;
  },

  async create(movieData) {
    const res = await api.post(`/movies`, movieData);
    return res.data;
  },

  async update(id, movieData) {
    const res = await api.put(`/movies/${id}`, movieData);
    return res.data;
  },

  async delete(id) {
    await api.delete(`/movies/${id}`);
  },
};
