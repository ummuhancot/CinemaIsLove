import axios from "axios";
import { config } from "@/helpers/config"; // Mevcut config dosyanız

// Backend API URL'niz (http://localhost:8090 olmalı)
const API_URL = config.apiURL;

const api = axios.create({
  baseURL: API_URL,
});

/*
  Gelecekte login işlemi yaptıktan sonra JWT token'ı
  otomatik olarak her isteğe eklemek için bu bölümü kullanabilirsiniz:

  api.interceptors.request.use(config => {
    const token = localStorage.getItem("token"); // Token'ı storage'dan al
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Header'a ekle
    }
    return config;
  });
*/

export default api;