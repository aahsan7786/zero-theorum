import React from "react";
import article2 from "../../assets/images/article2.png";
import { NavLink } from "react-router-dom";

import { ReactSVG } from "react-svg";
import MathJax from "react-mathjax-preview";
import InfoModalGraph from "../../components/infoModalGraph/infoModalGraph";
import ErrorBoundry from "../../components/error-boundry/ErrorBoundry";
import information from "Images/icons/information.svg";

const ArticleFourteen = () => {
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
                  Price manipulation in the Bitcoin ecosystem
                </h3>
              </div>
              <br />
              <br />
              Introduction
              <br />
              Gandal et al. (2017) identified and analysed the impact of
              suspicious trading activities on the Mt. Gox Bitcoin currency
              exchange, where about 600,000 bitcoins (BTC) valued at $188
              million were acquired through fraudulent means. The study
              demonstrated that the fraud led to an increase in Bitcoin exchange
              rate and trading volume both on Mt. Gox and other leading crypto
              exchanges.
              <br />
              <br />
              Suspicious trading activity on Mt. Gox
              <br />
              The Mt. Gox transaction history was leaked in early 2014. The data
              dump revealed transactions between April 2011 and November 2013.
              The information from the data includes transaction ID, time,
              currency, user country and state codes, user ID and amount. The
              two major suspicious traders were named the Markus Bot and the
              Willy Bot. The Markus Bot: Markus was active between February 2013
              and September 2013. During this period, the Markus bot account was
              credited with claimed Bitcoins that were not backed by real coins.
              Also, the transactions were duplicates and no legitimate customer
              on Mt. Gox got the currency supposedly paid by Markus to acquire
              the claimed Bitcoins. In total, Markus acquired 335,898 Bitcoins
              (worth about $76 million). The Willy Bot: Willy did not use a
              single ID like Markus. The Willy bot had 49 separate accounts.
              Each account bought Bitcoins worth 2.5 million USD in sequential
              order, and the Bitcoins were never sold after the acquisition. In
              total, Willy acquired 268,132 Bitcoins worth about $112 million.
              <br />
              <br />
              Preliminary Analysis
              <br />
              According to Gandal et al. (2017), Markus and Willy accounted for
              12% and 6% of the total USD/BTC trade on the four major crypto
              exchanges on the days they were active. The exchanges include Mt.
              Gox, BTC-e, Bitfinex and Bitstamp. Preliminary analysis by Gandal
              et al. (2017) showed that when there was no suspicious activity on
              Mt. Gox, the exchange rate only rose 55% of the time. But for the
              82 days that there was suspicious activity, the exchange rate rose
              79% of the time. The suspicious activity on Mt. Gox also had an
              effect on other crypto exchanges. For example, on Bitstamp, the
              exchange rate rose 55% of the time when there was no suspicious
              activity on Mt. Gox, but for the days when the suspicious activity
              occurred on Mt. Gox, the exchange rate on Bitstamp rose more than
              80% of the time.
              <br />
              <br />
              Regression Analysis
              <br />
              Regression Analysis is carried out to control events like
              Distributed Denial of Service (DDoS) attacks which are capable of
              altering the exchange rate. The dependent variables in this
              regressions include the daily returns and absolute daily price
              changes on all the four exchanges. The regressions employed are:
              〖RateChange〗_t=β_0+β_1 〖Markus〗_t+β_2 〖Willy〗_t+β_3
              〖DDoS〗_t+β_4 〖DayAfterDDoS〗_t+β_5 〖Other〗_t+ϵ_t
              〖Returns〗_t=β_0+β_1 〖Markus〗_t+β_2 〖Willy〗_t+β_3
              〖DDoS〗_t+β_4 〖DayAfterDDoS〗_t+β_5 〖Other〗_t+ϵ_t Where
              RateChange represents the daily difference in the BTC exchange
              rate, and Returns represents the daily returns. The independent
              variables include Markus, which is a dummy variable that takes the
              value one on the days Markus was active as a buyer. Similarly,
              Willy is the dummy variable for the Willy bot; DDoS is a dummy
              variable that takes value one on days Mt. Gox was attacked by
              DDoS; DayAfterDDoS is a dummy variable for the day after the DDoS
              attack occurred. The variable Other is is a dummy variable that
              takes the value one on the days that non-DDoS attacks occurred;
              ϵ_t denotes the white noise error term, and the subscript “t”
              represents time.
              <br />
              <br />
              The results of the analysis showed that the exchange rate on Mt.
              Gox rose by an average of 20 USD on the days Willy was active;
              similarly, the regressions showed that exchange rate rose by an
              average of 19-20 USD on other exchanges. Meanwhile, the variable
              DDoS and Others appear not to influence the exchange rate. Daily
              Percentage Returns: When the bots were not active, the average
              rate of return was less than 1%. However, when Willy was active,
              the regression analysis showed that the daily returns on all
              exchanges ranged from 4.1% to 4.7%. Similarly, when Markus was
              active, the daily returns on all exchanges ranged from 2.7% to
              4.3%. Both Willy and Markus coefficient estimates were significant
              at 99% level of confidence.
              <br />
              <br />
              Conclusion
              <br />
              Gandal et al. (2017) concluded that the suspicious trading
              activity on the Mt. Gox led to an increase in Bitcoin’s price
              during the period studied. Trading volume also increased
              substantially on days with fraudulent trading activity. The
              increase in exchange rates and trading volume occurred both on Mt.
              Gox and all other leading currency exchanges.
              <br />
              <br />
              References
              <br />
              Gandal, N., Hamrick, J., Moore, T., and Oberman, T. (2017). Price
              manipulation in the Bitcoin ecosystem. Journal of Monetary
              Economics.
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

export default ArticleFourteen;
