import {FETCH_SUBSTITUTION_RATE_CORR_SUCCESS, FETCH_SUBSTITUTION_RATE_CORR_ERROR, FETCH_SUBSTITUTION_RATE_CORR_LOAD} from "../../constants";

export const fetchSubstitutionRateCorrSuccess = (data) => {
    return {
        type: FETCH_SUBSTITUTION_RATE_CORR_SUCCESS,
        payload: data
    }
};

export const fetchSubstitutionRateCorrError = (error) => {
    return {
        type: FETCH_SUBSTITUTION_RATE_CORR_ERROR,
        payload: error
    }
};

export const fetchSubstitutionRateCorrLoad = () => {
    return {
        type: FETCH_SUBSTITUTION_RATE_CORR_LOAD,
    }
};
