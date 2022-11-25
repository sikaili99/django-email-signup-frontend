import envConfigs from "../env.config.json";
import axios from "axios";


const token = localStorage.getItem("access_token");
const axiosInstance = axios.create({
  baseURL: envConfigs[process.env.REACT_APP_ENV || "development"].apiBaseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "accept": "application/json",
  }
});

const axiosOpenInstance = axios.create({
  baseURL: envConfigs[process.env.REACT_APP_ENV || "development"].apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
    "accept": "application/json",
  }
});

const checkAuth = () => {
  const token = localStorage.getItem("access_token");
  if (!token) {
    return false;
  }
  return true;
};

export { axiosOpenInstance, axiosInstance, checkAuth };
