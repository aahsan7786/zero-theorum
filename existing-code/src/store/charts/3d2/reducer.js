import {
    FETCH_3D2_SUCCESS,
    FETCH_3D2_ERROR
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const graph3d2Reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_3D2_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_3D2_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
