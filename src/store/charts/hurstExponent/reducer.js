import {
    FETCH_HURST_EXPONENT_ERROR,
    FETCH_HURST_EXPONENT_SUCCESS
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const hurstExponentReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_HURST_EXPONENT_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_HURST_EXPONENT_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
