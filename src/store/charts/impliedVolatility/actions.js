import {FETCH_IMPLIED_VOLATILITY_SUCCESS, FETCH_IMPLIED_VOLATILITY_ERROR} from "../../constants";

export const fetchImpliedVolatilitySuccess = (data) => {
    return {
        type: FETCH_IMPLIED_VOLATILITY_SUCCESS,
        payload: data
    }
};

export const fetchImpliedVolatilityError = (error) => {
    return {
        type: FETCH_IMPLIED_VOLATILITY_ERROR,
        payload: error
    }
};
