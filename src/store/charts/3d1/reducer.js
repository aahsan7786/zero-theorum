import {
    FETCH_3D1_SUCCESS,
    FETCH_3D1_ERROR
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const graph3d1Reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_3D1_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_3D1_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
