import * as types from "../../types/actionTypes";

const initialState = {
  users: [],
  loading: false
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    // Add user
    case types.CREATE_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload]
      };

    case types.CREATE_USER_FAILURE:
      return {
        ...state,
        loading: false
      };

    // FETCH user
    case types.FETCH_USER_LIST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      };

    case types.FETCH_USER_LIST_FAILUIRE:
      return {
        ...state,
        loading: false
      };

    // DELETE USER

    case types.DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.DELETE_USER_SUCCESS:
      const userID = action.payload
      return Object.assign({}, state, {
          loading: false,
          users: [...state.users.filter(article => article.id !== userID)],
        });
            
    case types.DELETE_USER_FAILUIRE:
      return {
        ...state,
        loading: false
      };

    // UPDATE USER

    case types.UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.UPDATE_USER_FAILUIRE:
      return {
        ...state,
        loading: false
      };

    // USER DETAILS

    case types.USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      };

    case types.USER_DETAILS_FAILUIRE:
      return {
        ...state,
        loading: false
      };
    
    default:
      return state;
  }
}

export default usersReducer;
