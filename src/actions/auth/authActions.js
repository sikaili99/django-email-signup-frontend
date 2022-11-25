import * as types from "../../types/actionTypes";
import { axiosInstance, axiosOpenInstance } from "../../services";
import { message } from "antd";

function authenticateAction(userData, dispatch, location, navigate) {
  return async function() {
    if (navigator.cookieEnabled) {
      if (userData?.access){
        localStorage.setItem("access_token", userData?.access);
        localStorage.setItem("refresh_token", userData?.refresh);
      }  
    }
    if (location.pathname == "/login") {
      navigate("/", { replace: true });
    }
    dispatch({ type: types.AUTHENTICATED });
  };
}

const loginAction = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.AUTHENTICATED_REQUEST });
    let response = await axiosOpenInstance.post('/auth/api/v1/token/',JSON.stringify(data));
    dispatch({type: types.AUTHENTICATED })
    return response
} catch (err) {
  dispatch({ type: types.AUTHENTICATED_FAILURE });
  if (err.response) {
    console.log(err.response);
    message.error("You've enter incorrect phone number or password.");
  } else if (err.request) {
    message.error("Network error, check your internet connection.");
  }
}
}

// JWT tokens are not stored in our DB
const logoutAction = (navigate) => async (dispatch) => {

    try {
      dispatch({ type: types.AUTHENTICATED_REQUEST });
      const refresh = localStorage.getItem('refresh_token');
      await axiosInstance.post('/auth/api/v1/logout/',{ "refresh": refresh });
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      navigate('/login', { replace: true });
      return dispatch({ type: types.UNAUTHENTICATED });
  } catch (err) {
    dispatch({ type: types.AUTHENTICATED_FAILURE });
    if (err.response) {
      console.log(err.response);
      message.error("Server error, try again.");
    } else if (err.request) {
      message.error("Network error, check your internet connection.");
    }
  }
}

export {
  loginAction,
  authenticateAction,
  logoutAction
};
