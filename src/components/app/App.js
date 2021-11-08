import React, {useState} from "react";
import {BrowserRouter as Router, Switch, Route,withRouter} from "react-router-dom";
import Logo from "../logo/Logo";
import LeftNav from "../leftNav/LeftNav";
import LeftNavMobile from "../leftNavMobile/LeftNavMobile";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Performance from "../../pages/performance/Performance";
import ScientificMethod from "../../pages/scientific-method/ScientificMethod";
import Resources from "../../pages/resources/Resources";
import QuantLab from "../../pages/quant-lab/QuantLab";
import Forecast from "../../pages/forecast/Forecast";
import Faq from "../../pages/faq/Faq";
import ScrollToTop from "../scroll-to-top/ScrollToTop";
import PageNotFound from "../../pages/404/404";
import Research from "../../pages/research/Research";
import PDF from "../../pages/pdf/PDF";
import LiteratureReview from "../../pages/literature-review/LiteratureReview";
import ContactOld from "../../pages/contact/Contact";
import Feedback from '../../pages/contact/feedback/Feedback';
import Modal from "../modal/Modal";
import ModalData from "../modalData/ModalData";
import ModalPublication from "../modalPublication/ModalPublication";
import BackTest from "../../pages/back-test/BackTest";
import Footer from "../footer/Footer";
import Publication from "../../pages/publication/Publication";
import Summary from "../../pages/summary/Summary";
import VolatilityFactors from "../../pages/volatility-factors/VolatilityFactors";
import MacroFactors from "../../pages/macro-factors/MacroFactors";
import MicroFactors from "../../pages/micro-factors/MicroFactors";
import WhoAreWe from "../../pages/who-are-we/WhoAreWe";
import Data from "../../pages/data/Data";
import Accuracy from "../../pages/accuracy/Accuracy";
import AlternativeData from "../../pages/alternativeData/AlternativeData";
import AlternativeFactors from "../../pages/alternativeFactors/AlternativeFactors";
import GoverningEquations from "../../pages/governingEquations/GoverningEquations";
import SubstitutionRates from "../../pages/substitution-rates/SubstitutionRates";
import Profile from "../../pages/profile/Profile";
import PopupForm from "../../pages/login/PopupForm";
import Privacy from "../../pages/privacy/Privacy";
import Terms from "../../pages/terms/Terms";
import Disclaimer from "../../pages/disclaimer/Disclaimer";
import Cookies from "../../components/cookies/Cookies";
import {ReactSVG} from "react-svg";
import burger from "Images/icons/burger.svg";
import {closeModal, openModal} from "Store/modal/actions";
import {connect} from "react-redux";
import Amplify from "aws-amplify";
import Header from "Components/header/header";
import Subscription from "../../pages/subscription/Subscription";
import Article from "../../pages/article/Article";
import ArticleOne from "../../pages/articlesList/ArticleOne";
import ArticleTwo from "../../pages/articlesList/ArticleTwo";
import ArticleThree from "../../pages/articlesList/ArticleThree";
import ArticleFour from "../../pages/articlesList/ArticleFour";
import ArticleFive from "../../pages/articlesList/ArticleFive";
import ArticleSix from "../../pages/articlesList/ArticleSix";
import ArticleSeven from "../../pages/articlesList/ArticleSeven";
import ArticleEight from "../../pages/articlesList/ArticleEight";
import ArticleNine from "../../pages/articlesList/ArticleNine";
import ArticleTen from "../../pages/articlesList/ArticleTen";
import ArticleEleven from "../../pages/articlesList/ArticleEleven";
import ArticleTwelve from "../../pages/articlesList/ArticleTwelve";
import ArticleThirteen from "../../pages/articlesList/ArticleThirteen";
import ArticleFourteen from "../../pages/articlesList/ArticleFourteen";
import ArticleFifteen from "../../pages/articlesList/ArticleFifteen";
import ArticleSeventeen from "../../pages/articlesList/ArticleSeventeen";
import ArticleSixteen from "../../pages/articlesList/ArticleSixteen";
import ArticleEighteen from "../../pages/articlesList/ArticleEighteen";
import ArticleNineteen from "../../pages/articlesList/ArticleNineteen";
import Discord from "../../pages/discord/Discord";
import clsx from 'clsx';

import { COGNITO } from "../../config";
import logo from './../../assets/images/zerOtheorem_logo.svg';
import './App.css';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core/styles';
import Main from './Main';
//import Performance from './../../routes/Performance';
//import Investor from './../../routes/Investor';
import theme from './theme/theme';
import Grid from '@material-ui/core/Grid';
// import Grid from './../components/common/Grid';

import AppBar from './AppBar';
import AppBarOptions from './AppBar.config'
import useStyles from './../../styles/main.styles';

Amplify.configure({
    aws_cognito_region: COGNITO.REGION,
    aws_user_pools_id: COGNITO.USER_POOL_ID,
    aws_user_pools_web_client_id: COGNITO.APP_CLIENT_ID,
  });

const App = (props) => {
    const [overlay, setOverlay] = useState(false);
    const [menuBig, setMenuBig] = useState(false);
    const classes = useStyles();
    return (
        <Box className="App">
      <Grid item xs={12}
        className={classes.spacingBottom40, classes.gridPaddingLeft40}>
        <AppBar
            logo={logo}
            options={AppBarOptions}
        />
     </Grid>
        <Router>
            <Switch>
            <Route exact path="/">
                <Main/>
            </Route>
            <Route exact path="/home">
                <Main/>
            </Route>
            <Route exact path="/about">
                <About/>
            </Route>
            <Route exact path="/contact">
                <Feedback/>
            </Route>
            <Route exact path="/research">
                <Research/>
            </Route>
            <Route exact path="/investor">
                <PopupForm/>
            </Route>
            <Route exact path="/performance">
                <Performance/>
            </Route>
          </Switch>
        </Router>
     { props.history.location.pathname !== "/investor"?  <Grid item xs={12} className={clsx(classes.gridPaddingLeft40)}>
            <AppBar
                logo={logo}
                options={AppBarOptions}
            />
        </Grid>:null}
    </Box>
    )
    return (
        <div id="wrapper">
            <Grid item xs={12}
                className={classes.spacingBottom40, classes.gridPaddingLeft40}>
                <AppBar
                    logo={logo}
                    options={AppBarOptions}
                />
            </Grid>
            <Router>
                {screen.width > 540 ? <div/> : <Logo menuBig={false}/>}        
                            {/* <div style={{height: 120}}/> */}
                            <Switch>
                                <Route exact path="/">
                                    <Main/>
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
                        
                {/*
                <Footer menuBig={menuBig}/>
                <Cookies/>
                <Modal/>
                <ModalData/>
                <ModalPublication/>
                */}
            </Router>
        </div>
    );
};

const mapStateToProps = ({modalReducer}) => {
    return modalReducer;
};

export default withRouter(connect(mapStateToProps, null)(App));
