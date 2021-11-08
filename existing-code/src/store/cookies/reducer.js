import {CLOSE_COOKIES} from "../constants";
let cookie = {};
document.cookie.split(';').forEach((el) => {
    let [k, v] = el.split('=');
    cookie[k.trim()] = v;
})

const initialState = {
  show: cookie['agree'] === undefined ? true : false,
};

export const cookiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_COOKIES:
            return {
                ...state,
                show: false,
                type: action.payload
            };
        default:
            return state;
    }

};
