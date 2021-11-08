import forecast from '../../assets/images/icons/forecast.svg';
import forecastActive from '../../assets/images/icons/forecast-active.svg';
import baseline from '../../assets/images/icons/baseline-model.svg';
import baselineActive from '../../assets/images/icons/baseline-model-active.svg'
import stylized from '../../assets/images/icons/stylized-attributes.svg';
import stylizedActive from '../../assets/images/icons/stylized-attributes-active.svg'
import feature from '../../assets/images/icons/feature-exploration.svg';
import featureActive from '../../assets/images/icons/feature-exploration-active.svg'
import market from '../../assets/images/icons/market-metrics.svg';
import marketActive from '../../assets/images/icons/market-metrics-active.svg'
import global from '../../assets/images/icons/global-correlation.svg';
import globalActive from '../../assets/images/icons/global-correlation-active.svg'
import data from '../../assets/images/icons/data.svg';
import dataActive from '../../assets/images/icons/data-active.svg';
import {LOAD_DASHBOARD_PAGE_SUCCESS_FORECAST} from "../constants";
import volatility from "Images/icons/volatility.svg";

const initialState = {
    navData: [
        {
            title: 'Forecast',
            pathName: 'forecast',
            icon: forecast,
            iconActive: forecastActive
        },
        {
            title: 'Volatility-Factors',
            pathName: 'volatility-factors',
            icon: volatility,
            iconActive: volatility
        },
        {
            title: 'Macro-Factors',
            pathName: 'macro-factors',
            icon: stylized,
            iconActive: stylizedActive
        },
        {
            title: 'Micro-Factors',
            pathName: 'micro-factors',
            icon: feature,
            iconActive: featureActive
        },
    ],
    currentNavData: {
        icon: null,
        title: ''
    }
};

export const forecastReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOAD_DASHBOARD_PAGE_SUCCESS_FORECAST:
            return {
                ...state,
                currentNavData: action.payload
            };
        default:
            return state;
    }

};
