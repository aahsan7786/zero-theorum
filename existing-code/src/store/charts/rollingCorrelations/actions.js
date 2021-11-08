import {FETCH_ROLLING_CORRELATIONS_SUCCESS, FETCH_ROLLING_CORRELATIONS_ERROR} from "../../constants";

export const fetchRollingCorrelationsSuccess = (data) => {
    return {
        type: FETCH_ROLLING_CORRELATIONS_SUCCESS,
        payload: data
    }
};

export const fetchRollingCorrelationsError = (error) => {
    return {
        type: FETCH_ROLLING_CORRELATIONS_ERROR,
        payload: error
    }
};
