import React from "react";
import article2 from "../../assets/images/article2.png";
import { NavLink } from "react-router-dom";

import { ReactSVG } from "react-svg";
import MathJax from "react-mathjax-preview";
import InfoModalGraph from "../../components/infoModalGraph/infoModalGraph";
import ErrorBoundry from "../../components/error-boundry/ErrorBoundry";
import information from "Images/icons/information.svg";

const ArticleSeventeen = () => {
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
                  Predicting bitcoin returns using high-dimensional technical
                  indicators.
                </h3>
              </div>
              <br />
              <br />
              Introduction
              <br />
              Huang et al. (2019) examined the possibility of predicting Bitcoin
              with a large set of technical indicators that are Bitcoin
              price-based. In particular, the study involved constructing a
              classification tree-based model for return prediction utilising
              124 technical indicators. Findings from the research showed that
              big data and technical analysis can be used to predict Bitcoin
              returns.
              <br />
              <br />
              Data
              <br />
              BTC-USD data obtained from investing.com was used. The data
              includes daily open, close, high, and low prices of Bitcoin from
              1st January, 2012 o 29th December, 2017. Huang et al. (2019) had
              2168 observations in total, after cleaning the data set. The
              sample was divided into three sub-samples. The first sub-sample
              consists of 120 observations and they were used to compute the
              initial values of technical indicators serving as inputs in the
              decision-tree analysis. The second sub-sample was used as a
              training data set in the decision-tree analysis. Finally, the
              third sample was used as the test data set.
              <br />
              <br />
              Predictors
              <br />
              Huang et al. (2019) used 124 technical indicators that depend on
              past prices of Bitcoin. The indicators were grouped into five
              categories as overlap study indicator (to identify a trend’s
              direction); cycle indicators (to analyse market cycles); momentum
              indicators (to determine how fast the price of underlying security
              changes); volatility indicators (to quantify the volatility of the
              security’s price action); and pattern recognition indicators (to
              detect specific price chart patterns).
              <br />
              <br />
              Methodology
              <br />
              Decision Tree
              <br />
              According to Huang et al. (2019), a decision tree is built from a
              root node and it involves partitioning the data space recursively
              into subsets containing similar values. Assume Ntrain is the
              number of observations in the training data set. Let x_i∈R^P and
              y_i∈R represent the i-th observations of input variables P and
              response variable y, respectively for i = 1, 2, ..., Ntrain. In
              the study, P = 124, Ntrain = 1,538 and y∈`{`-10,-9,...,9,10`}`.
              The input variables are continuous; therefore, Huang et al. (2019)
              used a binary space partitioning based on thresholds of inputs.
              The target is to select a pair θ=(j,t_j) - a feature j and its
              threshold tj so as to split the data recursively.
              <br />
              <br />
              Implementation
              <br />
              In the analysis carried out by Huang et al. (2019), the
              implementation of the 124 technical indicators was done using a
              package from TA-Lib. Decision trees for return prediction were
              built using the CART method. The algorithm was implemented with
              Scikit-learn function “DecisionTreeClassifier”. For the inputs
              specified, cross-entropy (given in equation 1) was used as the
              measure of impurity; partitioning was carried out until the
              terminal nodes were pure and the number of features was set to 11
              (which is the integer part of sqrt(124)). Huang et al. (2019) used
              1000 different trees to train the return prediction model. These
              trees were generated by running the code 1000 times given that
              during the building of the tree, features considered at each node
              are randomly selected. Cross-Entropy, H_CE (R_m)= -
              ∑_k▒〖p_mk*log(p_mk)〗 (1) Where p_mk is an auxiliary variable for
              class k in node m; k ∈ `{`1,2,...,K`}` and K is the number of
              classification outcomes. Data in node m is denoted by Rm.
              <br />
              <br />
              Empirical Analysis and Results
              <br />
              In-sample performance
              <br />
              The results of the analysis showed that for the average win ratios
              range from 53.43% to 71.78% and the average loss ratios range from
              28.22% to 39.51% for the return ranges of -8, -7, 4, 5, 6, 7, 9
              and 10. That is, win ratios are greatly higher than loss ratios
              for signals y ̂= -8,-7,4,5,6,7,9 and 10. This implies that on
              average, the 1000 decision trees record better performance in
              predicting the eight return ranges. Note, y ̂_i represent the i-th
              predicted value of y from a resulting tree.
              <br />
              <br />
              Out-of-sample performance
              <br />
              Huang et al. (2019) compared the proposed model to the ten simple
              strategies and a buy-and-hold strategy. For the ten simple
              strategies, the average information ratios based on the arithmetic
              r ̂_A and geometric r ̂_G average returns are 4.20 and 2.77,
              respectively. For buy-and-hold strategy, r ̂_A is 12.62 and r ̂_G is
              8.65. Meanwhile, the proposed model has an average of 13.13 for r
              ̂_A-based information ratio and 8.99 for the r ̂_G-based information
              ratio. This shows that the proposed model has a higher average
              information ratio than the ten simple strategies and the
              buy-and-hold strategy. Also, the results showed that the average
              annualized volatility for the proposed strategy is 64.25% which is
              much lower than that of the buy-and-hold strategy that has 83.17%.
              <br />
              <br />
              Conclusion
              <br />
              The model proposed by Huang et al. (2019) has strong predictive
              power for narrow ranges of Bitcoin daily returns. Even in a strong
              bull market, the model outperformed the buy-and-hold strategy. A
              future extension of this research is to study a continuous
              response and assess the predictive power of the technical trading
              rules for the Bitcoin return levels.
              <br />
              <br />
              Reference
              <br />
              Huang, J., Huang, W., and Ni, J. (2019). Predicting bitcoin
              returns using high-dimensional technical indicators. The Jou
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

export default ArticleSeventeen;
