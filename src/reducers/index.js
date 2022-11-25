import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import changePasswordReducer from "./auth/changePasswordReducer";
import booleanReducer from "./booleanActions/booleanReducer";
import usersReducer from "./users/usersReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  actions: booleanReducer,
  change_password: changePasswordReducer
});

export default rootReducer;
