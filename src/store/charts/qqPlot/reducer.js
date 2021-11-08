import {
    FETCH_QQ_PLOT_ERROR,
    FETCH_QQ_PLOT_SUCCESS
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const qqPlotReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_QQ_PLOT_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_QQ_PLOT_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};