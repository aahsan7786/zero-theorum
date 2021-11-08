import {
    FETCH_SCATTERED_PLOTS_SUCCESS,
    FETCH_SCATTERED_PLOTS_ERROR
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const scatteredPlotsReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_SCATTERED_PLOTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_SCATTERED_PLOTS_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
