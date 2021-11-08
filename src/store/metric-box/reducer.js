import {FETCH_METRIC_ERROR, FETCH_METRIC_SUCCESS} from "../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const metricReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_METRIC_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_METRIC_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
