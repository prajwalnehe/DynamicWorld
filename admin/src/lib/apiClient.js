import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000/api/v1";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(
        `[API ${error.config?.method?.toUpperCase()} ${error.config?.url}]`,
        error.response.status,
        error.response.data
      );
    } else {
      console.error("[API] Network error", error.message);
    }
    return Promise.reject(error);
  }
);

export const getApiBaseUrl = () => API_BASE_URL;

