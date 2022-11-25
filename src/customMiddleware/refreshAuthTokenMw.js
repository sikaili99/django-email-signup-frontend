// Imports for email login
import { logoutAction } from "../actions/auth/authActions";
import jwtDecode from "jwt-decode";
import { backendUrl } from "../actions/backendUrl";

import { history } from "../index.js";
import { axiosInstance } from "../services";

let url = process.env.REACT_APP_DEV_URL || backendUrl;

function refreshAuthToken({ dispatch, getState }) {
  return next => action => {
    if (typeof action === "function") {
      if (localStorage.getItem("access_token") && localStorage.length > 0) {
        const tokenExpiration = jwtDecode(localStorage.getItem("access_token"))
          .exp;
        const currentTime = Math.round(new Date().getTime() / 1000);
        const timeLeft = tokenExpiration - currentTime;
        console.log("time left till expiration --->", timeLeft);
        const loginToken = localStorage.getItem("access_token");
        if (tokenExpiration && timeLeft <= 0) {
          history.push("/");
          localStorage.removeItem("access_token");
          dispatch(logoutAction());
          return next(action);
        }
        if (tokenExpiration && timeLeft <= 1800) {
          return axiosInstance.post('/auth/api/v1/token/refresh/')
            .then(response => localStorage.setItem("access_token", response.data.access))
            .then(() => next(action));
        }
        return next(action);
      }
      return next(action);
    } else {
      return next(action);
    }
  };
}

export default refreshAuthToken;
