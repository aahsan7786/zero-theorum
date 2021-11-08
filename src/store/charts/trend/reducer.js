import {FETCH_TREND_ERROR, FETCH_TREND_SUCCESS} from "../../constants";

const initialState = {
    data: {},
    startFrom: null,
    finishedTo: null,
    isLoading: true,
    error: null
};

export const trendReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_TREND_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_TREND_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
