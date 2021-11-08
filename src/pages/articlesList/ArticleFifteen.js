import React from "react";
import article15 from "../../assets/images/article15.png";
import { NavLink } from "react-router-dom";

import { ReactSVG } from "react-svg";
import MathJax from "react-mathjax-preview";
import InfoModalGraph from "../../components/infoModalGraph/infoModalGraph";
import ErrorBoundry from "../../components/error-boundry/ErrorBoundry";
import information from "Images/icons/information.svg";

const ArticleFifteen = () => {
  

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
                  Bitcoin price prediction using machine learning: A sample
                  dimension engineering approach
                </h3>
              </div>
              <br />
              <br />
              Introduction
              <br />
              Chen et al. (2019) predicted Bitcoin price at different
              frequencies using statistical methods and machine learning
              algorithms. The statistical methods used include Linear
              Discriminant Analysis and Logistic Regression while the machine
              learning algorithms include Random Forest, Quadratic Discriminant
              Analysis, XGBoost, Long Short-term Memory (LSTM) and Support
              Vector Machine (SVM).
              <br />
              <br />
              <img src={article15} alt="" />
              <br />
              Figure 1. Overview of the Research Framework
              <br />
              <br />
              Feature Engineering and Evaluation
              <br />
              The first feature type to select for daily Bitcoin price
              prediction relates to the Bitcoin market and trading including
              independent features like transaction value and market
              capitalization. The second feature is based on the significance of
              the price prediction to problem observed in previous works. The
              data for these features were obtained from Blockchain Explorer and
              Bitcoinity.org. Another feature considered is attention from
              investors and media. Finally, Chen et al. (2019) included 12 major
              features in the prediction models. They include Block Size, Number
              of Transactions, Hash Rate, Confirmed Transactions per Day, Mining
              Difficulty, Mempool Transaction Count, Mempool Size, Estimated
              Transaction Value, Market Capitalization, Gold Spot Price, Google
              Trend Search Volume Index, and Total Transaction Fees.
              <br />
              <br />
              Experimental Design and Implementation
              <br />
              Chen et al. (2019) employed two datasets for the study. The first
              includes aggregated Bitcoin daily price from CoinMarketCap.com. It
              also includes trading and market data, property and network data,
              gold spot price, and media and investor attention. The second
              dataset was obtained from Binance and it includes 5-minute
              interval Bitcoin trading price data in real-time. Two statistical
              methods, logistic regression (LR) and linear discriminant analysis
              (LDA) were implemented for Bitcoin daily price with higher
              dimensional features. However, for the 5-minute interval price,
              machine learning models were used. The models include random
              forest (RF), quadratic discriminant analysis (QDA), support vector
              machine (SVM), long short-term memory (LSTM), and XGBoost (XGB).
              <br />
              <br />
              Statistical Methods
              <br />
              Logistic Regression: In Logistic Regression, the value of the
              binary response variable y∈`{`0,1`}`, which represents the class
              label, is predicted by the values of the feature xi , where i = 1,
              . . . , K. The logistic regression model is expressed as follows:
              log it (P (y =1))=log((P(y=1))/(1-P(y=1)))=β_0+β_1 x_1+β_2
              x_2+...+β_k x_k Where P(y = 1) is the probability of the sample
              belonging to class 1 while βi is the regression coefficient of xi.
              <br />
              <br />
              Linear Discriminant Analysis: LDA was used both for classification
              and reduction of the dimensionality of data. It projects data to
              lower-dimensional space where maximum class separability is
              provided.
              <br />
              <br />
              Machine Learning Models
              <br />
              Random Forest: For random forest models, Chen et al. (2019) used
              ensemble of decision trees for various tasks to obtain a better
              classification result. XGBoost: This is an improved version of a
              decision tree as each tree is approximated by a large number of
              regression functions fi(x). After each tree has been optimally
              approximated, the structure’s gain and scores are computed to
              obtain the best split. The prediction result of the model is the
              sum of each decision tree. Quadratic Discriminant Analysis: QDA is
              similar to Linear Discriminant Analysis, however, it enables
              quadratic decision boundaries between classes. The parameters for
              each class is estimated from training points with maximum
              likelihood estimation. Support Vector Machine (SVM): The basic
              principle of Support Vector Machine method is to find the
              separator hyper plane via nonlinear mapping in feature space with
              maximum margin for the classification of the data samples into two
              classes. Long Short-Term Memory: An LSTM unit has a memory cell
              which stores updated information in three special gates: the input
              gate, the output gate and the forget gate. This model performs
              better in extracting long-distance dependencies and in
              representing future and historical information.
              <br />
              <br />
              Results
              <br />
              For Bitcoin daily price prediction, the statistical methods have
              an average accuracy of 65% while the machine learning models have
              an average accuracy of 55.3%. The LR model gave the best results
              with an accuracy of 66%. SVM gave the best performance among the
              machine learning models with an accuracy of 65.3% while XGB gave
              the worst performance with an accuracy of 48.3%. For Bitcoin
              5-minute interval price prediction, the average accuracy of the
              machine learning models was 62.2% (with LSTM having the best
              performance, 67.2%) while that of statistical methods was 53.0%
              (LR gave 54.5% while LDA gave 51.5%).
              <br />
              <br />
              Conclusion
              <br />
              The results obtained showed that statistical methods are better
              for Bitcoin daily price prediction while machine learning models
              are better for Bitcoin 5-minute interval price prediction. The
              research by Chen et al. (2019) has several limitations in data
              analysis and sources. For a more comprehensive study in the
              future, price data with different features, granularities, and
              more dimensions should be collected. Other methods like
              statistical method, ARIMA, and machine learning model, RNN, should
              be considered in future.
              <br />
              <br />
              Reference
              <br />
              Chen, Z., Li, C., and Sun, W. (2019). Bitcoin price prediction
              using machine learning: An approach to sample dimension
              engineering. Journal of Computational and Applied Mathematics.
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

export default ArticleFifteen;
