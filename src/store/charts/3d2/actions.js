import {FETCH_3D2_SUCCESS, FETCH_3D2_ERROR} from "../../constants";

export const fetch3D2Success = (data) => {
    return {
        type: FETCH_3D2_SUCCESS,
        payload: data
    }
};

export const fetch3D2Error = (error) => {
    return {
        type: FETCH_3D2_ERROR,
        payload: error
    }
};
