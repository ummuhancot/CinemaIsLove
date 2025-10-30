import api from "./api.js"; // Oluşturduğumuz merkezi axios instance (.js uzantılı)

/**
 * Kullanıcı giriş işlemi (PDF U01).
 * Backend -> AuthenticationController -> /api/login
 * @param {object} credentials - { email, password } (LoginRequest DTO)
 * @returns {Promise<AuthenticationResponse>} Axios response promise
 */
export const login = (credentials) => {
  return api.post("/api/login", credentials);
};

/**
 * Kullanıcı kayıt işlemi (PDF U02).
 * Backend -> AuthenticationController -> /api/register
 * @param {object} userData - RegisterRequest DTO'suna uygun veriler
 * @returns {Promise<UserResponse>} Axios response promise
 */
export const register = (userData) => {
  return api.post("/api/register", userData);
};

/**
 * Şifremi unuttum e-postası gönderir (PDF U03).
 * Backend -> AuthenticationController -> /api/forgot-password
 * @param {object} data - { email } (ForgotPasswordRequest DTO)
 * @returns {Promise} Axios response promise
 */
export const forgotPassword = (data) => {
  return api.post("/api/forgot-password", data);
};