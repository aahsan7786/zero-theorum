import {FETCH_PARTIAL_AUTO_CORRELATION_SUCCESS, FETCH_PARTIAL_AUTO_CORRELATION_ERROR} from "../../constants";

export const fetchPartialAutoCorrelationSuccess = (data) => {
    return {
        type: FETCH_PARTIAL_AUTO_CORRELATION_SUCCESS,
        payload: data
    }
};

export const fetchPartialAutoCorrelationError = (error) => {
    return {
        type: FETCH_PARTIAL_AUTO_CORRELATION_ERROR,
        payload: error
    }
};
