import {FETCH_COST_OF_PRODUCT_SUCCESS, FETCH_COST_OF_PRODUCT_ERROR} from "../../constants";

export const fetchCostOfProductionSuccess = (data) => {
    return {
        type: FETCH_COST_OF_PRODUCT_SUCCESS,
        payload: data
    }
};

export const fetchCostOfProductionError = (error) => {
    return {
        type: FETCH_COST_OF_PRODUCT_ERROR,
        payload: error
    }
};
