import {FETCH_3D3_SUCCESS, FETCH_3D3_ERROR} from "../../constants";

export const fetch3D3Success = (data) => {
    return {
        type: FETCH_3D3_SUCCESS,
        payload: data
    }
};

export const fetch3D3Error = (error) => {
    return {
        type: FETCH_3D3_ERROR,
        payload: error
    }
};
