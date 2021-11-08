import {
    FETCH_RESIDUAL_PLOT_ERROR,
    FETCH_RESIDUAL_PLOT_SUCCESS
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const residualPlotReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RESIDUAL_PLOT_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_RESIDUAL_PLOT_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};