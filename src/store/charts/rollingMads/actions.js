import {FETCH_ROLLING_MADS_SUCCESS, FETCH_ROLLING_MADS_ERROR} from "../../constants";

export const fetchRollingMadsSuccess = (data) => {
    return {
        type: FETCH_ROLLING_MADS_SUCCESS,
        payload: data
    }
};

export const fetchRollingMadsError = (error) => {
    return {
        type: FETCH_ROLLING_MADS_ERROR,
        payload: error
    }
};
