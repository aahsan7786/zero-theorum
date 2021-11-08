import {FILTER_BY_SEARCH, TOGGLE_TAG, LOAD_DASHBOARD_PAGE_SUCCESS_RESEARCH} from "Store/constants";

export const toggleTag = (id) => {
    return {
        type: TOGGLE_TAG,
        payload: id
    }
};

export const filterBySearch = (term) => {
    return {
        type: FILTER_BY_SEARCH,
        payload: term
    }
};

export const loadDashboardPageSuccessResearch = (data) => {
    return {
        type: LOAD_DASHBOARD_PAGE_SUCCESS_RESEARCH,
        payload: data
    }
};
