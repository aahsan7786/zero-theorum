import {
    FETCH_PARTIAL_AUTO_CORRELATION_SUCCESS,
    FETCH_PARTIAL_AUTO_CORRELATION_ERROR
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const partialAutoCorrelationReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_PARTIAL_AUTO_CORRELATION_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_PARTIAL_AUTO_CORRELATION_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
