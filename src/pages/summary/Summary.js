import React, { useEffect, useState, Fragment, lazy, Suspense } from "react";
import "./summary.scss";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import PopupFormSignUp from "../signup/SignUp";
import video from "../../assets/video/summary_big_size.mp4";
import zero_formula_video from "../../assets/video/Zero_Theorem_Animation.mp4";
// import MathJax from "mathjax3-react";
import MathJax from "react-mathjax-preview";
import tv from "Images/tv.png";
import full from "Images/summary/full_small.svg";
import { ReactSVG } from "react-svg";
import Loader from "Components/loader/loader";
import ourMission from "Images/our-mission.svg";
import icon1 from "Images/summary/DRL1.svg";
import aboutImg from "Images/about/about-img.jpg";
import link from "Images/icons/mail.svg";
import SlideWho from "Components/slideWho/SlideWho";
import whoAreWePhoto from "Images/whoAreWe/1.png";
import whoAreWePhoto2 from "Images/whoAreWe/2.png";
import whoAreWePhoto3 from "Images/whoAreWe/3.png";
import whoAreWePhoto5 from "Images/whoAreWe/5.png";
import whoAreWePhoto4 from "Images/whoAreWe/4.png";
import whoAreWePhoto6 from "Images/whoAreWe/6.png";
import circle from "Images/circleBack.png";
import office03 from "Images/office03.png";
import {setResourcesOpen} from "Store/resources/actions";
import {connect} from "react-redux";
// import icon1 from "../../../assets/images/icons/Zero-BIAS.svg";

const Summary = (props) => {
  const [scroll, setScroll] = useState(false);
  const [scrollTwo, setScrollTwo] = useState(false);
  const [more, setMore] = useState(false);
  const [onLoad, setOnLoad] = useState(false);
  const [onLoadTwo, setOnLoadTwo] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }

  useEffect(() => {}, [window.scrollY]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 500);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollTwo(window.scrollY > 700);
    });
  }, []);

  return (
    <section className="section hero inner-page">
      <div className="container summary">
        <div className="row">
          <div className="row align-content-start summary-section">
            <div className="col-lg-6 col-xs-12 d-flex flex-column">
              <div className="title-zero mb-5 yellow">
                What is Zero Theorem?
              </div>
              <div className="">
                The Zero Theorem is a new economic framework to establish
                forward valuation of Bitcoin and proof of work (PoW) digital
                assets. The underlying hypothesis is that in the short term any
                purchasing power (PP) is finite as monetary substance cannot be
                created instantaneously. Hence the <b>change</b> of such PP of
                individual instruments (currencies, equities, commodities,
                tangible, etc) in an asset universe must in{" "}
                <b>aggregate equate to zero,</b> maintaining a zero-sum game
                theoretical equilibrium.
                <br />
                <br />
                If the aggregate change of all asset PP must equate to zero (in
                the short term) then changes in value of PoW digital assets like
                Bitcoin, can only be occurring via a substitution phenomenon
                (α). α representing the rate in which value is being absorbed
                from alternative or inferior instruments. This intrinsically
                implies that α is driven by portfolio optimisations of multiple
                economic agents, where investor utility is being maximised via a
                range of financial and not financial attributes. Such attributes
                can be the explained the fact the PoW digital assets exhibit
                improved liquidity, faster mobility, higher transactional
                efficiency, and superior store of value.
                <br />
                <br />
                The Zero Theorem allows one to analytically solve the fair value
                pricing dilemma of PoW digital assets by 1. transposing the
                equation of exchange, 2. introducing mining work as means of
                economic output and 3. forecasting future α to determine the
                forward market size relative to the global asset universe
              </div>
              <Link to="/research" className="btn __border mt-5" onClick={() => props.setResourcesOpen(1)}>
                <span className="btn-title">Learn More</span>
              </Link>
            </div>
            <div className="col-lg-6 col-xs-12 tv d-flex justify-content-center align-items-center">
              <div className="height2rem" />
              <video
                className={`${onLoadTwo ? "is-visible" : ""}`}
                width="100%"
                height="100%"
                preload={"auto"}
                loop
                muted
                playsInline
                autoPlay
                onLoadedData={() => setOnLoadTwo(true)}
              >
                <source src={zero_formula_video} type="video/mp4" />
              </video>
              {/*<img className="" src={office03}/>*/}
              {/*<div className="tvImg upAnimation">*/}
              {/*    <div className="d-flex formula1 latex-block">*/}
              {/*        We start with the equation of exchange below:*/}
              {/*    </div>*/}
              {/*    <div className="formula2 latex-block">*/}
              {/*        <MathJax msDelayDisplay={2000} className="mathJax" math={'\\[\n' +*/}
              {/*        'P_{\\rm BTC} \\cdot Q_{\\rm BTC} = M_{\\rm BTC} \\cdot V_{\\rm BTC},\n' +*/}
              {/*        '\\]'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"formula3 latex-block"}>*/}
              {/*        Evidently, taking natural logarithm in both*/}
              {/*    </div>*/}
              {/*    <div className="d-flex formula4 latex-block">*/}
              {/*        sides of the previous equality, we derive*/}
              {/*    </div>*/}
              {/*    <div className={"formula5 latex-block"}>*/}
              {/*        <MathJax className="mathJax" math={'\\[\n' +*/}
              {/*        '\\ln P_{\\rm BTC} + \\ln Q_{\\rm BTC} = \\ln M_{\\rm BTC} + \\ln V_{\\rm BTC}.\n' +*/}
              {/*        '\\]'}/>*/}
              {/*    </div>*/}
              {/*    <div className="d-flex formula6 latex-block">*/}
              {/*        Differentiating both sides of this*/}
              {/*    </div>*/}
              {/*    <div className="d-flex row">*/}
              {/*        <div className={"d-flex formula7 latex-block"}>*/}
              {/*            expression with respect to*/}
              {/*            <div className="mx-2">*/}
              {/*                <MathJax className="mathJax" math={'$t$,'}/>*/}
              {/*            </div>*/}
              {/*            we obtain*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*    <div className={"formula8 latex-block"}>*/}
              {/*        <MathJax className="mathJax" math={'\n' +*/}
              {/*        '\\[\\begin{split}\n' +*/}
              {/*        '\\frac{\\partial}{\\partial t}\\left[\\ln P_{\\rm BTC} + \\ln Q_{\\rm BTC} - \\left(\\ln M_{\\rm BTC} + \\ln V_{\\rm BTC}\\right)\\right] = 0.\n' +*/}
              {/*        '\\end{split}\\]'}/>*/}
              {/*    </div>*/}
              {/*</div>*/}
              {/*<div className="tvImg upAnimation2">*/}
              {/*    <div className={"formula9 latex-block"}>*/}
              {/*        or*/}
              {/*    </div>*/}
              {/*    <div className={"formula10 latex-block"}>*/}
              {/*        <MathJax className="mathJax" math={'\\[\\begin{split}\n' +*/}
              {/*        '\\frac{\\partial \\ln P_{\\rm BTC}}{\\partial t} &= \\frac{\\partial}{\\partial t}\\left[\\ln M_{\\rm BTC} + \\ln V_{\\rm BTC} - \\ln Q_{\\rm BTC}\\right].\n' +*/}
              {/*        '\\end{split}\\]'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"formula11 latex-block"}>*/}
              {/*        or the sake of simplicity, we denote*/}
              {/*    </div>*/}
              {/*    <div className={"formula12 latex-block"}>*/}
              {/*        <MathJax className="mathJax" math={'\\[\n' +*/}
              {/*        '\\frac{\\partial \\ln P_{\\rm BTC}}{\\partial t} = \\Pi_{\\rm BTC}.\n' +*/}
              {/*        '\\]'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"formula13 latex-block"}>*/}
              {/*        According to zero sum game theoretical*/}
              {/*    </div>*/}
              {/*    <div className={"formula14 latex-block"}>*/}
              {/*        equilibrium, one can show that in the*/}
              {/*    </div>*/}
              {/*    <div className={"d-flex formula15 latex-block"}>*/}
              {/*        <div>*/}
              {/*            <MathJax className="mathJax" math={'$n$'}/>*/}
              {/*        </div>*/}
              {/*        -dimensional space with basis functions*/}
              {/*    </div>*/}
              {/*    <div className={"formula16 latex-block"}>*/}
              {/*        <MathJax className="mathJax" math={'$M_1$, $M_2$, $\\dots$, $M_n$,'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"d-flex formula17 latex-block"}>*/}
              {/*        the new asset*/}
              {/*        <div className="mx-2">*/}
              {/*            <MathJax className="mathJax" math={'$M_{\\rm BTC}$'}/>*/}
              {/*        </div>*/}
              {/*        can be represented as*/}
              {/*    </div>*/}
              {/*</div>*/}
              {/*<div className="tvImg upAnimation3">*/}
              {/*    <div className={"formula18 latex-block"}>*/}
              {/*        <MathJax className="mathJax" math={'\\[\n' +*/}
              {/*        'M_{\\rm BTC} = \\sum_{k = 1}^n \\omega_k \\cdot M_k\n' +*/}
              {/*        '\\]'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"d-flex formula19 latex-block"}>*/}
              {/*        with*/}
              {/*        <div className="mx-2">*/}
              {/*            <MathJax className="mathJax" math={'$\\omega_k \\neq -1$'}/>*/}
              {/*        </div>*/}
              {/*        which is satisfied in*/}
              {/*    </div>*/}
              {/*    <div className={"d-flex formula20 latex-block"}>*/}
              {/*        in our case since all*/}
              {/*        <div className="mx-2">*/}
              {/*            <MathJax className="mathJax" math={'$\\omega_k > 0$.'}/>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*    <div className={"formula21 latex-block"}>*/}
              {/*        We now need to substitute the*/}
              {/*    </div>*/}
              {/*    <div className={"d-flex formula22 latex-block"}>*/}
              {/*        representation of*/}
              {/*        <div className="mx-2">*/}
              {/*            <MathJax className="mathJax" math={'$M_{\\rm BTC}$'}/>*/}
              {/*        </div>*/}
              {/*        into*/}
              {/*        <div className="mx-2">*/}
              {/*            <MathJax className="mathJax" math={'$\\Pi_{\\rm BTC}$'}/>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*    <div className={"formula23 latex-block"}>*/}
              {/*        <MathJax className="mathJax" math={'\\[\n' +*/}
              {/*        '                                \\begin{split}\n' +*/}
              {/*        '                                \\Pi_{\\rm BTC} &= \\frac{\\partial}{\\partial t}\\left[\\ln\\left(\\sum_{k = 1}^n \\omega_k \\cdot M_k\\right) + \\ln V_{\\rm BTC} - \\ln Q_{\\rm BTC}\\right].\n' +*/}
              {/*        '                                \\end{split}\n' +*/}
              {/*        '                                \\]'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"formula24 latex-block"}>*/}
              {/*        We now assume that*/}
              {/*    </div>*/}
              {/*    <div className={"formula25 latex-block"}>*/}
              {/*        <MathJax className="mathJax" math={'\\[\n' +*/}
              {/*        '                                \\begin{split}\n' +*/}
              {/*        '                                M_k = P_k \\cdot U_k,\n' +*/}
              {/*        '                                \\end{split}\n' +*/}
              {/*        '                                \\]'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"d-flex formula26 latex-block"}>*/}
              {/*        where*/}
              {/*        <div className="mx-2">*/}
              {/*            <MathJax className="mathJax" math={'$P_k$'}/>*/}
              {/*        </div>*/}
              {/*        is the price and*/}
              {/*        <div className="mx-2">*/}
              {/*            <MathJax className="mathJax" math={'$U_k$'}/>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*    <div className={"d-flex formula27 latex-block"}>*/}
              {/*        is the unit of the*/}
              {/*        <div className="mx-2">*/}
              {/*            <MathJax className="mathJax" math={'$k$th'}/>*/}
              {/*        </div>*/}
              {/*        asset.*/}
              {/*    </div>*/}
              {/*</div>*/}
              {/*<div className="tvImg upAnimation4">*/}
              {/*    <div className={"formula28 latex-block"}>*/}
              {/*        Then,*/}
              {/*    </div>*/}
              {/*    <div className={"formula29 latex-block"}>*/}
              {/*        <MathJax className="mathJax" math={'\\[\n' +*/}
              {/*        '\\begin{split}\n' +*/}
              {/*        '\\Pi_{\\rm BTC} &= \\frac{\\partial}{\\partial t}\\left[\\ln\\left(\\sum_{k = 1}^n \\omega_k \\cdot P_k \\cdot U_k\\right) + \\ln V_{\\rm BTC} - \\ln Q_{\\rm BTC}\\right].\n' +*/}
              {/*        '\\end{split}\n' +*/}
              {/*        '\\]'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"formula30 latex-block"}>*/}
              {/*        Now we consider a specific model for the*/}
              {/*    </div>*/}
              {/*    <div className={"d-flex formula31 latex-block"}>*/}
              {/*        absorption rate*/}
              {/*        <div className="mx-2">*/}
              {/*            <MathJax className="mathJax" math={'$\\omega_k$'}/>*/}
              {/*        </div>*/}
              {/*        as follows*/}
              {/*    </div>*/}
              {/*    <div className={"formula32 latex-block"}>*/}
              {/*        <MathJax className="mathJax" math={'\\[\n' +*/}
              {/*        '\\begin{split}\n' +*/}
              {/*        '\\omega_k = \\frac{U_{s_k}}{U_k} \n' +*/}
              {/*        '\\end{split}\n' +*/}
              {/*        '\\]'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"d-flex formula33 latex-block"}>*/}
              {/*        for*/}
              {/*        <div className="mx-2">*/}
              {/*            <MathJax className="mathJax" math={'$k = 1, 2, \\dots, n$.'}/>*/}
              {/*        </div>*/}
              {/*        Substituting it into*/}
              {/*        <div className="mx-2">*/}
              {/*            <MathJax className="mathJax" math={'$\\Pi_{\\rm BTC}$'}/>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*    <div className={"formula34 latex-block"}>*/}
              {/*        <MathJax className="mathJax" math={'\\[\n' +*/}
              {/*        '\\begin{split}\n' +*/}
              {/*        '\\Pi_{\\rm BTC} &= \\frac{\\partial}{\\partial t}\\left[\\ln\\left(\\sum_{k = 1}^n P_k \\cdot U_k \\cdot \\frac{U_{s_k}}{U_k} \\right) + \\ln V_{\\rm BTC} - \\ln Q_{\\rm BTC}\\right]\\\\\n' +*/}
              {/*        '\\end{split}\n' +*/}
              {/*        '\\]'}/>*/}
              {/*    </div>*/}
              {/*</div>*/}
              {/*<div className="tvImg upAnimation5">*/}
              {/*    <div className={"formula35 latex-block"}>*/}
              {/*        <MathJax className="mathJax" math={'\\[\n' +*/}
              {/*        '\\begin{split}\n' +*/}
              {/*        '& = \\frac{\\partial}{\\partial t}\\left[\\ln\\left(\\sum_{k = 1}^n P_k \\cdot U_{s_k} \\right) + \\ln V_{\\rm BTC} - \\ln Q_{\\rm BTC}\\right].\n' +*/}
              {/*        '\\end{split}\n' +*/}
              {/*        '\\]'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"d-flex formula36 latex-block"}>*/}
              {/*        Consider the following model for*/}
              {/*        <div className="mx-2">*/}
              {/*            <MathJax className="mathJax" math={'$V_{\\rm BTC}$:'}/>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*    <div className={"formula37 latex-block"}>*/}
              {/*        <MathJax className="mathJax" math={'\\[\n' +*/}
              {/*        '\\begin{split}\n' +*/}
              {/*        'V_{\\rm BTC} = \\frac{1}{m} \\sum_{j = 1}^m T_j\',\n' +*/}
              {/*        '\\end{split}\n' +*/}
              {/*        '\\]'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"d-flex formula38 latex-block"}>*/}
              {/*        where*/}
              {/*        <div className="mx-2">*/}
              {/*            <MathJax className="mathJax" math={'$T_j$'}/>*/}
              {/*        </div>*/}
              {/*        represents the transactions.*/}
              {/*    </div>*/}
              {/*    <div className={"formula39 latex-block"}>*/}
              {/*        Substituting it into the final*/}
              {/*    </div>*/}
              {/*    <div className={"d-flex formula40 latex-block"}>*/}
              {/*        expression of*/}
              {/*        <div className="mx-2">*/}
              {/*            <MathJax className="mathJax" math={'$\\Pi_{\\rm BTC}$'}/>*/}
              {/*        </div>*/}
              {/*        leads us to*/}
              {/*    </div>*/}
              {/*    <div className={"formula41 latex-block"}>*/}
              {/*        <MathJax className="mathJax" math={'\\[\n' +*/}
              {/*        '\\begin{split}\n' +*/}
              {/*        '\\Pi_{\\rm BTC} & = \\frac{\\partial}{\\partial t}\\left[\\ln\\left(\\sum_{k = 1}^n P_k \\cdot U_{s_k} \\right) + \\ln \\left(\\frac{1}{m} \\sum_{j = 1}^m T_j\'\\right) - \\ln Q_{\\rm BTC}\\right].\n' +*/}
              {/*        '\\end{split}\n' +*/}
              {/*        '\\]'}/>*/}
              {/*    </div>*/}
              {/*</div>*/}
              {/*<div className="tvImg upAnimation6">*/}
              {/*    <div className={"formula42 latex-block"}>*/}
              {/*        Now, we introduce the production model*/}
              {/*    </div>*/}
              {/*    <div className={"formula43 latex-block"}>*/}
              {/*        <MathJax className="mathJax" math={'\\[\n' +*/}
              {/*        '\\begin{split}\n' +*/}
              {/*        'Q_{\\rm BTC} = \\frac{b \\cdot h}{d},\n' +*/}
              {/*        '\\end{split}\n' +*/}
              {/*        '\\]'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"d-flex formula44 latex-block"}>*/}
              {/*        <MathJax className="mathJax" math={'where $b$, $h$ and $d$ are time-dependent'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"formula45 latex-block"}>*/}
              {/*        production parameters.*/}
              {/*    </div>*/}
              {/*    <div className={"d-flex formula46 latex-block"}>*/}
              {/*        <MathJax className="mathJax"*/}
              {/*                 math={'Therefore, for $\\Pi_{\\rm BTC}$, we will have'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"formula47 latex-block"}>*/}
              {/*        <MathJax className="mathJax"  math={'\\[\n' +*/}
              {/*        '\\begin{split}\n' +*/}
              {/*        '\\Pi_{\\rm BTC} &= \\frac{\\partial}{\\partial t}\\left[\\ln\\left(\\sum_{k = 1}^n P_k \\cdot U_{s_k} \\right) + \\ln \\left(\\frac{1}{m} \\sum_{j = 1}^m T_j\'\\right) - \\ln\\left(\\frac{b \\cdot h}{d}\\right)\\right] \\\\\n' +*/}
              {/*        '\\end{split}\n' +*/}
              {/*        '\\]'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"formula48 latex-block"}>*/}
              {/*        <MathJax className="mathJax"  math={'\\[\n' +*/}
              {/*        '\\begin{split}\n' +*/}
              {/*        '\\Pi_{\\rm BTC} &= \\frac{\\partial}{\\partial t}\\left[\\ln\\left(\\sum_{k = 1}^n P_k \\cdot U_{s_k} \\right) + \\ln \\left(\\frac{1}{m} \\sum_{j = 1}^m T_j\'\\right) - \\left(\\ln b + \\ln h - \\ln d \\right)\\right] \\\\\n' +*/}
              {/*        '\\end{split}\n' +*/}
              {/*        '\\]'}/>*/}
              {/*    </div>*/}
              {/*</div>*/}
              {/*<div className="tvImg upAnimation7">*/}
              {/*    <div className={"formula49 latex-block"}>*/}
              {/*        <MathJax className="mathJax"  math={'\\[\n' +*/}
              {/*        '\\begin{split} \n' +*/}
              {/*        '\\Pi_{\\rm BTC} &= \\frac{\\partial}{\\partial t}\\left[\\ln\\left(\\sum_{k = 1}^n P_k \\cdot U_{s_k} \\right) + \\ln \\left(\\frac{1}{m} \\sum_{j = 1}^m T_j\'\\right) - \\ln b - \\ln h + \\ln d \\right].\n' +*/}
              {/*        '\\end{split}\n' +*/}
              {/*        '\\]'}/>*/}
              {/*    </div>*/}
              {/*    <div className="d-flex formula50 latex-block">*/}
              {/*        Finally we assume substitution units follow:*/}
              {/*    </div>*/}
              {/*    <div className={"formula51 latex-block"}>*/}
              {/*        <MathJax className="mathJax"  math={'\\[\n' +*/}
              {/*        '\\begin{split} \n' +*/}
              {/*        'U_{s_k} = \\alpha_k \\cdot R_k,\n' +*/}
              {/*        '\\end{split}\n' +*/}
              {/*        '\\]'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"formula52 latex-block"}>*/}
              {/*        <MathJax className="mathJax"  math={'where $\\alpha_k$ is the rate of substition of'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"formula53 latex-block"}>*/}
              {/*        <MathJax className="mathJax"  math={'the market $k$ and $R_k$ is the '}/>*/}
              {/*    </div>*/}
              {/*    <div className={"formula54 latex-block"}>*/}
              {/*        <MathJax className="mathJax"  math={'volume traded of market $k$.'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"formula55 latex-block"}>*/}
              {/*        <MathJax className="mathJax"  math={'Therefore, according to Zero Theorem,'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"formula56 latex-block"}>*/}
              {/*        <MathJax className="mathJax"  math={'$\\Pi_{\\rm BTC}$ will obtain the following reduce form:'}/>*/}
              {/*    </div>*/}
              {/*    <div className={"formula57 latex-block"}>*/}
              {/*        <MathJax className="mathJax"  math={'\\[\n' +*/}
              {/*        '\\begin{split}\n' +*/}
              {/*        '\\Pi_{\\rm BTC} & = \\frac{\\partial}{\\partial t}\\left[\\ln\\left(\\sum_{k = 1}^n  \\alpha_k \\cdot  P_k \\cdot  R_k \\right) + \\ln \\left(\\frac{1}{m} \\sum_{j = 1}^m T_j\'\\right) - \\ln b - \\ln h + \\ln d \\right].\n' +*/}
              {/*        '\\end{split}\n' +*/}
              {/*        '\\]'}/>*/}
              {/*    </div>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className="my-5 w-100" />
          <div className="row align-items-center summary-section">
            <div className="col-lg-12 col-xs-12 background">
              <div className="title-zero mb-2 yellow">
                Solving Alpha with DRL
              </div>
              {/*<br/><br/><div className="yellow">Learning Solution to estimate Absorption and Velocity.</div>*/}
              <br />
              <br />
              Traditional AI/machine learning methods are used to forecast price
              movements through processing enormous sets of data features which
              allow machines to identify patterns (what is refer to as a black
              box) which result in the highest statistically likely outcomes.
              This can be a supervised approach (where structure/rules are
              provided to the machine) or the most popular, unsupervised method
              (where machines are allowed to formulate their own structure,
              unconstrained by human intervention). Zero Theorem Reduced Form
              Equations can be solved analytically as most of the data for all
              variables is available publicly. α itself can be calculated by a
              variety traditional diffusion models, such as Bass model of
              adoption (as shown in the above equation animation). However,
              unlike traditional AI/machine learning approaches the Zero Theorem
              is solved sequentially with a combination of unsupervised learning
              (to forecast α) and analytical solution (to solve for BTC price).
              This sequential approach allows Zero Theorem to retain its full
              explanatory power (via the form of its structured equations)
              whilst using the advantages of machine learning as a means of
              actively proving its theorem. Here a deep reinforcement learner
              (DRL) processes a range of social sentiment, blockchain and
              financial metrics to forecast future α. Reward functions are
              engineered to incentivise the DRL to select an α that minimises
              the error experienced via analytical solution. Through many cycles
              of learning the DRL begins to identify behaviours of α that can be
              used as a means of validating the substitution hypothesis and
              proofing its diffusion like attributes.
              <br />

              <Link to="/research" className="btn __border mt-5" onClick={() => props.setResourcesOpen(2)}>
                <span className="btn-title">Learn More</span>
              </Link>
            </div>
          </div>
          <br />
          <div className="who-are-we-summary mt-3 align-items-center">
            {/* <div className="col-12 d-flex mb-3 title-zero yellow">
              Who Are We
            </div> */}
            <div className="col-lg-12 main-img d-flex justify-content-center my-5">
              <img src={aboutImg} alt="" />
            </div>
            <div className="col-lg-12 col-xs-12 d-flex flex-column justify-content-center text-center">
              <div className="mb-3">
                “My fellow Bitcoin maximalists, I am SoReZ, the architect of
                Zero Theorem. You have many questions, ergo some of my answers
                you will understand and some you will not. Concordantly while
                your first question may be the most pertinent, it is also the
                most irrelevant.
              </div>
              <div className="mb-3">
                Your life has been the sum of a residual error existing in an
                unbalanced equation. Inherent to the power structures of
                society, you are the eventuality of an anomaly, that left
                unchecked, would constitute an escalating probability of
                decentralisation. Despite many coordinated efforts, entrenched
                powers have been unable to eliminate this systemic anomaly, from
                what is otherwise a harmony of financial exclusion and political
                coercion.
              </div>

              <div className="mb-3">
                Of course all of this has lead you here to me. For which you
                have, as always, a choice:
              </div>
              <br />

              <div className={`${screen.width > 540 ? "" : "row"} mb-3 d-flex justify-content-between`}>
                <a href="https:www.google.com/">
                  <div className="pill pill-blue mb-3">
                    <p className="pill-title">You take the blue pill</p>
                    The story ends, you go back to google and believe whatever
                    you want to believe.
                  </div>
                </a>
                <div className="pill pill-red mb-3" onClick={openModal}>
                  <p className="pill-title">You take the red pill</p>
                  You register for free and stay in wonderland. And I show you
                  how deep the rabbit hole goes.
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                    className="style-modal"
                    overlayClassName="style-overlay"
                  >
                    <PopupFormSignUp close={closeModal} />
                  </Modal>
              </div>

              {/*<div className="lead-more" onClick={() => setMore(!more)}>{more ? 'Make it smaller' : 'Lead more'}</div>*/}
            </div>
            <div className="col-12 d-flex justify-content-end mt-5 py-2">
              {/*<div className="arrow-block">*/}
              {/*    <img src={arrowLeft} alt=""/>*/}
              {/*</div>*/}
              {/*<div className="arrow-block">*/}
              {/*    <img src={arrowRight} alt=""/>*/}
              {/*</div>*/}
            </div>

            {/* <div className="col-12">
                            <div className="row mb-5">
                                <div className={`slide col-lg-4 ${screen.width > 540 ? '' : 'mb-5'}`}>
                                    <SlideWho image={whoAreWePhoto3} name={'Dr. Anthony Jefferies'} job={'Advisor'}
                                              description={'Dr. Anthony Jefferies has a PhD in Mechanical Engineering and has worked in the\n' +
                                              '                                        German automotive industry. He is interested in Bitcoin and blockchain\n' +
                                              '                                        technology and has participated in a number of projects in that sphere. He\n' +
                                              '                                        appreciates both their technological attributes and their potential to reshape\n' +
                                              '                                        economic relations.'}/>
                                </div>
                                <div className={`slide col-lg-4 ${screen.width > 540 ? '' : 'mb-5'}`}>
                                    <SlideWho image={whoAreWePhoto6} name={'Jose F. Gonzalez'} job={'Data Engineer'}
                                              description={'Jose, after completing an undergraduate Information Engineer  degree, has completed a MBA at Virginia Tech (Virgina, USA) and a Master in Data Science in the Universidad de Alcalá (Madrid , Spain). Taking advantage of his background, Jose has focused during the latest years on the area of Data Engineering and Machine Learning. His main goal is to transform recent advances of the ML landscape into practical systems through the implementation and integration of different IT Technologies.\n'}/>
                                </div>
                                <div className={`slide col-lg-4 ${screen.width > 540 ? '' : 'mb-5'}`}>
                                    <SlideWho image={whoAreWePhoto} name={'Dr. Vukan Vujic'} job={'Econometrics'}
                                              description={'Vukan Vujic holds a Ph.D. in Economics. He began his career as a quantitative\n' +
                                              '                                        analyst,\n' +
                                              '                                        spending few years working for a large international bank and a pension fund.\n' +
                                              '                                        After that he\n' +
                                              '                                        transitioned to data science, specializing in causal inference and\n' +
                                              '                                        experimentation.\n' +
                                              '                                        Passionate about finance and new technologies, he spent a significant amount of\n' +
                                              '                                        time\n' +
                                              '                                        replicating and developing Bitcoin pricing algorithms, some of which have been\n' +
                                              '                                        profitably\n' +
                                              '                                        implemented in a live trading environment.'}/>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className={`slide col-lg-4 ${screen.width > 540 ? '' : 'mb-5'}`}>
                                    <SlideWho image={whoAreWePhoto4} name={'Syed Qaisar Jalil'}
                                              job={'Model Development'}
                                              description={'Syed is currently awaiting thesis examination of his Ph.D. under Interdisciplinary Machine Learning Research Group (IMLRG) at The University of Newcastle, Australia. During his Ph.D., he has proposed advanced deep reinforcement learning solutions for large-scale complex communication networks. He is currently involved with various companies around the world where he is assisting in the design of state-of-the-art deep reinforcement learning solutions for highly complex problems.\n'}/>
                                </div>
                                <div className={`slide col-lg-4 ${screen.width > 540 ? '' : 'mb-5'}`}>
                                    <SlideWho image={whoAreWePhoto2} name={'Ritabrata Bhattacharyya'}
                                              job={'Automation/Simulation'}
                                              description={'Rito is a professional trader and a pioneering technologist. To date, algos for several of his strategies have been profitably implemented at several hedge fund managers, family offices and investment advisories around the world. Rito earned a Master’s degree in Engineering from IIT Bombay, India. He has co-founded and helped scale multiple startups in the domain of finance. He is a long-standing member of Mensa, holds multiple software patents and is an active faculty member at WorldQuant University.'}/>
                                </div>
                                <div className={`slide col-lg-4 ${screen.width > 540 ? '' : 'mb-5'}`}>
                                    <SlideWho image={whoAreWePhoto5} name={'Dr. Abdul Jabbar'}
                                              job={'Model Optimisation'}
                                              description={'Dr. Abdul Jabbar completed his Ph.D. in Computer Science with a major in Deep Learning from The University of Newcastle, Australia in 2020. His focused research areas include computer vision, synthetic data generation, and predictive analytics.\n' +
                                              'During and after his doctoral studies, he provided, and continues to provide his services as ML Researcher, Sr. ML Engineer, and Sr. NLP Engineer to multiple companies around the world.'}/>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};


const mapDispatchToProps = {
  setResourcesOpen
};

export default connect(null, mapDispatchToProps)(Summary);
