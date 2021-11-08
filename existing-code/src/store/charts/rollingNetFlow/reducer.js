import {
    FETCH_ROLLING_FLOW_SUCCESS,
    FETCH_ROLLING_FLOW_ERROR
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const rollingNetFlowReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_ROLLING_FLOW_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_ROLLING_FLOW_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
