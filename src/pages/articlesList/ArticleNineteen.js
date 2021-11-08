import React from "react";
import article2 from "../../assets/images/article2.png";
import { NavLink } from "react-router-dom";

import { ReactSVG } from "react-svg";
import MathJax from "react-mathjax-preview";
import InfoModalGraph from "../../components/infoModalGraph/infoModalGraph";
import ErrorBoundry from "../../components/error-boundry/ErrorBoundry";
import information from "Images/icons/information.svg";

const ArticleNineteen = () => {
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
                  An Empirical Study on Modeling and Prediction of Bitcoin
                  Prices Using Bayesian Neural Networks (BNN) Based on
                  Blockchain Information{" "}
                </h3>
              </div>
              <br />
              <br />
              Introduction
              <br />
              Jang and Lee (2018) conducted a practical analysis of the time
              series of the Bitcoin process using the Bayesian Neural Network
              (BNN) based on Blockchain Information. The results of the
              empirical study showed that BNN performed better in predicting
              Bitcoin’s price time series compared to other benchmark models.
              <br />
              <br />
              Bayesian Neural Networks
              <br />
              According to Jang and Lee (2018), the BNN is a transformed
              Multilayer Perceptron (MLP) which is a general term for Artificial
              Neural Networks (ANNs) in machine learning. The BNN’s structure is
              built with processing units that can be classified into three
              categories, including the output layer, the input layer and one or
              more hidden layers. The weights of a BNN is learned between the
              hidden-output layer and input-hidden layer. The weights of the
              hidden layers can be adjusted by the error of the hidden layers
              propagated by the output layer’s error. The process for the
              adjustment is called backpropagation. The BNN minimises the sum of
              the errors using the backpropagation algorithm given in (1).
              <br />
              <br />
              E_B=∝/2 ∑_(n=1)^N▒∑_(k=1)^K▒〖(t_nk-o_nk )^2+β/2 ⪷_B^T⪷B〗 (1)
              Where EB is the sum of the errors, K is the size of the output
              layer, N is the number of the training variables, onk is the k-th
              output variable of the n-th training vector, tnk is the k-th
              variable of the n-th target vector, ⪷B is the weights vector of
              the BNN, and ∝ and β are the hyper-parameters.
              <br />
              <br />
              Data
              <br />
              The data used for the empirical analysis was obtained from
              blockchain.info. It includes categories like Blockchain
              information (trading volume, hash rate, total number of unique
              Bitcoins, average block size, transactions/block, miners’ revenue,
              median confirmation time, cost % of transaction), Macroeconomic
              development (S&P500, Eurostoxx, Crude oil, DOW30, NASDAQ, FTSE100,
              Nikkei225, SSE and VIX), Global currency ratio (GBP, EUR, JPY, CNY
              and CHF), and Response variable (price or log prices of
              Bitcoin(USD) and volume or log volume of Bitcoin(USD).
              <br />
              <br />
              Structure of the Experiment
              <br />
              First, the BNN was trained to model Bitcoin price formation. It is
              then evaluated in terms of test and training errors by using
              non-linear methodologies, linear regression and Support Vector
              Regression (SVR) as benchmark methods. After the entire modeling
              process, a prediction model of the near-future price of Bitcoin is
              developed. Forecasting models were configured by the rollover
              framework that allowed the trained machine to close out old
              information and acquire new data over time.
              <br />
              <br />
              Results of Bitcoin Price Formation Jang and Lee (2018) trained the
              BNN model through a 10-fold cross-validation. The performance of
              each trained model was measured by the mean absolute percentage
              error (MAPE) and root mean square error (RMSE) given as follows:
              RMSE = √((∑_(i=1)^N▒〖(y_i-y ̂_i )^2 〗)/N) (2) MAPE = 1/N
              ∑_(i=1)^N▒〖|(y_i-y ̂_i)/y_i |〗 (3) where yi is the i-th true
              objective value, N is the number of samples and y ̂_i is the i-th
              estimated value. The results (in Tables 1) showed that BNN models
              performed better than other models in predicting the log price of
              Bitcoin. The BNN model learned the log price of Bitcoin
              exceptionally well with test and training error of about 1% MAPE.
              Also, the BNN model is more reliable than other models in
              describing the log volatility process. The SVR model performed
              poorly in both test and training phases. Table 1. Test Error for
              the Bitcoin Price Formation Response Variable Log Price Log
              Volatility No of Input Variables 26 16 25 16 Linear Regression
              RMSE - 0.0935 - 0.4823 MAPE - 0.0712 - 0.6263 Bayesian NN RMSE
              0.0039 0.0069 0.2546 0.2325 MAPE 0.0138 0.0180 0.5090 0.5222
              Support Vec. Regression RMSE 0.3201 0.2742 0.5487 0.5297 MAPE
              0.0428 0.0404 0.7232 0.8629
              <br />
              <br />
              Conclusion
              <br />
              Unlike other benchmark models (SVR and Linear Regression) that
              fail directional prediction, the BNN model recorded success in
              relatively accurate direction prediction of the Bitcoin prices.
              Jang and Lee (2018) noted that as the variation of Bitcoin process
              evolves, the application and expansion of the BNN model would be
              effective in the analysis and prediction of the process.
              <br />
              <br />
              Reference
              <br />
              Jang, H., and Lee, J. (2018). An Empirical Study on Modeling and
              Prediction of Bitcoin Prices With Bayesian Neural Networks Based
              on Blockchain Information. IEEE Access, 6, 5427-5437.
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

export default ArticleNineteen;
