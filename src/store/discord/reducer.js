import {GET_DISCORD, GET_DISCORD_ERROR} from "../constants";

const initialState = {
};

export const discordReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_DISCORD:
            return {
                ...state,
                data: action.data
            };
        case GET_DISCORD_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }

};
