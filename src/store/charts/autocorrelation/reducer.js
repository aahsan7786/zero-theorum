import {
    FETCH_AUTTOCORRELATION_ERROR,
    FETCH_AUTTOCORRELATION_SUCCESS
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const autoCorrelationReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_AUTTOCORRELATION_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_AUTTOCORRELATION_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
