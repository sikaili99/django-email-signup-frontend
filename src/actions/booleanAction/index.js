import * as types from "../../types/actionTypes";

export function actionStart(dispatch) {
  
    return dispatch({ type: types.ACTION_START });
  }

  export function actionClose() {
    return { type: types.ACTION_CLOSE};
  }
