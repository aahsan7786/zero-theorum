import {
    FETCH_HODLER_DISTRIBUTION_SUCCESS,
    FETCH_HODLER_DISTRIBUTION_ERROR
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const hodlerDistributionReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_HODLER_DISTRIBUTION_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_HODLER_DISTRIBUTION_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
