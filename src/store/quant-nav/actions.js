import {LOAD_DASHBOARD_PAGE_SUCCESS} from "../constants";

export const loadDashboardPageSuccess = (data) => {
  return {
      type: LOAD_DASHBOARD_PAGE_SUCCESS,
      payload: data
  }
};