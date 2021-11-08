import React, { Component, Fragment } from 'react';
import WithApiService from '../../hoc/WithApiService';
import Plot from "react-plotly.js";
import { fetch3D1Success, fetch3D1Error } from '../../../store/charts/3d1/actions';
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import {connect} from "react-redux";
import {graph3d1Reducer} from "Store/charts/3d1/reducer";
import Loader from "Components/loader/loader";

class FeatureSelectionFinancial1 extends Component {

    componentDidMount() {
        const { api, fetch3D1Success, fetch3D1Error, data } = this.props;
        if(isEmpty(data)) {
            api.get3D1()
                .then(probData => fetch3D1Success(probData))
                .catch(error => fetch3D1Error(error));
        }
    }

    state = {
        isLoading: true,
        data: [],
        captions: []
    };

    render() {

        const { isLoading, data: {x, y, z, price} } = this.props;

        if(isLoading) {
            return <Loader />
        }

        return(
            <Fragment>
                <Plot
                    data={[
                        {
                            mode: 'markers',
                            type: 'scatter3d',
                            name: 'PC1',
                            x, y, z,
                            marker: {
                                color: price,
                                size: 3,
                                cauto: true,
                                showscale: true,
                                colorbar: {
                                    // x: 0
                                },
                            },
                        },
                    ]}
                    layout={viewSettingsLayout('Financial Factors', false, {l: 0, r: 0, t: 80, b: 0}, '', '', 0, '', '', '', '', '', '', '', 'Principal Component 1', 'Principal Component 2', 'Principal Component 3').layout}
                    useResizeHandler={viewSettingsLayout().useResizeHandler}
                    style={viewSettingsLayout().style}
                    config={viewSettingsConfig().config}
                />
                {/*<div className="dashboard-box-rotate">Click To Rotate</div>*/}
                {/*<div className="dashboard-box-detail">*/}
                {/*    <span className="axis-detail">X: <span className="axis-detail-value">xX%</span></span>*/}
                {/*    <span className="axis-detail">Y: <span className="axis-detail-value">xX%</span></span>*/}
                {/*    <span className="axis-detail">Z: <span className="axis-detail-value">xX%</span></span>*/}
                {/*</div>*/}
                {/*<DateFilter />*/}
            </Fragment>
        )

    }

}


const mapStateToProps = ({ graph3d1Reducer }) => {
    return graph3d1Reducer;
};

const mapDispatchToProps = {
    fetch3D1Success,
    fetch3D1Error
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(FeatureSelectionFinancial1));

