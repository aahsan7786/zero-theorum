import {
    FETCH_BTC_RETURN_DIS_ERROR,
    FETCH_BTC_RETURN_DIS_SUCCESS
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const btcReturnDisReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_BTC_RETURN_DIS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_BTC_RETURN_DIS_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state
    }

};
