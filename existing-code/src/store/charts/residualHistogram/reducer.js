import {
    FETCH_RESIDUAL_HIST_ERROR,
    FETCH_RESIDUAL_HIST_SUCCESS
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const residualHisReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_RESIDUAL_HIST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_RESIDUAL_HIST_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state
    }

};