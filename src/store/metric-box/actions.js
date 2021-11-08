import {FETCH_METRIC_ERROR, FETCH_METRIC_SUCCESS} from "../constants";

export const fetchMetricSuccess = (data) => {
  return {
      type: FETCH_METRIC_SUCCESS,
      payload: data
  }
};

export const fetchMetricError = (error) => {
  return {
      type: FETCH_METRIC_ERROR,
      payload: error
  }
};
