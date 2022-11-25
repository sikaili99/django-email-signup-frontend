import { message } from "antd";
import * as types from "../../types/actionTypes";
import { axiosOpenInstance } from "../../services";

export function createUserRequest() {
    return { type: types.CREATE_USER_REQUEST };
  }

  export function createUserSucess(payload) {
    return { type: types.CREATE_USER_SUCCESS, payload };
  }

  export function createUserFailuire() {
    return { type: types.CREATE_USER_FAILURE };
  }


  const createUser = (navigate, data) => async (dispatch) => {
    try {
      dispatch(createUserRequest())
      let user_data = JSON.stringify(data);
      const response = await axiosOpenInstance.post('auth/api/v1/register/', user_data);
      const result = response?.data;
      dispatch(createUserSucess(result));
      message.success("User created successfully!");
      navigate("/login");
    } catch (err) {
      dispatch(createUserFailuire());
      if (err.response) {
        message.error("Failed to register, please check all the fields are correct."); 
      } else if (err.request) {
        message.error("Network error, check your internet connection.");
      }
    }
  }

  export default createUser;
  