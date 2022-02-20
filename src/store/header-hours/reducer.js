import {HOURS_NUMBER} from "../constants";

const initialState = {
  hours: "24",
};

export const hoursReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOURS_NUMBER:
      return {
        ...state,
        hours: action.payload,
      };
    default:
      return state;
  }
};
