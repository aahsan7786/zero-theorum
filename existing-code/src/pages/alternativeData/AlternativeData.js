import React, {Fragment, lazy, Suspense, useEffect, useState} from 'react';
import './alternativeData.scss';
import Loader from "Components/loader/loader";
import alternative1 from '../../assets/images/alternative1.png';
import alternative2 from '../../assets/images/alternative2.png';
import alternative3 from '../../assets/images/alternative3.png';
import alternative4 from '../../assets/images/alternative4.png';
import circleBack from '../../assets/images/circleBack.png';

const AlternativeData = () => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 3000);
    }, []);

    return (
        <>
            {loader ? <div style={{height: 300}}>
                <Loader/>
            </div> : <section className="section hero inner-page alternative">
                <div className="container ">
                    <div className="row">
                        <div className="col-12 h5 d-flex justify-content-center mb-5">
                            ACCESS OUR ALTERNATIVE PRICING MODELS AND PROCESSED FEATURES.
                        </div>
                        <div className="col-12 h5 d-flex justify-content-center mb-5">
                            “SPECIFICALLY MADE FOR THE RESEARCHER, BLOCKCHAIN SUPPLIER & INFRASTRUCTURE PROVIDER”
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            Seats Left: XX <br/><br/>
                            Highest Bid: $XX<br/><br/>
                            Lowest Bid: $XX<br/><br/>
                            Last Bid: $XX<br/><br/>
                            Auction Expiration XX.XX.XX<br/><br/>
                        </div>
                        <div className="col-12 text-center mb-5">
                            DATA SUBSCRIPTION IS BASED ON A NFT (Non-Fungible Token) OFFERING
                            <br/><br/>EACH NFT HAS A SHORT ACCESS LIFETIME FOR WHICH SEATS ARE AUCTIONED ON THE
                            MARKETPLACE.
                            ACCESS CREDENTIAL CAN BE FOUND IN THE UNLOCKABLE CONTENT
                        </div>
                        <div className="col-9">
                            <div className="h4">
                                OUR ARSENAL OF ACADEMIC PRICING MODELS
                            </div>
                            <br/><br/>1. ECONOMETRIC MODEL - Vector error correction forecast based on
                            <br/><br/>2. MACHINE LEARNING MODEL - Optimized Random Forrest model based on
                            <br/><br/>3. DEEP LEARNING MODEL – Deep Auto regressive Learner based on
                            <br/><br/> 4. SENTIMENT MODEL – Timeseries Econometric Model based on
                            <br/><br/>5. ENTROPY MODEL – Timeseries Econometric Model based on
                            <br/><br/> 6. STACKED MODEL – Customised Ensemble based on Models 1-6

                            <div className="mt-5 mr-5">
                                Note: Zero Theorem mission is to discover the governing equations of Bitcoin, however
                                the
                                Zero Theorem itself is an evolving proof and hence is not
                                part of the current data subscription.
                            </div>
                        </div>
                        <div className="col-3">
                            <img src={alternative1} alt=""/>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-9 h4 my-5">
                            EVERY MODEL COMES WITH A FULL BACKTEST REPOSITORY
                        </div>
                        <div className="col-3">
                            <img src={alternative1} alt=""/>
                        </div>
                        <div className="col-9">
                            <div className="h5 mb-3">
                                BACKTEST FUNCTIONALITY INCLUDES THE ABILITY TO ALTER THE FOLLOWING PARAMETERS:
                            </div>
                            <br/><br/>- Asset Allocation Percentage
                            <br/><br/>- Stop Loss Threshold
                            <br/><br/>- Take Profit Threshold
                            <br/><br/>- Portfolio Compound Option
                            <br/><br/>- Trade Duration

                            <div className="h5 my-3">
                                <br/><br/>EVERY BACKTEST RETURNS THE FOLLOWING PERFORMANCE METRICS:
                            </div>

                            <br/><br/>- CAGR (%)
                            <br/><br/>- Daily/Annual Sharpe Ratio
                            <br/><br/>- Daily/Annual Sortino Ratio
                            <br/><br/>- Mean/Max Lake Ratio
                            <br/><br/>- Abs Gain to Pain Ratio
                            <br/><br/>- Return Fit/Return Std/ Return Decay
                            <br/><br/>- Optimal Kelly Allocation/Optimal Kelly Leverage
                        </div>
                        <div className="col-12 my-5"/>
                        <div className="col-7">
                            <div className="mb-3">
                                FULL DOCUMENTATION PROVIDED IN JUPYTER
                                <br/>NOTEBOOK WITH DETAILED CODE EXAMPLES.
                            </div>


                            <br/>1. DOWNLOAD NOTEBOOK
                            <br/>2. GET LIMITED ACCESS NFT AND UNLOCK CONTENT
                            <br/>3. REPLACE API KEY IN JUPYTER NOTEBOOK
                            <br/>4. EXPLORE DATABASE AND RESEARCH
                            <br/>5. CUSTOMIZE FEEDS TO YOUR OWN APPLICATIONS

                            <div className="col-12 d-flex align-items-center mt-5  justify-content-between">
                                DOWNLOAD NOTEBOOK
                                <img src={alternative2} alt="" width={150}/>
                            </div>
                            <div className="col-12 d-flex align-items-center justify-content-between">
                                DOWNLOAD PDF
                                <img src={alternative2} alt="" width={150}/>
                            </div>
                        </div>
                        <div className="col-5">
                            <img src={alternative4} alt=""/>
                            <div className="col-12 d-flex align-items-center justify-content-between mt-3">
                                GO TO MARKETPLACE
                                <img src={alternative3} alt="" width={150}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>}
        </>
    )

};

export default AlternativeData;
