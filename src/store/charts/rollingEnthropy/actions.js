import {FETCH_ROLLING_ENTHROPY_SUCCESS, FETCH_ROLLING_ENTHROPY_ERROR} from "../../constants";

export const fetchRollingEnthropySuccess = (data) => {
    return {
        type: FETCH_ROLLING_ENTHROPY_SUCCESS,
        payload: data
    }
};

export const fetchRollingEnthropyError = (error) => {
    return {
        type: FETCH_ROLLING_ENTHROPY_ERROR,
        payload: error
    }
};
