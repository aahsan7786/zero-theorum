import {
    FETCH_BTC_ROLLING_ERROR,
    FETCH_BTC_ROLLING_SUCCESS
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const btcRollingReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BTC_ROLLING_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_BTC_ROLLING_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};
