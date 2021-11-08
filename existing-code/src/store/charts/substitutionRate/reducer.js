import {
    FETCH_SUBSTITUTION_RATE_SUCCESS,
    FETCH_SUBSTITUTION_RATE_ERROR,
    FETCH_SUBSTITUTION_RATE_LOAD,
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const substitutionRateReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_SUBSTITUTION_RATE_SUCCESS:
            return {
                ...state,
                data: {...state.data, ...action.payload},
                isLoading: false
            };
        case FETCH_SUBSTITUTION_RATE_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case FETCH_SUBSTITUTION_RATE_LOAD:
            return {
                ...state,
                isLoading: true
            };
        default:
            return state;
    }

};
