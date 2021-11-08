import {
    FETCH_MADS_DIST_SUCCESS,
    FETCH_MADS_DIST_ERROR
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const madsDistReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_MADS_DIST_SUCCESS:

            return {
                ...state,
                data: {...state.data, ...action.payload},
                isLoading: false
            };
        case FETCH_MADS_DIST_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
