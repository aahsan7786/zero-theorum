import React from "react";
import article2 from "../../assets/images/article2.png";
import { NavLink } from "react-router-dom";

import { ReactSVG } from "react-svg";
import MathJax from "react-mathjax-preview";
import InfoModalGraph from "../../components/infoModalGraph/infoModalGraph";
import ErrorBoundry from "../../components/error-boundry/ErrorBoundry";
import information from "Images/icons/information.svg";

const ArticleThirteen = () => {
  

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
                  The determinants of Price Discovery on Bitcoin Markets
                </h3>
              </div>
              <br />
              <br />al. (2020) investigated the level of influence of market
              quality, investor sentiment, attention, macroeconomic news and
              uncertainty on Bitcoin price discovery in spot and futures
              markets.
              <br />
              <br />
              Data
              <br />
              The data considered by Entrop et al. (2020) are intraday trades
              and quotes for Bitcoin futures traded on the Chicago Mercantile
              Exchange (CME) and the corresponding spot of the Bitstamp (BTSP)
              exchange. The data was obtained from the Thomson Reuters Tick
              History (TRTH) database. The quote data include bid and ask
              quotes, and the precise timestamp a new quote is issued. The
              transaction data include the traded price, associated volume and
              the timestamp to the nearest millisecond.
              <br />
              <br />
              Methodology
              <br />
              To investigate the dynamics of price discovery process Bitcoin
              spot and futures prices, Entrop et al. (2020) applied the standard
              approach to estimate a vector error correction model (VECM) and
              obtained price discovery measures from the outcome of VECM. Two
              price discovery measures for non-stationary price series,
              Component Share (CS) and Information Share (IS) were used.
              <br />
              <br />
              Vector error-correction model and price discovery measures: Say
              BTSP spot has a log US dollar price st, and ft represents the log
              US dollar price of the CME futures. Let yt = (st ft)’ represent
              the vector of these price series. Considering the cost-of-carry
              relation between spot and futures prices, the respective log price
              series will be of order one, I(1), with co-integrating vector β′ =
              (1 −1). As a result, price changes can be expressed as an error
              correction equation in the following form: ∆y_t= ∝(β^’
              y_(t-1)+μ)+∑_(i=1)^p▒〖Γ_i ∆y_(t-i)+ε_t 〗 where α is a (2 x 1)
              vector for the Bitcoin futures and spot prices that measures the
              adjustment speed of short-term deviations from the long-term
              equilibrium; Δyt is the (2 x 1) vector of changes in the log
              series of the futures and spot price at time t. β′ means it is
              expected that αFutures ≥ 0 and αSpot ≤ 0. μ is a constant term in
              the co-integrating equation, and Γi are (2 x 2) matrices of
              autoregressive prices, denoting the short-term transitory effects
              caused by market imperfections. ԑt is a zero-mean vector of
              serially uncorrelated innovations having the following covariance
              matrix: Ω=(■(σ_1^2&ρσ_1 σ_2@ρσ_1 σ_2&σ_2^2 )) Where ρ is the
              correlation between the innovations and σ_1^2 (σ_2^2) is the
              variance of spot or futures market innovations.
              <br />
              <br />
              Determinants of Price Discovery: Entrop et al. (2020) considered
              six different variables that may be of influence on price
              discovery. These variables include the market quality (trading
              activity or trading costs of Bitcoin spot and futures market),
              uncertainty, macroeconomic news announcement, sentiment (daily
              Bitcoin sentiment data was obtained from Thomson Reuters
              MarketPsych), investor attention (obtained from Google Trends
              Search Volume Index) and control. To assess the influence of these
              variables, Entrop et al. (2020) used the following equation:
              〖logit〗_(〖cs〗_t
              )=β_0+δ’Market〖Quality〗_t+γ’〖Uncentainty〗_t+λ’〖Sentiment〗_t+η’〖Attention〗_t+τ’〖Macro_News〗_t+θ’〖Controls〗_t+ε_t
              Where 〖logit〗_(〖cs〗_t ) is the logit transformation of the
              spot market CS, which enables the mapping of the original
              variable, bounded between zero and one, to other variables.
              <br />
              <br />
              Empirical Results
              <br />
              Considering the distributional properties of price discovery
              measures over the contract months, CS is more volatile compared to
              IS. Also, on average, a lower standard deviation was observed for
              significant contract months, from 6.4% to 12.2% for IS, and from
              15.3% to 22.7% for CS, respectively. The results of the analysis
              showed that the number of quotes is insignificant in all model
              specifications and time periods, implying that there is no
              relation between quoting activity and price discovery. However,
              the relative trading volume has significant positive effects. The
              uncertainty variables have negative coefficients that are
              significant for the volatility of the spot market, thereby leading
              to an increase in price discovery in Bitcoin futures market. The
              control variables (BTSP) showed no significance in the reduced
              sample period but showed significance in the full sample period.
              High news-based Bitcoin sentiment and high attention dummy have
              negative and positive impacts on price discovery, respectively.
              Finally, macroeconomic news has no significant influence on
              Bitcoin price discovery.
              <br />
              <br />
              Conclusion
              <br />
              Using CS and IS, Entrop et al. (2020) found that price discovery
              measures are subject to time variation. The analysis indicated
              that the information transmission between the spot and futures
              market takes less than 15 minutes. The analysis also showed that
              the relative bid-ask spread has negative effects on price
              discovery, while relative trading volume has a positive effect.
              <br />
              <br />
              Reference
              <br />
              Entrop, O., Frijns, B., and Seruset, M. (2020). The determinants
              of Price Discovery on Bitcoin Markets. J Futures Markets, 1–22.
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

export default ArticleThirteen;
