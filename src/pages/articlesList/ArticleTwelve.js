import React from "react";
import article2 from "../../assets/images/article2.png";
import { NavLink } from "react-router-dom";

import { ReactSVG } from "react-svg";
import MathJax from "react-mathjax-preview";
import InfoModalGraph from "../../components/infoModalGraph/infoModalGraph";
import ErrorBoundry from "../../components/error-boundry/ErrorBoundry";
import information from "Images/icons/information.svg";

const ArticleTwelve = () => {
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
                  Bitcoin Pricing, Usage, and Adoption: Theory and Evidence
                </h3>
              </div>
              <br />
              <br />
              Introduction
              <br />
              Athey et al. (2016) created a model of user adoption and use of
              virtual currency (e.g. Bitcoin), and investigated the dynamics of
              adoption considering frictions that arise from exchange rate
              uncertainty.
              <br />
              <br />
              Theoretical Framework
              <br />
              Theorem 1: (a) A dynamic bitcoin price equilibrium exists and it
              is unique. Let e^* (x_t) represent the equilbrium exchange rate
              function and σ_it^* represent the equilibrium agent strategies.
              <br />
              (b) Let C_t^* (x_t)=〖max〗_i `{`c_i ∶ σ^* (1,e_t^* (x_t))=B`}`
              represent the highest fixed cost that uses Bitcoin when needed in
              period t, given xt. (c) There exists a tc such that for all t’ ≥
              tc, all agents make use of Bitcoin for remittances (σ_(it’)^*
              (1,e_t^* (x_t))=B for all x_t) while for t’’ &lt; tc, there exists
              a realization of remittance needs x_(t’’)∈`{`0,1`}`^N such that
              for some i, σ_(it’’)^* (1,e_t^* (x_t^(’’)))=0).
              <br />
              <br />
              From theorem 1, it can be established that adoption increases over
              time, ultimately reaching full adoption. The adoption path depends
              on factors like the risk aversion of the agents, the prior
              probability of the bad state, the number of agents and the
              probability of failure in the bad state.
              <br />
              <br />
              Theorem 2: In the presence of investors who can sell and buy short
              Bitcoin (yt), there exists a dynamic price equilibrium with
              investment where for t ≥ tc, yt = 0 and the distribution of e
              ̃_(t+1) is equal to that of Z ̃/B ̃. In each period, t&lt;tc, E_(e
              ̃_t,e ̃_(t+1) ) [k_t ∙ e ̃_(t+1)/e ̃_t ] ≤ 1
              <br />
              <br />
              Where Ei,t represents the expectation over random variables given
              the information available at the beginning of period t; B ̃
              represents the supply of Bitcoin; and e ̃_(t+1) represents the
              random variable whose realization is the exchange rate in time t
              based on the condition that Bitcoin survives.
              <br />
              <br />
              Aggregate Analysis of Bitcoin Exchange Rate To operationalize the
              theoretical prediction that exchange rates have a proportional
              relationship with the ratio of volume to effective supply of
              bitcoin, Athey et al. (2016) introduced the concept of Bitcoin
              velocity. Exchange rate=(Transaction Volume)/(Velocity X Supply of
              Bitcoins)
              <br />
              <br />
              <br />
              In a regression of the logarithm of 30-day ahead exchange rates on
              the log of the ratio of 365-day transaction volume to Bitcoin
              supply, the R2 is 0.83.
              <br />
              <br />
              Summary of Theoretical Results The model built by Athey et al.
              (2016) shows that: If all agents adopt Bitcoin, in the absence of
              investors, there will be a unique equilibrium exchange rate per
              period and this is determined by economic fundamentals (demand and
              supply).
              <br />
              <br />
              The steady state expected exchange rate for Bitcoin equals the
              ratio of the expected Bitcoin transaction volume and the supply of
              Bitcoins. In the absence of investors, exchange rate increases
              proportionally to adoption. Transaction volume depends on the
              advantages of Bitcoin relative to other payment options.
              <br />
              <br />
              Conclusion
              <br />
              Athey et al. (2016) developed a theoretical framework for Bitcoin
              adoption and pricing. The framework suggests that Bitcoin prices
              may be attributed to economic fundamentals. In future, researchers
              can explore the network structure of Bitcoin and how users
              interact in the network.
              <br />
              <br />
              Reference
              <br />
              Athey. S., Parashkevov, I., Sarukkai, V., and Xia, J. (2016).
              Bitcoin Pricing, Adoption, and Usage: Theory and Evidence.
              Standford Institute for Economic Policy Research.
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

export default ArticleTwelve;
