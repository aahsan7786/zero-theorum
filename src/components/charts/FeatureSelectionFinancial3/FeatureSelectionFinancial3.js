import React, {Component, Fragment, useEffect, useState} from 'react';
import WithApiService from '../../hoc/WithApiService';
import Plot from "react-plotly.js";
import {fetch3D3Success, fetch3D3Error} from '../../../store/charts/3d3/actions';
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import {connect} from "react-redux";
import {graph3d1Reducer} from "Store/charts/3d1/reducer";
import Loader from "Components/loader/loader";
import InfoModalGraph from "Components/infoModalGraph/infoModalGraph";
import {ReactSVG} from "react-svg";
import information from "Images/icons/information.svg";

const FeatureSelectionFinancial3 = (props) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const {api, fetch3D3Success, fetch3D3Error, data} = props;
        if (isEmpty(data)) {
            api.get3D3()
                .then(probData => fetch3D3Success(probData))
                .catch(error => fetch3D3Error(error));
        }
    }, [])

    const {isLoading, data: {x, y, z, price}} = props;

    if (isLoading) {
        return <Loader/>
    }

    return (
        <Fragment>
            <InfoModalGraph show={show} onPress={() => setShow(!show)}
                            text={'ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis dictum sem, in vestibulum nisl fermentum vel. Cras malesuada pharetra tortor, at imperdiet nisl bibendum varius.'}/>
            <ReactSVG
                // className={["", scroll ? "scroll" : "", scrollTwo ? "scrollTwo" : ""].join(" ")}
                renumerateIRIElements={false}
                src={information}
                wrapper="div"
                onClick={() => {
                    setShow(!show)
                }}
                style={{zIndex: 2, width: '1.4rem', fill: '#ccc', position: 'absolute', right: '2rem'}}
            />
            <Plot
                data={[
                    {
                        mode: 'markers',
                        type: 'scatter3d',
                        name: 'PC3',
                        x, y, z,
                        marker: {
                            color: price,
                            size: 3,
                            cauto: true,
                            showscale: true,
                            colorscale: [],
                        }
                    },
                ]}
                layout={viewSettingsLayout('Social Sentiment Factors', false, {
                    l: 0,
                    r: 0,
                    t: 105,
                    b: 0
                }, '', '', 0, '', '', '', '', '', '', '', 'Principal Component 1', 'Principal Component 2', 'Principal Component 3').layout}
                useResizeHandler={viewSettingsLayout().useResizeHandler}
                style={viewSettingsLayout().style}
                config={viewSettingsConfig().config}
            />
        </Fragment>
    )

}

const mapStateToProps = ({graph3d3Reducer}) => {
    return graph3d3Reducer;
};

const mapDispatchToProps = {
    fetch3D3Success,
    fetch3D3Error
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(FeatureSelectionFinancial3));

