import {FETCH_MADS_DIST_SUCCESS, FETCH_MADS_DIST_ERROR} from "../../constants";

export const fetchMadsDistSuccess = (data) => {
    return {
        type: FETCH_MADS_DIST_SUCCESS,
        payload: data
    }
};

export const fetchMadsDistError = (error) => {
    return {
        type: FETCH_MADS_DIST_ERROR,
        payload: error
    }
};
