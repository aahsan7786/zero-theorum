import {
    FETCH_ROLLING_ENTHROPY_SUCCESS,
    FETCH_ROLLING_ENTHROPY_ERROR
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const rollingEnthropyReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_ROLLING_ENTHROPY_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_ROLLING_ENTHROPY_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
