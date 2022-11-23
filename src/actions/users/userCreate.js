import { message } from "antd";
import * as types from "../../types/actionTypes";
import axiosInstance from "../../services";

export function createUserRequest() {
    return { type: types.CREATE_USER_REQUEST };
  }

  export function createUserSucess(payload) {
    return { type: types.CREATE_USER_SUCCESS, payload };
  }

  export function createUserFailuire() {
    return { type: types.CREATE_USER_FAILURE};
  }


  const createUser = (navigate, data) => async (dispatch) => {
    try {
      dispatch(createUserRequest())
      let my_data = JSON.stringify(data);
      console.log({body: JSON.stringify(data)});
      const response = await axiosInstance.post('auth/v1/api/register/', {
        "phonenumber": "0966468772",
        "email": "sk@gmail.com",
        "age": "34",
        "address": "23543",
        "gender": "male",
        "first_name": "Mathews",
        "last_name": "Musukuma",
        "buying_preference": "weekly",
        "profession": "SDE",
        "receive_info": false,
        "password": "123456",
        "password2": "123456"
    });
      const result = response?.data;
      dispatch(createUserSucess(result));
      message.success("User created successfully!");
      navigate("/");
    } catch (err) {
      dispatch(createUserFailuire());
      if (err.response) {
        message.error(err.response.data.message);
      } else if (err.request) {
        message.error(err.message);
      }
    }
  }

  export default createUser;
  