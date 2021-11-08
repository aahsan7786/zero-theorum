import React from "react";
import article2 from "../../assets/images/article2.png";
import { NavLink } from "react-router-dom";

import { ReactSVG } from "react-svg";
import MathJax from "react-mathjax-preview";
import InfoModalGraph from "../../components/infoModalGraph/infoModalGraph";
import ErrorBoundry from "../../components/error-boundry/ErrorBoundry";
import information from "Images/icons/information.svg";

const ArticleEighteen = () => {

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
                  Trend Prediction Classification for High-Frequency Bitcoin
                  Time Series with Deep Learning
                </h3>
              </div>
              <br />
              <br />
              Introduction
              <br />
              Shintate and Pichl (2019) carried out a trend prediction
              classification of non-stationary Bitcoin time series using the
              random sampling method (RSM). The framework was based on Deep
              Learning and the study showed that RSM performed better than LSTM
              and multi-layer perceptron (MLP) models.
              <br />
              <br />
              Random Sampling Method
              <br />
              The Concept
              <br />
              According to Shintate and Pichl (2019), the RSM approach was
              inspired by the recent developments of deep learning in image
              processing. Rather than using a static metric comparison, the
              network was trained to learn how to make comparison among sequence
              patterns that belong to different classes.
              <br />
              <br />
              Sampling Scheme
              <br />
              A sampling scheme was set with the assumption that the financial
              data are non-stationary. Given an input sequence xt, Shintate and
              Pichl (2019) sampled sequences from a closed interval
              [t-k-l,t-k]where k represents the window size of the simple moving
              average and l represents the hyper-parameter to determine the size
              of the interval. Encoder
              <br />
              <br />
              Shintate and Pichl (2019) used Encoder to lift a sequence to
              corresponding hidden representation, and used cosine similarity to
              measure the similarity of each pair of hidden representations.
              Encoder has two modules. The study defined a tth input sequence
              xt(input) and the tth samples xt(down), xt(up), and xt(static).
              The tth samples and input sequence were then converted to
              ht(down), ht(up), and ht(static), and ht(input) independently
              using the LSTMNet as given in equation (1). LSTMNet is a recurrent
              neural network (RNN) comprising LSTM units. The settings used in
              the study involved an LSTMNet having two layers with each layer
              containing 32 LSTM units.
              <br />
              h_t=LSTMNet(x_t) (1) The total hidden feature h ̂_ti is given by
              the encoder equation (2) as follows: h ̂_ti=h ⃗_ti+h ⃖_ti+h_ti (2)
              Where h ⃗_ti is the ith output of the bi-directional LSTM network
              in the aligned order while h ⃖_ti is the ith output in the
              reversed order.
              <br />
              <br />
              Dataset: Shintate and Pichl (2019) used the OkCoin Bitcoin market
              (USD and CNY) time-series data at a minute frequency.
              <br />
              <br />
              Experiment and Results
              <br />
              Settings
              <br />
              Shintate and Pichl (2019) utilized the rectified linear unit
              (ReLU) as the activation function in all the layers and this
              improves learning stabilization and leverages sparsity, even in
              deep architectures. The learning rate was set to 10-3, and the
              same hyper-parameter values were used. Thereafter, the dataset was
              separated into the training, validation, and testing parts. For
              the baseline models (LSTM and MLP), the training set was 920,484
              min long, testing was 120,000 min long, and validation was 120,000
              min long. However, for the proposed model (RSM), the training
              period was reduced to 910,352 min while testing and validation
              sets were both 120,000 min long.
              <br />
              <br />
              Trend Prediction
              <br />
              Both LSTM and MLP had two layers with each layer comprising 32
              hidden units. The metric scores of accuracy, F1 measure, precision
              and recall for MLP, LSTM and the proposed RSM (for BTCUSD dataset)
              are given in Table 1 below. Table 1. Model evaluation scores on
              the accuracy, F1 measure, precision, and recall. Accuracy Recall
              Precision F1 Score MLP 0.5559 0.4945 0.4978 0.4786 LSTM 0.5759
              0.5464 0.5717 0.5034 RSM (proposed) 0.6264 0.5538 0.5488 0.5367
              <br />
              From table 1, it can be seen that the F1 score increased with
              noise reduction, and the highest value was recorded for the
              proposed model (RSM). The proposed model also had the highest
              accuracy. However, the LSTM network recorded the highest precision
              because it was biased to output static. Profitability The
              profitability of the models, MLP, LSTM and RSM was computed
              through a simple moving average. The results (for USD) showed that
              MLP had 1.1055, LSTM recorded 1.3157 while RSM proved to be the
              most profitable with 1.3346.
              <br />
              <br />
              Conclusion
              <br />
              The study proved that the RSM model is superior to the MLP and
              LSTM models as a trend prediction classification learning method
              for Bitcoin time series. According to Shintate and Pichl (2019),
              RSM can also be applied to other financial time series beyond
              cryptocurrency markets.
              <br />
              <br />
              Reference
              <br />
              Shintate, T. and Pichl, L. (2019). Trend Prediction Classification
              for High-Frequency Bitcoin Time Series with Deep Learning. J. Risk
              Financial Manag., 12, 17.
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

export default ArticleEighteen;
