import {FETCH_EXCHANGE_FLOW_SUCCESS, FETCH_EXCHANGE_FLOW_ERROR} from "../../constants";

export const fetchExchangeInOutFlowSuccess = (data) => {
    return {
        type: FETCH_EXCHANGE_FLOW_SUCCESS,
        payload: data
    }
};

export const fetchExchangeInOutFlowError = (error) => {
    return {
        type: FETCH_EXCHANGE_FLOW_ERROR,
        payload: error
    }
};
