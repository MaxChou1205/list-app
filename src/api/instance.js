import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_WORKFLOW_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
