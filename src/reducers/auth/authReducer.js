import * as types from "../../types/actionTypes";

const initialState = {
  authenticated: false,
  loading: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case types.AUTHENTICATED_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.AUTHENTICATED:
      return {...state, authenticated: true, loading: false};
    case types.UNAUTHENTICATED:
      return {...state, authenticated: false, loading: false};
    case types.AUTHENTICATED_FAILURE:
        return {...state, authenticated: false, loading: false};
    default:
      return state;
  }
}

export default authReducer;
