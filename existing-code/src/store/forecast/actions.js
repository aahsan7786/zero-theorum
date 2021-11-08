import {LOAD_DASHBOARD_PAGE_SUCCESS_FORECAST} from "../constants";

export const loadDashboardPageSuccessForecast = (data) => {
  return {
      type: LOAD_DASHBOARD_PAGE_SUCCESS_FORECAST,
      payload: data
  }
};
