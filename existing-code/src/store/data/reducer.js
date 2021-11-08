import {ENABLE_DOWNLOADS, NEXT_DATA_STEP, PREV_DATA_STEP} from "../constants";

const initialState = {
    enableDownloads: false,
    step: 0,
    downloads: [
        {
            title: 'Forward Valuation',
            // title: 'DownLoad <br /> ZT-Forecast',
            buttonTitle: 'SS_D.CSV',
            url: '#'
        },
        {
            title: 'Backtest',
            buttonTitle: 'SS_D.CSV',
            url: '#'
        },
        {
            title: 'Governing Dynamics',
            buttonTitle: 'SS_D.CSV',
            url: '#'
        },
        {
            title: 'Substitution Rates',
            buttonTitle: 'SS_D.CSV',
            url: '#'
        },
        {
            title: 'Other Factors',
            buttonTitle: 'SS_D.CSV',
            url: '#'
        },
        {
            title: 'All',
            buttonTitle: 'SS_D.CSV',
            url: '#'
        }
    ]
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_DATA_STEP:
            return {
                ...state,
                step: Math.min(6, state.step + 1)
            };
        case PREV_DATA_STEP:
            return {
                ...state,
                step: Math.max(0, state.step - 1)
            };
        case ENABLE_DOWNLOADS:
            return {
                ...state,
                enableDownloads: action.payload
            };
        default:
            return state;
    }
};
