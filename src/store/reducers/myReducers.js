// src/store/reducers/myReducer.js
import { ACTION_TYPE } from "../actions/actionTypes";

const initialState = {
  // Initial state
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE:
      return {
        ...state,
        // update state
      };
    default:
      return state;
  }
};

export default myReducer;
