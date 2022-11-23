import envConfigs from "../env.config.json";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: envConfigs[process.env.REACT_APP_ENV || "development"].apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
    "accept": "application/json",
  }
});

export default axiosInstance;
