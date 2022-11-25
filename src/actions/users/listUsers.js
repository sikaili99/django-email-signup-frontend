import { message } from "antd";
import * as types from "../../types/actionTypes";
import { axiosInstance } from "../../services";

export function fetchUserssRequest() {
  return { type: types.FETCH_USER_LIST_REQUEST };
}
export function fetchUsersSuccess(payload) {
  return { type: types.FETCH_USER_LIST_SUCCESS, payload};
}
export function fetchUsersFailuire() {
  return { type: types.FETCH_USER_LIST_FAILUIRE };
}

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUserssRequest());
  try {
      const response = await  axiosInstance.get('auth/api/v1/users/');
      console.log({response})
      dispatch(fetchUsersSuccess(response?.data));
    } catch (err) {

      dispatch(fetchUsersFailuire());
      if (err.response) {
        message.error(err.response.data.message);
      } else if (err.request) {
        message.error(err.message);
      }
  }
};