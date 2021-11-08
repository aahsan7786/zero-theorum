import {FETCH_ROLLING_FLOW_SUCCESS, FETCH_ROLLING_FLOW_ERROR} from "../../constants";

export const fetchRollingNetFlowSuccess = (data) => {
    return {
        type: FETCH_ROLLING_FLOW_SUCCESS,
        payload: data
    }
};

export const fetchRollingNetFlowError = (error) => {
    return {
        type: FETCH_ROLLING_FLOW_ERROR,
        payload: error
    }
};
