import {FETCH_HODLER_DISTRIBUTION_SUCCESS, FETCH_HODLER_DISTRIBUTION_ERROR} from "../../constants";

export const fetchHodlerDistributionSuccess = (data) => {
    return {
        type: FETCH_HODLER_DISTRIBUTION_SUCCESS,
        payload: data
    }
};

export const fetchHodlerDistributionError = (error) => {
    return {
        type: FETCH_HODLER_DISTRIBUTION_ERROR,
        payload: error
    }
};
