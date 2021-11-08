import {FETCH_AUTTOCORRELATION_SUCCESS, FETCH_AUTTOCORRELATION_ERROR} from "../../constants";

export const fetchAutoCorrelationSuccess = (data) => {
    return {
        type: FETCH_AUTTOCORRELATION_SUCCESS,
        payload: data
    }
};

export const fetchAutoCorrelationError = (error) => {
    return {
        type: FETCH_AUTTOCORRELATION_ERROR,
        payload: error
    }
};
