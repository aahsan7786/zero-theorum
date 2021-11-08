import {FETCH_GOVERNING_EQUATIONS_ERROR, FETCH_GOVERNING_EQUATIONS_SUCCESS} from "../../constants";

export const fetchGoverningEquationsSuccess = (data) => {
    return {
        type: FETCH_GOVERNING_EQUATIONS_SUCCESS,
        payload: data
    }
};

export const fetchGoverningEquationsError = (error) => {
    return {
        type: FETCH_GOVERNING_EQUATIONS_ERROR,
        payload: error
    }
};
