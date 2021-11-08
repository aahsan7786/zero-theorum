import {
    FETCH_SEASONAL_DECOMPOSE_SUCCESS,
    FETCH_SEASONAL_DECOMPOSE_ERROR
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const seasonalDecomposeReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_SEASONAL_DECOMPOSE_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_SEASONAL_DECOMPOSE_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
