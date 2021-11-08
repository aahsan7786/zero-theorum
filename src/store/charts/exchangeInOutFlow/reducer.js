import {
    FETCH_EXCHANGE_FLOW_SUCCESS,
    FETCH_EXCHANGE_FLOW_ERROR
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const exchangeInOutFlowReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_EXCHANGE_FLOW_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_EXCHANGE_FLOW_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
