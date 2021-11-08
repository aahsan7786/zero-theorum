import { SET_RESOURCES_OPEN, DEFAULT_RESOURCES } from "Store/constants";
import file1 from "../../assets/articles/1.pdf";
import file2 from "../../assets/articles/2.pdf";
import file3 from "../../assets/articles/3.pdf";
import file4 from "../../assets/articles/4.pdf";
import file5 from "../../assets/articles/5.pdf";
import file6 from "../../assets/articles/6.pdf";
import file7 from "../../assets/articles/7.pdf";
import file8 from "../../assets/articles/8.pdf";
import file9 from "../../assets/articles/9.pdf";
import file10 from "../../assets/articles/10.pdf";
import file11 from "../../assets/articles/11.pdf";
import file12 from "../../assets/articles/12.pdf";
import file13 from "../../assets/articles/13.pdf";
import file14 from "../../assets/articles/14.pdf";
import file15 from "../../assets/articles/15.pdf";

const initialState = {
  data: [
    {
      title: "ZERO THEOREM LITERATURE REVIEW",
      pageFile: [
        {
          pdf: file1,
          description:
            "A Gated Recurrent Unit Approach to Bitcoin Price Prediction",
        },
        {
          pdf: file2,
          description:
            "An Empirical Study on Modeling and Prediction of Bitcoin Prices Using Bayesian Neural Networks (BNN) Based on Blockchain Information",
        },
        {
          pdf: file3,
          description:
            "Bitcoin Price Prediction Using Machine Learning: An Approach to Sample Dimension Engineering",
        },
        {
          pdf: file4,
          description: "Ensemble Methods: Bagging, Boosting and Stacking",
        },
        { pdf: file5, description: "Next-Day Bitcoin Price Forecast" },
        {
          pdf: file6,
          description:
            "Predicting Bitcoin Price Direction and Exchange Rate Using Machine Learning Algorithms",
        },
        {
          pdf: file7,
          description:
            "Predicting Bitcoin Returns Using High-Dimensional Technical Indicators",
        },
        {
          pdf: file8,
          description:
            "Predicting Changes in Bitcoin Price Using Grey System Theory",
        },
        { pdf: file9, description: "Price Clustering in Bitcoin" },
        {
          pdf: file10,
          description: "Price Manipulation in the Bitcoin Ecosystem",
        },
        {
          pdf: file11,
          description: "The Determinants of Price Discovery on Bitcoin Markets",
        },
        {
          pdf: file12,
          description: "The Economics of Bitcoin Price Formation",
        },
        { pdf: file13, description: "The Inefficiency of Bitcoin" },
        {
          pdf: file14,
          description:
            "Trend Prediction Classification for High Frequency Bitcoin Time Series with Deep Learning",
        },
        {
          pdf: file15,
          description:
            "Using High-Frequency Entropy to Forecast Bitcoin’s Daily Value at Risk",
        },
      ],
      collapsed: true,
    },
    {
      title: "ZERO THEOREM RATIONALE & BASIC DERIVATIONS",
      pageFile: [
        { pdf: file2, description: "Proximal Policy Optimization Algorithm" },
      ],
      collapsed: true,
    },
    {
      title: "ZERO THEOREM ALPHA LEARNING ALGORITHMS",
      pageFile: [{ pdf: file3, description: "Actor Critic Algorithm" }],
      collapsed: true,
    },
    {
      title: "ZERO THEOREM WEBSITE USER GUIDE",
      pageFile: [
        {
          pdf: file4,
          description:
            "Soft Actor Critic: Off Policy Maximum Entropy Deep Reinforcement Learning with a Stochastic Actor",
        },
      ],
      collapsed: true,
    },
    {
      title: "ZERO THEOREM RESEARCH REPORTS",
      pageFile: [
        {
          pdf: file5,
          description:
            "Soft Actor Critic: Off Policy Maximum Entropy Deep Reinforcement Learning with a Stochastic Actor",
        },
        {
          pdf: file6,
          description:
            "Conservative Q-Learning for Offline Reinforcement Learning",
        },
      ],
      collapsed: true,
    },
  ],
};

export const resourcesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESOURCES_OPEN:
      return {
        data: state.data.map((item, index) => {
          if (index === action.payload) {
            return { ...item, collapsed: !item.collapsed };
          } else {
            return item;
          }
        }),
        default: state.data,
      };
    case DEFAULT_RESOURCES:
      return {
        data: state.default || state.data,
      };
    default:
      return state;
  }
};
