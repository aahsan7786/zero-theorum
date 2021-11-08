import {CLOSE_MODAL, CLOSE_MODAL_DATA, OPEN_MODAL, OPEN_MODAL_DATA, OPEN_MODAL_PUBLICATION, CLOSE_MODAL_PUBLICATION} from "../constants";

const initialState = {
  isOpen: false,
  isOpenData: false,
  isOpenPublication: false,
  type: null,
  typeData: null,
  typePublication: null
};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isOpen: true,
                type: action.payload
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isOpen: false,
                type: action.payload
            };
        case OPEN_MODAL_DATA:
            return {
                ...state,
                isOpenData: true,
                typeData: action.payload
            };
        case CLOSE_MODAL_DATA:
            return {
                ...state,
                isOpenData: false,
                typeData: action.payload
            };
        case OPEN_MODAL_PUBLICATION:
            return {
                ...state,
                isOpenPublication: true,
                typePublication: action.payload
            };
        case CLOSE_MODAL_PUBLICATION:
            return {
                ...state,
                isOpenPublication: false,
                typePublication: action.payload
            };
        default:
            return state;
    }

};
