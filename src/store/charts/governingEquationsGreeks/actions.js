import {FETCH_GOVERNING_EQUATIONS_GREEKS_ERROR, FETCH_GOVERNING_EQUATIONS_GREEKS_SUCCESS} from "../../constants";

export const fetchGoverningEquationsGreeksSuccess = (data) => {
    return {
        type: FETCH_GOVERNING_EQUATIONS_GREEKS_SUCCESS,
        payload: data
    }
};

export const fetchGoverningEquationsGeeksError = (error) => {
    return {
        type: FETCH_GOVERNING_EQUATIONS_GREEKS_ERROR,
        payload: error
    }
};
