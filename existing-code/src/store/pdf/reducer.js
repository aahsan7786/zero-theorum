import {
  SET_PDF,
} from "Store/constants";

const initialState = {
};

export const pdfReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PDF:
      return {
        pdf: action.payload
      };
    default:
      return state;
  }
};
