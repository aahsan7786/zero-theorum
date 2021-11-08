import {FETCH_EFFICIENCY_INDEX_SUCCESS, FETCH_EFFICIENCY_INDEX_ERROR} from "../../constants";

export const fetchEfficiencyIndexSuccess = (data) => {
    return {
        type: FETCH_EFFICIENCY_INDEX_SUCCESS,
        payload: data
    }
};

export const fetchEfficiencyIndexError = (error) => {
    return {
        type: FETCH_EFFICIENCY_INDEX_ERROR,
        payload: error
    }
};
