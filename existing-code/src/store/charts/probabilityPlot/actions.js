import {FETCH_PROB_PLOT_ERROR, FETCH_PROB_PLOT_SUCCESS} from "../../constants";

export const fetchProbPlotSuccess = (data) => {
    return {
        type: FETCH_PROB_PLOT_SUCCESS,
        payload: data
    }
};

export const fetchProbPlotError = (error) => {
  return {
      type: FETCH_PROB_PLOT_ERROR,
      payload: error
  }
};