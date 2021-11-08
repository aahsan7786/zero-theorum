import {CHANGE_ZT_LEARNER} from "../constants";

const initialState = {
    type: 'Zero Theorem'
};

export const ztLearnerReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_ZT_LEARNER:
            return {
                ...state,
                type: action.payload
            };
        default:
            return state;
    }
};
