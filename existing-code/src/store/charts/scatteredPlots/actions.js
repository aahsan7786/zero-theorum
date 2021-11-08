import {FETCH_SCATTERED_PLOTS_SUCCESS, FETCH_SCATTERED_PLOTS_ERROR} from "../../constants";

export const fetchScatteredPlotsSuccess = (data) => {
    return {
        type: FETCH_SCATTERED_PLOTS_SUCCESS,
        payload: data
    }
};

export const fetchScatteredPlotsError = (error) => {
    return {
        type: FETCH_SCATTERED_PLOTS_ERROR,
        payload: error
    }
};
