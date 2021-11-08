import {FETCH_RESIDUAL_HIST_ERROR, FETCH_RESIDUAL_HIST_SUCCESS} from "../../constants";

export const fetchResidualHisSuccess = (data) => {
    return {
        type: FETCH_RESIDUAL_HIST_SUCCESS,
        payload: data
    }
};

export const fetchResidualHisError = (error) => {
    return {
        type: FETCH_RESIDUAL_HIST_ERROR,
        payload: error
    }
};