import {FETCH_QQ_PLOT_ERROR, FETCH_QQ_PLOT_SUCCESS} from "../../constants";

export const fetchQqPlotSuccess = (data) => {
    return {
        type: FETCH_QQ_PLOT_SUCCESS,
        payload: data
    }
};

export const fetchQqPlotError = (error) => {
  return {
      type: FETCH_QQ_PLOT_ERROR,
      payload: error
  }
};