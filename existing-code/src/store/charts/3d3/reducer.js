import {
    FETCH_3D3_SUCCESS,
    FETCH_3D3_ERROR
} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const graph3d3Reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_3D3_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case FETCH_3D3_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
