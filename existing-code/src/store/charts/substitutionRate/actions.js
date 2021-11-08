import {
    FETCH_SUBSTITUTION_RATE_SUCCESS,
    FETCH_SUBSTITUTION_RATE_ERROR,
    FETCH_SUBSTITUTION_RATE_LOAD
} from "../../constants";

export const fetchSubstitutionRateSuccess = (data) => {
    return {
        type: FETCH_SUBSTITUTION_RATE_SUCCESS,
        payload: data
    }
};

export const fetchSubstitutionRateError = (error) => {
    return {
        type: FETCH_SUBSTITUTION_RATE_ERROR,
        payload: error
    }
};

export const fetchSubstitutionRateLoad = () => {
    return {
        type: FETCH_SUBSTITUTION_RATE_LOAD,
    }
};
