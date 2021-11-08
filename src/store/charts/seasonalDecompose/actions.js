import {FETCH_SEASONAL_DECOMPOSE_SUCCESS, FETCH_SEASONAL_DECOMPOSE_ERROR} from "../../constants";

export const fetchSeasonalDecomposeSuccess = (data) => {
    return {
        type: FETCH_SEASONAL_DECOMPOSE_SUCCESS,
        payload: data
    }
};

export const fetchSeasonalDecomposeError = (error) => {
    return {
        type: FETCH_SEASONAL_DECOMPOSE_ERROR,
        payload: error
    }
};
