import {FETCH_RESIDUAL_PLOT_ERROR, FETCH_RESIDUAL_PLOT_SUCCESS} from "../../constants";

export const fetchResidualPlotSuccess = (data) => {
  return {
      type: FETCH_RESIDUAL_PLOT_SUCCESS,
      payload: data
  }
};

export const fetchResidualPlotError = (error) => {
  return {
      type: FETCH_RESIDUAL_PLOT_ERROR,
      payload: error
  }
};