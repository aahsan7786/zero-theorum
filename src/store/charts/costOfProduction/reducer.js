import {
    FETCH_COST_OF_PRODUCT_SUCCESS,
    FETCH_COST_OF_PRODUCT_ERROR
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const costOfProductionReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_COST_OF_PRODUCT_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_COST_OF_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
