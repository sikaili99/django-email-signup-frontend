import * as types from "../../types/actionTypes";
import { backendUrl } from "../backendUrl";
import axios from 'axios';

let url = process.env.REACT_APP_DEV_URL || backendUrl;

function authenticateAction(userData, dispatch, location, navigate) {
  console.log(userData);
  return async function() {
    if (navigator.cookieEnabled) {
      localStorage.setItem("access_token", userData.token);
    }

    if (location === "/login") {
      navigate("/");
    }
    return dispatch({ type: types.AUTHENTICATED });
  };
}
function registrationSuccessMessage() {
  return { type: types.REGISTRATION_SUCCESS_MESSAGE };
}

function registerAction(data) {
  return async function() {
    let response = await axios.post(`${url}/auth/users/create/`, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(data)
    });
    let responseJson = response.json();
    return responseJson;
  };
}

function loginAction(data) {
  console.log({data});
  return async function() {
    let response = await axios.post(`${url}/auth/api/v1/token/obtain/`, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(data)
    });
    let responseJson = await response.json();
    return responseJson;
  };
}

// JWT tokens are not stored in our DB
function logoutAction() {
  localStorage.removeItem("access_token");
  return { type: types.UNAUTHENTICATED };
}

export {
  registerAction,
  loginAction,
  authenticateAction,
  logoutAction,
  registrationSuccessMessage
};
