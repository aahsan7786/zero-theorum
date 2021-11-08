import {FETCH_BTC_ROLLING_ERROR, FETCH_BTC_ROLLING_SUCCESS} from "../../constants";

export const fetchBTCRollingSuccess = (data) => {
  return {
      type: FETCH_BTC_ROLLING_SUCCESS,
      payload: data
  }
};

export const fetchBTCRollingError = (error) => {
  return {
      type: FETCH_BTC_ROLLING_ERROR,
      payload: error
  }
};
