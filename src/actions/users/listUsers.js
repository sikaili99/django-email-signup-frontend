import axios from "axios";
import { message } from "antd";
import * as types from "../../types/actionTypes";
import axiosInstance from "../../services";

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
      const res = await  axios.get('https://randomuser.me/api/?nat=us&results=18&page=1');
  
      dispatch(fetchUsersSuccess(res?.data?.results));
      
    } catch (err) {

      dispatch(fetchUsersFailuire());
      if (err.response) {
        message.error(err.response.data.message);
      } else if (err.request) {
        message.error(err.message);
      }
      
    }
};