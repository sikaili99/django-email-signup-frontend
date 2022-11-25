import * as types from "../../types/actionTypes";

const initialState = {
    isAction: false
};

function booleanReducer(state = initialState, action) {
  switch (action.type) {

    case types.ACTION_START:
      return {
        ...state,
        isAction: true
      };

    case types.ACTION_CLOSE:
      return {
        ...state,
        isAction: false
      };
    default:
        return state;
    }
  }

  export default booleanReducer;
