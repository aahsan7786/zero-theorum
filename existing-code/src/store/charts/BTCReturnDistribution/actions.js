import {FETCH_BTC_RETURN_DIS_ERROR, FETCH_BTC_RETURN_DIS_SUCCESS} from "../../constants";

export const fetchBTCReturnDisSuccess = (data) => {
    return {
        type: FETCH_BTC_RETURN_DIS_SUCCESS,
        payload: data
    }
};

export const fetchBTCReturnDisError = (error) => {
    return {
        type: FETCH_BTC_RETURN_DIS_ERROR,
        payload: error
    }
};
