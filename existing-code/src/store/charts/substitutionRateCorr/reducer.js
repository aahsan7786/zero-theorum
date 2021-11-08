import {
    FETCH_SUBSTITUTION_RATE_CORR_SUCCESS,
    FETCH_SUBSTITUTION_RATE_CORR_ERROR,
    FETCH_SUBSTITUTION_RATE_CORR_LOAD
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const substitutionRateCorrReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_SUBSTITUTION_RATE_CORR_SUCCESS:
            return {
                ...state,
                data: {...state.data, ...action.payload},
                isLoading: false
            };
        case FETCH_SUBSTITUTION_RATE_CORR_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case FETCH_SUBSTITUTION_RATE_CORR_LOAD:
            return {
                ...state,
                isLoading: true
            };
        default:
            return state;
    }

};
