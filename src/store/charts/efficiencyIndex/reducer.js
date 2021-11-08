import {
    FETCH_EFFICIENCY_INDEX_SUCCESS,
    FETCH_EFFICIENCY_INDEX_ERROR
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const efficiencyIndexReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_EFFICIENCY_INDEX_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_EFFICIENCY_INDEX_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
