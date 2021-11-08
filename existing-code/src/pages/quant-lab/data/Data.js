import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadDashboardPageSuccess } from "../../../store/quant-nav/actions";
import { nextDataStep, prevDataStep, toggleDownloads } from '../../../store/data/actions';
import thumb from "../../../assets/images/icons/data.svg";
import bannerStart from '../../../assets/images/data/banner-start.jpg';
import bannerStep from '../../../assets/images/data/banner-step.jpg';
import DataBanner from "../../../components/data-banner/DataBanner";
import DataDownloads from "../../../components/data-downloads/DataDownloads";
import DataStart from "../../../components/data-steps/DataStart";
import DataStep1 from "../../../components/data-steps/DataStep1";
import DataStep2 from "../../../components/data-steps/DataStep2";
import DataStep3 from "../../../components/data-steps/DataStep3";
import DataStep4 from "../../../components/data-steps/DataStep4";
import DataStep5 from "../../../components/data-steps/DataStep5";
import DataStep6 from "../../../components/data-steps/DataStep6";

class Data extends Component {

    state = {
        icon: thumb,
        title: 'Data',
        nav: [1, 2, 3, 4, 5, 6]
    };

    componentDidMount() {
        const { loadDashboardPageSuccess } = this.props;
        loadDashboardPageSuccess(this.state);
    }

    handleSwitchStep = (step) => {
        switch (step) {
            case 0:
                return <DataStart />;
            case 1:
                return <DataStep1 />;
            case 2:
                return <DataStep2 />;
            case 3:
                return <DataStep3 />;
            case 4:
                return <DataStep4 />;
            case 5:
                return <DataStep5 />;
            case 6:
                return <DataStep6 />;
            default:
                return <DataStart />;
        }
    };

    handleDetectEventButton = (nextDataStep,  step) => {
        const { toggleDownloads } = this.props;
        if(step >= 6){
            return (
                <button className="btn control bg" onClick={() => toggleDownloads(true)}>
                    <span className="btn-title">Submit</span>
                    <svg width="6" height="10" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 8.5488L3.36124 5.18022L0 1.81165L1.03479 0.776855L5.43816 5.18022L1.03479 9.58359L0 8.5488Z" />
                    </svg>
                </button>
            )
        }
        return (
            <button className="btn control" onClick={nextDataStep}>
                <span className="btn-title">Next</span>
                <svg width="6" height="10" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8.5488L3.36124 5.18022L0 1.81165L1.03479 0.776855L5.43816 5.18022L1.03479 9.58359L0 8.5488Z" />
                </svg>
            </button>
        )
    };

    render() {
        const { nextDataStep, prevDataStep, step } = this.props;
        const { nav } = this.state;
        const disabledForStart = Boolean(step) ? '' : 'disabled';
        return(
            <div className="data">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="data-view" style={{backgroundImage: `url(${step === 0 ? bannerStart : bannerStep})`}}>
                            <div className={`data-view-nav ${disabledForStart}`}>
                                {
                                    nav.map((num, key) => {
                                        return (
                                            <span className={`num semi-bold ${num === step ? 'active' : ''}`} key={key}>
                                                <span className="num-title">{num}</span>
                                            </span>
                                        )
                                    })
                                }
                            </div>
                            <div className={`data-view-control ${disabledForStart}`}>
                                <button className="btn control" onClick={prevDataStep}>
                                    <svg width="6" height="10" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.66797 1.81156L2.30673 5.18013L5.66797 8.54871L4.63318 9.5835L0.229813 5.18013L4.63318 0.776765L5.66797 1.81156Z" />
                                    </svg>
                                    <span className="btn-title">Back</span>
                                </button>
                                {this.handleDetectEventButton(nextDataStep, step)}
                            </div>
                            <div className="data-view-content">
                                {this.handleSwitchStep(step)}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <DataDownloads />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <DataBanner />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ dataReducer }) => {
    return dataReducer;
};

const mapDispatchToProps = {
    loadDashboardPageSuccess,
    nextDataStep,
    prevDataStep,
    toggleDownloads
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);
