import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Logo from "../../components/logo/Logo";
import LeftNav from "../../components/leftNav/LeftNav";
import LeftNavMobile from "../../components/leftNavMobile/LeftNavMobile";
import Home from "../home/Home";
import About from "../about/About";
import ScientificMethod from "../scientific-method/ScientificMethod";
import Resources from "../resources/Resources";
import QuantLab from "../quant-lab/QuantLab";
import Forecast from "../forecast/Forecast";
import Faq from "../faq/Faq";
import ScrollToTop from "../../components/scroll-to-top/ScrollToTop";
import PageNotFound from "../404/404";
import Research from "../research/Research";
import PDF from "../pdf/PDF";
import LiteratureReview from "../literature-review/LiteratureReview";
import ContactOld from "../contact/Contact";
import Feedback from '../contact/feedback/Feedback';
import Modal from "../../components/modal/Modal";
import ModalData from "../../components/modalData/ModalData";
import ModalPublication from "../../components/modalPublication/ModalPublication";
import BackTest from "../back-test/BackTest";
import Footer from "../../components/footer/Footer";
import Publication from "../publication/Publication";
import Summary from "../summary/Summary";
import VolatilityFactors from "../volatility-factors/VolatilityFactors";
import MacroFactors from "../macro-factors/MacroFactors";
import MicroFactors from "../micro-factors/MicroFactors";
import WhoAreWe from "../who-are-we/WhoAreWe";
import Data from "../data/Data";
import Accuracy from "../accuracy/Accuracy";
import AlternativeData from "../alternativeData/AlternativeData";
import AlternativeFactors from "../alternativeFactors/AlternativeFactors";
import GoverningEquations from "../governingEquations/GoverningEquations";
import SubstitutionRates from "../substitution-rates/SubstitutionRates";
import Profile from "../profile/Profile";
import PopupForm from "../login/PopupForm";
import Privacy from "../privacy/Privacy";
import Terms from "../terms/Terms";
import Disclaimer from "../disclaimer/Disclaimer";
import Cookies from "../../components/cookies/Cookies";
import {ReactSVG} from "react-svg";
import burger from "Images/icons/burger.svg";
import {closeModal, openModal} from "Store/modal/actions";
import {connect} from "react-redux";
import Amplify from "aws-amplify";
import Header from "Components/header/header";
import Subscription from "../subscription/Subscription";
import Article from "../article/Article";
import ArticleOne from "../articlesList/ArticleOne";
import ArticleTwo from "../articlesList/ArticleTwo";
import ArticleThree from "../articlesList/ArticleThree";
import ArticleFour from "../articlesList/ArticleFour";
import ArticleFive from "../articlesList/ArticleFive";
import ArticleSix from "../articlesList/ArticleSix";
import ArticleSeven from "../articlesList/ArticleSeven";
import ArticleEight from "../articlesList/ArticleEight";
import ArticleNine from "../articlesList/ArticleNine";
import ArticleTen from "../articlesList/ArticleTen";
import ArticleEleven from "../articlesList/ArticleEleven";
import ArticleTwelve from "../articlesList/ArticleTwelve";
import ArticleThirteen from "../articlesList/ArticleThirteen";
import ArticleFourteen from "../articlesList/ArticleFourteen";
import ArticleFifteen from "../articlesList/ArticleFifteen";
import ArticleSeventeen from "../articlesList/ArticleSeventeen";
import ArticleSixteen from "../articlesList/ArticleSixteen";
import ArticleEighteen from "../articlesList/ArticleEighteen";
import ArticleNineteen from "../articlesList/ArticleNineteen";
import Discord from "../discord/Discord";

import { COGNITO } from "../../config";

Amplify.configure({
    aws_cognito_region: COGNITO.REGION,
    aws_user_pools_id: COGNITO.USER_POOL_ID,
    aws_user_pools_web_client_id: COGNITO.APP_CLIENT_ID,
  });

const App = () => {
    const [overlay, setOverlay] = useState(false);
    const [menuBig, setMenuBig] = useState(false);
return (
    <div >
    <Header/>
    <Forecast/>
    </div>
)
    return (
        <div id="wrapper">
            <Router>
                <ScrollToTop/>
                <div className="burger-menu">
                    <ReactSVG
                        // className={["", scroll ? "scroll" : "", scrollTwo ? "scrollTwo" : ""].join(" ")}
                        renumerateIRIElements={false}
                        src={burger}
                        wrapper="div"
                        onClick={() => {
                            setOverlay(!overlay);
                        }}
                        style={{width: "1rem", fill: "#f3de1a"}}
                    />
                </div>
                <div className={[overlay ? "overlay" : "overlay-hidden"].join(" ")}>
                    <LeftNavMobile setOverlay={() => setOverlay(!overlay)}/>
                </div>
                <div className="paddingFixedLogo"/>
                {screen.width > 540 ? <div/> : <Logo menuBig={false}/>}
                <div
                    className={["col-12 mb-3", overlay ? "overlay-blur" : ""].join(" ")}
                >
                    <div className="row">
                        {screen.width > 540 && (
                            <div
                                style={menuBig ? {} : {width: "5rem"}}
                                className={`${
                                    menuBig ? "col-auto" : "col-auto"
                                } d-flex justify-content-center`}
                                onMouseOver={() => setMenuBig(true)}
                                onMouseOut={() => setMenuBig(false)}
                            >
                                <LeftNav menuBig={menuBig} setMenuBig={setMenuBig}/>
                            </div>
                        )}
                        <div
                            className={[
                                screen.width > 540
                                    ? menuBig
                                    ? "col-11 offset-lg-1"
                                    : "col-11 offset-lg-1"
                                    : "col-12",
                            ].join(" ")}
                        >
                            <Header/>
                            {/* <div style={{height: 120}}/> */}
                            <Switch>
                                <Route exact path="/">
                                    <Forecast/>
                                </Route>
                                {/*<Route path="/home">*/}
                                {/*    <Home/>*/}
                                {/*    <Footer />*/}
                                {/*</Route>*/}
                                <Route path="/about">
                                    <About/>
                                </Route>
                                <Route path="/back-test">
                                    <BackTest/>
                                </Route>
                                <Route path="/profile">
                                    <Profile/>
                                </Route>
                                <Route path="/login">
                                    <PopupForm/>
                                </Route>
                                <Route path="/alternative-data">
                                    <AlternativeData/>
                                </Route>
                                <Route path="/summary">
                                    <Summary/>
                                </Route>
                                <Route path="/volatility-factors">
                                    <VolatilityFactors/>
                                </Route>
                                <Route path="/macro-factors">
                                    <MacroFactors/>
                                </Route>
                                <Route path="/micro-factors">
                                    <MicroFactors/>
                                </Route>
                                <Route path="/who-are-we">
                                    <WhoAreWe/>
                                </Route>
                                <Route path="/governing-equations">
                                    <GoverningEquations/>
                                </Route>
                                <Route path="/substitution-rates">
                                    <SubstitutionRates/>
                                </Route>
                                <Route path="/subscription">
                                    <Subscription/>
                                </Route>
                                <Route path="/quant-lab">
                                    <QuantLab/>
                                </Route>
                                <Route path="/faq">
                                    <Faq/>
                                </Route>
                                <Route path="/contact">
                                    <Feedback/>
                                </Route>
                                <Route path="/accuracy">
                                    <Accuracy/>
                                </Route>
                                <Route path="/discord">
                                    <Discord/>
                                </Route>
                                <Route path="/scientific-method">
                                    <ScientificMethod/>
                                </Route>
                                <Route path="/publication">
                                    {/*<Publication/>*/}
                                    <PDF/>
                                </Route>
                                <Route path="/pdf">
                                    <PDF/>
                                </Route>
                                <Route path="/privacy">
                                    <Privacy/>
                                </Route>
                                <Route path="/terms">
                                    <Terms/>
                                </Route>
                                <Route path="/data">
                                    <Data/>
                                </Route>
                                <Route path="/alternative-factors">
                                    <AlternativeFactors/>
                                </Route>
                                <Route path="/disclaimer">
                                    <Disclaimer/>
                                </Route>
                                <Switch>
                                    <Route exact path="/research" component={Research}/>
                                    <Route exact path="/research/1" component={ArticleOne}/>
                                    <Route exact path="/research/2" component={ArticleTwo}/>
                                    <Route exact path="/research/3" component={ArticleThree}/>
                                    <Route exact path="/research/4" component={ArticleFour}/>
                                    <Route exact path="/research/5" component={ArticleFive}/>
                                    <Route exact path="/research/6" component={ArticleSix}/>
                                    <Route exact path="/research/7" component={ArticleSeven}/>
                                    <Route exact path="/research/8" component={ArticleEight}/>
                                    <Route exact path="/research/9" component={ArticleNine}/>
                                    <Route exact path="/research/10" component={ArticleTen}/>
                                    <Route exact path="/research/11" component={ArticleEleven}/>
                                    <Route exact path="/research/12" component={ArticleTwelve}/>
                                    <Route
                                        exact
                                        path="/research/13"
                                        component={ArticleThirteen}
                                    />
                                    <Route
                                        exact
                                        path="/research/14"
                                        component={ArticleFourteen}
                                    />
                                    <Route exact path="/research/15" component={ArticleFifteen}/>
                                    <Route exact path="/research/16" component={ArticleSixteen}/>
                                    <Route
                                        exact
                                        path="/research/17"
                                        component={ArticleSeventeen}
                                    />
                                    <Route
                                        exact
                                        path="/research/18"
                                        component={ArticleEighteen}
                                    />
                                    <Route
                                        exact
                                        path="/research/19"
                                        component={ArticleNineteen}
                                    />
                                </Switch>
                                {/*<Route path="/research">*/}
                                {/*    <Research/>*/}
                                {/*</Route>*/}
                                <Route exact path="*">
                                    <PageNotFound/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
                <Footer menuBig={menuBig}/>
                <Cookies/>
                <Modal/>
                <ModalData/>
                <ModalPublication/>
            </Router>
        </div>
    );
};

const mapStateToProps = ({modalReducer}) => {
    return modalReducer;
};

export default connect(mapStateToProps, null)(App);
