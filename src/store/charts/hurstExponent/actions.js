import {FETCH_HURST_EXPONENT_SUCCESS, FETCH_HURST_EXPONENT_ERROR} from "../../constants";

export const fetchHurstExponentSuccess = (data) => {
    return {
        type: FETCH_HURST_EXPONENT_SUCCESS,
        payload: data
    }
};

export const fetchHurstExponentError = (error) => {
    return {
        type: FETCH_HURST_EXPONENT_ERROR,
        payload: error
    }
};
