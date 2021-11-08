import {FETCH_TREND_ERROR, FETCH_TREND_SUCCESS} from "../../constants";

export const fetchTrendSuccess = (data) => {
    return {
        type: FETCH_TREND_SUCCESS,
        payload: data
    }
};

export const fetchTrendError = (error) => {
    return {
        type: FETCH_TREND_ERROR,
        payload: error
    }
};
