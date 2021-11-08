import {FETCH_3D1_SUCCESS, FETCH_3D1_ERROR} from "../../constants";

export const fetch3D1Success = (data) => {
    return {
        type: FETCH_3D1_SUCCESS,
        payload: data
    }
};

export const fetch3D1Error = (error) => {
    return {
        type: FETCH_3D1_ERROR,
        payload: error
    }
};
