// src/store/actions/actionTypes.js
export const ACTION_TYPE = "ACTION_TYPE";

// src/store/actions/myActions.js
import { ACTION_TYPE } from "./actionTypes";

export const myAction = (data) => {
  return {
    type: ACTION_TYPE,
    payload: data,
  };
};
