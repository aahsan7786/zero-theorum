import {FETCH_PERFORMANCE_BENCHMARK_SUCCESS, FETCH_PERFORMANCE_BENCHMARK_ERROR} from "../../constants";

export const fetchPerformanceBenchmarkSuccess = (data) => {
    return {
        type: FETCH_PERFORMANCE_BENCHMARK_SUCCESS,
        payload: data
    }
};

export const fetchPerformanceBenchmarkError = (error) => {
    return {
        type: FETCH_PERFORMANCE_BENCHMARK_ERROR,
        payload: error
    }
};
