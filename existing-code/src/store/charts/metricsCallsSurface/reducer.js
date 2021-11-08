import {
    FETCH_METRICS_CALLS_SURFACE_SUCCESS,
    FETCH_METRICS_CALLS_SURFACE_ERROR
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const metricsCallSurfaceReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_METRICS_CALLS_SURFACE_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_METRICS_CALLS_SURFACE_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
