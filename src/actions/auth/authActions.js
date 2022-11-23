import * as types from "../../types/actionTypes";
import axiosInstance from "../../services";
import { message } from "antd";

function authenticateAction(userData, dispatch, location, navigate) {
  return async function() {
    if (navigator.cookieEnabled) {
      if (userData?.access){
        localStorage.setItem("access_token", userData?.access);
      }  
    }
    if (location.pathname == "/login") {
      navigate("/");
    }
    dispatch({ type: types.AUTHENTICATED });
  };
}

const loginAction = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.AUTHENTICATED_REQUEST });
    let response = await axiosInstance.post('/auth/v1/api/token/',JSON.stringify(data));
    dispatch({type: types.AUTHENTICATED })
    return response
} catch (err) {
  dispatch({ type: types.AUTHENTICATED_FAILURE });
  if (err.response) {
    message.error(err.response.data.message);
  } else if (err.request) {
    message.error(err.message);
  }
}
}

// JWT tokens are not stored in our DB
function logoutAction() {
  localStorage.removeItem("access_token");
  return { type: types.UNAUTHENTICATED };
}

export {
  loginAction,
  authenticateAction,
  logoutAction
};
