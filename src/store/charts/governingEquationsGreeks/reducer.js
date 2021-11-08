import {FETCH_GOVERNING_EQUATIONS_GREEKS_ERROR, FETCH_GOVERNING_EQUATIONS_GREEKS_SUCCESS} from "../../constants";

const initialState = {
    data: {},
    isLoading: true,
    error: null
};

export const governingEquationsGreeksReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_GOVERNING_EQUATIONS_GREEKS_SUCCESS:
            // const data = {
            //     eq_1:{date: [], eq: []},
            //     eq_2:{date: [], eq: []},
            //     eq_3:{date: [], eq: []},
            //     eq_4:{date: [], eq: []},
            //     eq_5:{date: [], eq: []},
            //     eq_6:{date: [], eq: []},
            //     eq_7:{date: [], eq: []},
            //     eq_8:{date: [], eq: []},
            // };
            // action.payload.forEach((item, i) => {
            //     item.data.forEach(point => {
            //         data[`eq_${i+1}`].date.push(point.date);
            //         data[`eq_${i+1}`].eq.push(point.equation);
            //     });
            // })
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload
                },
                isLoading: false
            };
        case FETCH_GOVERNING_EQUATIONS_GREEKS_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return state;
    }

};
