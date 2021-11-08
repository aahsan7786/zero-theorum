import {
    FETCH_PERFORMANCE_BENCHMARK_SUCCESS,
    FETCH_PERFORMANCE_BENCHMARK_ERROR
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const performanceBenchmarkReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_PERFORMANCE_BENCHMARK_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_PERFORMANCE_BENCHMARK_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
