import {
    FETCH_ROLLING_MADS_SUCCESS,
    FETCH_ROLLING_MADS_ERROR
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const rollingMadsReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_ROLLING_MADS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_ROLLING_MADS_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
