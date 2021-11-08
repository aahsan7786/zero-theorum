import {SET_PDF} from "Store/constants";

export const setPdf = (data) => {
    return {
        type: SET_PDF,
        payload: data
    }
};


