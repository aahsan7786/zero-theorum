import {
    FETCH_IMPLIED_VOLATILITY_SUCCESS,
    FETCH_IMPLIED_VOLATILITY_ERROR
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const impliedVolatilityReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_IMPLIED_VOLATILITY_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_IMPLIED_VOLATILITY_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
