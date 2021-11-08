import React from "react";
import article2 from "../../assets/images/article2.png";
import { NavLink } from "react-router-dom";

import { ReactSVG } from "react-svg";
import MathJax from "react-mathjax-preview";
import InfoModalGraph from "../../components/infoModalGraph/infoModalGraph";
import ErrorBoundry from "../../components/error-boundry/ErrorBoundry";
import information from "Images/icons/information.svg";

const ArticleSixteen = () => {
  return (
    <section className="section hero inner-page">
      <div className="whoAreWe">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="category-resource">
                <NavLink to="/research" className="category-resource-link">
                  ZT Literature Review
                </NavLink>
              </div>
              <div className="hero-title">
                <h3 className="title-1 title-border">
                  Using High-Frequency Entropy to Forecast Bitcoin’s Daily Value
                  at Risk
                </h3>
              </div>
              <br />
              <br />
              Introduction
              <br />
              Pele and Mazurencu-Marinescu-Pele (2019) studied the relationship
              between the entropy of high-frequency intraday Bitcoin’s returns
              and the daily Value at Risk (VaR). The study showed that VaR
              forecast built on the entropy of intraday returns has a better
              performance than the classical GARCH models.
              <br /> <br />
              Methodology
              <br />
              Data: The BTC/USD exchange rate data used for the research was
              obtained from Cryptodatadownload.
              <br /> <br />
              The methodology employed by Pele and Mazurencu-Marinescu-Pele
              (2019) has two layers. First, the Shannon entropy of intraday
              Bitcoin’s returns was defined using symbolic time series analysis
              (STSA). Second, the VaR-forecasting ability of the entropy of
              intraday Bitcoin’s returns was investigated by making a comparison
              between the forecasting ability of different models and using
              relevant backtesting tests.
              <br /> <br />
              Entropy and Bitcoin Daily Prices: If X is a discrete random
              variable that has a probability distribution X:
              (■(x_1&...&x_n@P_i&...&P_n )), where p_i=P(X=x_i),0≤p_i≤1 and
              ∑_i▒〖p_i=1〗, then, the Shannon Information Entropy is given in
              equation (1) below: S(X)=-∑_i▒〖p_i 〖log〗_2 p_i 〗 (1) Also, the
              Shannon entropy for a trading day t is as follows: S_t= -p_t
              〖log〗_2 p_t-(1-p_t)〖log〗_2 (1-p_t) (2) The working hypothesis
              used by Pele and Mazurencu-Marinescu-Pele (2019) is that the daily
              exchange rate of Bitcoin correlates to the daily entropy of
              intraday returns with the following relationship:
              E〖(P〗_t)=exp[β_0+β_1 S_t] (3) Using Entropy to Predict the
              Extreme Values of Daily Returns: Here, the working hypothesis
              employed by Pele and Mazurencu-Marinescu-Pele (2019) is that the
              probability of extreme daily negative returns can be justified by
              lower values of entropy. This hypothesis was verified using the
              following logistic regression model: P(Y_t^*=1)=(exp(b_0+b_1
              S_t))/(1+exp(b_0+b_1 S_t)) (4) Where Y_t^* is the indicator of
              lower tails of daily logreturn’s distribution. Y_t^*=1 if r_t&lt;
              -〖VaR〗_α and Y_t^*=0 if r_t≥ -〖VaR〗_α St is the Shannon
              Information Entropy at day t as computed by equation (2).
              <br />
              <br />
              Forecasting Daily VaR Using Entropy: The rolling window approach
              and quantile regression model in equation (5) were used to
              forecast the daily VaR based on the intraday returns’ lagged
              entropy: Q_(r,t) (α)=b_0+b_1 S_(t-1)+η_t (5) By evaluating
              equation (5) on the time interval [k+1, k+w], the estimates b_0^k
              and b_1^k were obtained. Afterwards, the forecast of VaR for the
              next trading day is provided as: 〖VaR〗_(α;k+w+1)=-b_0^k-b_1^k
              S_(k+w) (6) Where w is the length of the rolling window; t∈`
              {`k+1,...,k+w`}`,k∈`{`0,...,T-w+1`}`; and T is the number of daily
              returns.
              <br />
              <br />
              Empirical Results
              <br />
              When Bitcoin reached its historical maximum of about 19,476 USD,
              the entropy estimated was 0.47. Relatively, the Bitcoin price had
              an increase of 10% when compared to the previous trading day
              (17,760 USD). However, entropy increased by 36% (from 0.35 to
              0.47). This shows that the Bitcoin’s high price can be associated
              with high values of entropy of intraday returns.
              <br />
              From the model given in equation (6), Pele and
              Mazurencu-Marinescu-Pele (2019) estimated the following results
              (in Table 1) using 〖VaR〗_α as threshold for α=0.01 and α=0.05.
              Table 1. Estimation results of logistic regression. Parameter
              α=0.01 α=0.05 b0 〖-6.253〗^(***) (0.901) 〖-4.495〗^(***) (0.384)
              b1 〖5.340〗^(***) (0.901) 〖5.328〗^(***) (0.901) Where ***
              implies statistical significance of 99% confidence level; and the
              values in bracket ( ) are the standard errors.
              <br />
              <br />
              These results show that there will be a huge increase in the
              probability of an extreme negative Bitcoin return if the entropy
              of intraday returns increases. Forecasting Daily VaR Using
              Entropy: At a significance level of 1%, the VaR forecasts based on
              the Entropy-AR model performed better than the Gaussian-based VaR,
              GARCH model-based VaR and the Historical VaR. The same result was
              obtained at 5% significance level.
              <br />
              <br />
              Conclusion
              <br />
              Pele showed that there is a strong positive relationship between
              the daily Bitcoin logarithmic price and the entropy of intraday
              returns. The results of the study showed that entropy performed
              better in forecasting the ex-ante Bitcoin 1-day value at risk
              (VaR) than the classical GARCH models.
              <br />
              <br />
              Reference
              <br />
              Pele, D., and Mazurencu-Marinescu-Pele, M. (2019) Using
              High-Frequency Entropy to Forecast Bitcoin’s Daily Value at Risk.
              Entropy, 21, 102.
            </div>
          </div>
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSixteen;
