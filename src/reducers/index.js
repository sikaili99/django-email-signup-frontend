import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import changePasswordReducer from "./auth/changePasswordReducer";
import usersReducer from "./users/listUsersReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  change_password: changePasswordReducer
});

export default rootReducer;
