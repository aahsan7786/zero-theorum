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
import {LOAD_DASHBOARD_PAGE_SUCCESS} from "../constants";

const initialState = {
    navData: [
        {
            title: 'Forecast',
            pathName: 'zt-forecast',
            icon: forecast,
            iconActive: forecastActive
        },
        {
            title: 'Baseline Model',
            pathName: 'baseline-model',
            icon: baseline,
            iconActive: baselineActive
        },
        {
            title: 'Stylized Attributes',
            pathName: 'stylized-attributes',
            icon: stylized,
            iconActive: stylizedActive
        },
        {
            title: 'Feature Exploration',
            pathName: 'feature-exploration',
            icon: feature,
            iconActive: featureActive
        },
        {
            title: 'Market Metrics',
            pathName: 'market-metrics',
            icon: market,
            iconActive: marketActive
        },
        {
            title: 'Global Correlations',
            pathName: 'global-correlations',
            icon: global,
            iconActive: globalActive
        },
        {
            title: 'Data',
            pathName: 'data',
            icon: data,
            iconActive: dataActive
        }
    ],
    currentNavData: {
        icon: null,
        title: ''
    }
};

export const quantNavReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOAD_DASHBOARD_PAGE_SUCCESS:
            return {
                ...state,
                currentNavData: action.payload
            };
        default:
            return state;
    }

};
