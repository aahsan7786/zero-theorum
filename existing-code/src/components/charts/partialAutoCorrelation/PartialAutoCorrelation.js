import React, {useEffect, Fragment} from 'react';
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import DateFilter from "../../date-filter/DateFilter";
import {isEmpty} from "Components/globalFunctions/globalFunctions";
import {fetchData} from "Components/globalFunctions/fetchData";
import LoadingIndicator from "Components/loadingIndicator/LoadingIndicator";
import {fetchPartialAutoCorrelationSuccess, fetchPartialAutoCorrelationError} from "Store/charts/partialAutoCorrelation/actions";
import WithApiService from "Components/hoc/WithApiService";
import {connect} from "react-redux";
import Loader from "Components/loader/loader";

const PartialAutoCorrelation = (props) => {

    useEffect(() => {
        const {api, fetchPartialAutoCorrelationSuccess, fetchPartialAutoCorrelationError, data} = props;
        if (isEmpty(data)) {
            fetchData(api.getPartialAutoCorrelation, fetchPartialAutoCorrelationSuccess, fetchPartialAutoCorrelationError);
        }
    }, []);

    const {isLoading, data: {corr, lags, confint, confint_1, confint_2}} = props;

    if (isLoading) {
        return <Loader/>
    }

    return (
        <Fragment>
            <Plot
                data={[
                    {
                        x: [0, lags[lags.length-1]],
                        y: [0, 0],
                        mode: 'lines',
                        line: {
                            dash: 'solid',
                            width: 2,
                            color: 'rgba(255, 105, 105,0.6)'
                        }
                    },
                    {
                        y: corr,
                        type: 'bar',
                        marker: {
                            color: "rgba(255, 105, 105,0.9)",
                        }
                    },
                ]}
                layout={viewSettingsLayout('Partial Auto Correlation', true, {
                    l: 40,
                    r: 30,
                    t: 95,
                    b: 30
                }, '', '', 0.5, 'Time', '', '', '', true, true).layout}
                useResizeHandler={viewSettingsLayout().useResizeHandler}
                style={viewSettingsLayout().style}
                config={viewSettingsConfig(true).config}
            />
        </Fragment>
    )

};


const mapStateToProps = ({partialAutoCorrelationReducer}) => {
    return partialAutoCorrelationReducer;
};

const mapDispatchToProps = {
    fetchPartialAutoCorrelationSuccess,
    fetchPartialAutoCorrelationError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(PartialAutoCorrelation));
