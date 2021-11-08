import {FETCH_METRICS_CALLS_SURFACE_SUCCESS, FETCH_METRICS_CALLS_SURFACE_ERROR} from "../../constants";

export const fetchMetricsCallsSurfaceSuccess = (data) => {
    return {
        type: FETCH_METRICS_CALLS_SURFACE_SUCCESS,
        payload: data
    }
};

export const fetchMetricsCallsSurfaceError = (error) => {
    return {
        type: FETCH_METRICS_CALLS_SURFACE_ERROR,
        payload: error
    }
};
