import {
  FILTER_BY_SEARCH,
  TOGGLE_TAG,
  LOAD_DASHBOARD_PAGE_SUCCESS_RESEARCH,
} from "Store/constants";
import forecast from "../../assets/images/icons/forecast.svg";
import forecastActive from "../../assets/images/icons/forecast-active.svg";
import baseline from "../../assets/images/icons/baseline-model.svg";
import baselineActive from "../../assets/images/icons/baseline-model-active.svg";
import stylized from "../../assets/images/icons/stylized-attributes.svg";
import stylizedActive from "../../assets/images/icons/stylized-attributes-active.svg";
import feature from "../../assets/images/icons/feature-exploration.svg";
import featureActive from "../../assets/images/icons/feature-exploration-active.svg";
import market from "../../assets/images/icons/market-metrics.svg";
import marketActive from "../../assets/images/icons/market-metrics-active.svg";
import global from "../../assets/images/icons/global-correlation.svg";
import globalActive from "../../assets/images/icons/global-correlation-active.svg";
import data from "../../assets/images/icons/data.svg";
import volatility from "../../assets/images/icons/volatility.svg";
import dataActive from "../../assets/images/icons/data-active.svg";

const initialState = {
  data: [
    {
      id: 1,
      banner: "https://i.ibb.co/QbtZ7SL/Mask-Group-1.png",
      preview: ["https://i.ibb.co/QbtZ7SL/Mask-Group-1.png"],
      title: "A2C Algorithm",
      date: "Aug 29",
      timeRead: "4 Min",
      description:
        "Understand the concept of synchronous Advantage Actor Critic Algorithm by comparing the architecture with A3C that enables the concept of par- allelism",
      tags: ["ZT Literature Review"],
    },
    {
      id: 2,
      banner: "https://i.ibb.co/gMfY58W/Mask-Group-2.png",
      preview: ["https://i.ibb.co/gMfY58W/Mask-Group-2.png"],
      title:
        "AWAC: Accelerating Online Reinforcement Learning with Offline Datasets",
      date: "Aug 29",
      timeRead: "4 Min",
      description:
        "Whether implementing AWAC can effectively combine prior data with online experience to learn complex robotic control tasks more efficiently than prior methods or not?",
      tags: ["ZT Literature Review"],
    },
    {
      id: 3,
      banner: "https://i.ibb.co/X80G0CD/Mask-Group-3.png",
      preview: ["https://i.ibb.co/X80G0CD/Mask-Group-3.png"],
      title: "Actor Critic Algorithm",
      date: "Aug 29",
      timeRead: "4 Min",
      description:
        "Understand how policy evaluation fits into policy gradients that gives rise to the concept of Actor Critic algorithm",
      tags: ["ZT Literature Review"],
    },
    {
      id: 4,
      banner: "https://i.ibb.co/qdDhWYY/Mask-Group-4.png",
      preview: ["https://i.ibb.co/qdDhWYY/Mask-Group-4.png"],
      title:
        "Advantage-Weighted Regression: Simple and Scalable Off-Policy Reinforcement Learning",
      date: "Aug 29",
      timeRead: "4 Min",
      description:
        "Suggesting a simple and scalable reinforcement learning algorithm that uses standard supervised learning methods as a subroutines by incorpo- rating off-policy data from experience replay",
      tags: ["ZT Literature Review"],
    },
    {
      id: 5,
      banner: "https://i.ibb.co/DKPMkTd/Mask-Group-5.png",
      preview: ["https://i.ibb.co/DKPMkTd/Mask-Group-5.png"],
      title: "Conservative Q-Learning for Offline Reinforcement Learning",
      date: "Aug 29",
      timeRead: "4 Min",
      description: "Suggesting a simple and effective reinforcement learning algorithm that aims to address the limitations by learning a conservative Q-function such that the expected value of a policy under this Q-function which lower- bounds its true value.",
      tags: ["ZT Literature Review"],
    },
    {
      id: 6,
      banner: "https://i.ibb.co/2cNkGGg/Mask-Group-6.png",
      preview: ["https://i.ibb.co/2cNkGGg/Mask-Group-6.png"],
      title: "All about the “hello world” of Deep Reinforcement Learning",
      date: "Aug 29",
      timeRead: "4 Min",
      description: "Have you ever heard of terms like supply chain management, demand forecasting, inventory management, and handling warehouse operations as business activities in your everyday life?",
      tags: ["ZT Literature Review"],
    },
    {
      id: 7,
      banner: "https://i.ibb.co/X80G0CD/Mask-Group-3.png",
      preview: ["https://i.ibb.co/X80G0CD/Mask-Group-3.png"],
      title: "PLAS: Latent Action Space for Offline Reinforcement Learning",
      date: "Aug 29",
      timeRead: "4 Min",
      description: "Instead of implementing explicit limits, alter the action space to eliminate out-of-distribution actions in the Offline Reinforcement Learning problem",
      tags: ["ZT Literature Review"],
    },
    {
      id: 8,
      banner: "https://i.ibb.co/qdDhWYY/Mask-Group-4.png",
      preview: ["https://i.ibb.co/qdDhWYY/Mask-Group-4.png"],
      title: "Policy Gradient Algorithms",
      date: "Aug 29",
      timeRead: "4 Min",
      description: "As technology advances, the need to acquire new abilities becomes a necessity",
      tags: ["ZT Literature Review"],
    },
    {
      id: 9,
      banner: "https://i.ibb.co/QbtZ7SL/Mask-Group-1.png",
      preview: ["https://i.ibb.co/QbtZ7SL/Mask-Group-1.png"],
      title: "Proximal Policy Optimization Algorithm",
      date: "Aug 29",
      timeRead: "4 Min",
      description: "Introducing an algorithm that attains the data efficiency and reliable performance of Trust region policy optimization (TRPO), while using only first-order optimization",
      tags: ["ZT Literature Review"],
    },
    {
      id: 10,
      banner: "https://i.ibb.co/DKPMkTd/Mask-Group-5.png",
      preview: ["https://i.ibb.co/DKPMkTd/Mask-Group-5.png"],
      title:
        "Soft Actor-Critic: Off-Policy Maximum Entropy Deep Reinforcement Learning with a Stochastic Actor",
      date: "Aug 29",
      timeRead: "4 Min",
      description: "Designing an efficient and stable model free deep RL algorithm for continuous state and action based on the maximum entropy framework",
      tags: ["ZT Literature Review"],
    },
    {
      id: 11,
      banner: "https://i.ibb.co/X80G0CD/Mask-Group-3.png",
      preview: ["https://i.ibb.co/X80G0CD/Mask-Group-3.png"],
      title:
        "Stabilizing Off-Policy Q-Learning via Bootstrapping Error Reduction",
      date: "Aug 29",
      timeRead: "4 Min",
      description: "Investigation of error accumulation in the bootstrapping process in offpolicy reinforcement learning owing to out-of-distribution inputs",
      tags: ["ZT Literature Review"],
    },
    // {
    //     id: 12,
    //     banner: 'https://i.ibb.co/2cNkGGg/Mask-Group-2.png',
    //     preview: [
    //         'https://i.ibb.co/2cNkGGg/Mask-Group-2.png',
    //     ],
    //     title: 'Bitcoin Pricing, Usage, and Adoption: Theory and Evidence',
    //     date: 'Aug 29',
    //     timeRead: '4 Min',
    //     description: 'Ayodeji Awosika in Forge',
    //     tags: ['ZT Literature Review']
    // },
    // {
    //     id: 13,
    //     banner: 'https://i.ibb.co/qdDhWYY/Mask-Group-4.png',
    //     preview: [
    //         'https://i.ibb.co/qdDhWYY/Mask-Group-4.png',
    //     ],
    //     title: 'The determinants of Price Discovery on Bitcoin Markets',
    //     date: 'Aug 29',
    //     timeRead: '4 Min',
    //     description: 'Ayodeji Awosika in Forge',
    //     tags: ['ZT Literature Review']
    // },
    // {
    //     id: 14,
    //     banner: 'https://i.ibb.co/QbtZ7SL/Mask-Group-1.png',
    //     preview: [
    //         'https://i.ibb.co/QbtZ7SL/Mask-Group-1.png',
    //     ],
    //     title: 'Price manipulation in the Bitcoin ecosystem',
    //     date: 'Aug 29',
    //     timeRead: '4 Min',
    //     description: 'Ayodeji Awosika in Forge',
    //     tags: ['ZT Literature Review']
    // },
    // {
    //     id: 15,
    //     banner: 'https://i.ibb.co/X80G0CD/Mask-Group-3.png',
    //     preview: [
    //         'https://i.ibb.co/X80G0CD/Mask-Group-3.png',
    //     ],
    //     title: 'Bitcoin price prediction using machine learning: A sample dimension engineering approach',
    //     date: 'Aug 29',
    //     timeRead: '4 Min',
    //     description: 'Ayodeji Awosika in Forge',
    //     tags: ['ZT Literature Review']
    // },
    // {
    //     id: 16,
    //     banner: 'https://i.ibb.co/2cNkGGg/Mask-Group-3.png',
    //     preview: [
    //         'https://i.ibb.co/2cNkGGg/Mask-Group-3.png',
    //     ],
    //     title: 'Using High-Frequency Entropy to Forecast Bitcoin’s Daily Value at Risk',
    //     date: 'Aug 29',
    //     timeRead: '4 Min',
    //     description: 'Ayodeji Awosika in Forge',
    //     tags: ['ZT Literature Review']
    // },
    // {
    //     id: 17,
    //     banner: 'https://i.ibb.co/qdDhWYY/Mask-Group-4.png',
    //     preview: [
    //         'https://i.ibb.co/qdDhWYY/Mask-Group-4.png',
    //     ],
    //     title: 'Predicting bitcoin returns using high-dimensional technical indicators.',
    //     date: 'Aug 29',
    //     timeRead: '4 Min',
    //     description: 'Ayodeji Awosika in Forge',
    //     tags: ['ZT Literature Review']
    // },
    // {
    //     id: 18,
    //     banner: 'https://i.ibb.co/gMfY58W/Mask-Group-2.png',
    //     preview: [
    //         'https://i.ibb.co/gMfY58W/Mask-Group-2.png',
    //     ],
    //     title: 'Trend Prediction Classification for High-Frequency Bitcoin Time Series with Deep Learning',
    //     date: 'Aug 29',
    //     timeRead: '4 Min',
    //     description: 'Ayodeji Awosika in Forge',
    //     tags: ['ZT Literature Review']
    // },
    // {
    //     id: 19,
    //     banner: 'https://i.ibb.co/QbtZ7SL/Mask-Group-1.png',
    //     preview: [
    //         'https://i.ibb.co/QbtZ7SL/Mask-Group-1.png',
    //     ],
    //     title: 'An Empirical Study on Modeling and Prediction of Bitcoin Prices Using Bayesian Neural Networks (BNN) Based on Blockchain Information ',
    //     date: 'Aug 29',
    //     timeRead: '4 Min',
    //     description: 'Ayodeji Awosika in Forge',
    //     tags: ['ZT Literature Review']
    // },

    // {
    //     banner: 'https://images.unsplash.com/photo-1602096933111-f11679566597?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    //     preview: [
    //         '../../assets/images/resources.png',
    //         'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    //     ],
    //     title: 'Zero Theorem Executive Summary',
    //     date: 'Aug 29',
    //     timeRead: '4 min',
    //     description: 'Ayodeji Awosika in Forge',
    //     tags: ['Literature Review', 'Research']
    // },
    // {
    //     banner: 'https://images.unsplash.com/photo-1602096933111-f11679566597?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    //     preview: [
    //         'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    //     ],
    //     title: 'Bitcoin price prediction using machine learning',
    //     date: 'Aug 29',
    //     timeRead: '4 min',
    //     description: 'Ayodeji Awosika in Forge',
    //     tags: ['Literature Review', 'Research']
    // },
    // {
    //     banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    //     preview: [
    //         'https://images.unsplash.com/photo-1543699539-33a389c5dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1591994843349-f415893b3a6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/flagged/photo-1554386690-ddcab0b98d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    //     ],
    //     title: 'Predicting Bitcoin Price Direction Exchange Rate U',
    //     date: 'Aug 29',
    //     timeRead: '4 min',
    //     description: 'Mallqui and Fernandes (2018) used machine learning techniques to predict the price direction as well as the maximum, minimum and closing prices of daily Bitcoin exchange rate',
    //     tags: ['Performance reports']
    // },
    // {
    //     banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    //     preview: [
    //         'https://images.unsplash.com/photo-1550565227-a6144af19c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    //     ],
    //     title: 'The Economics of Bitcoin Price Formation',
    //     date: 'Aug 29',
    //     timeRead: '4 min',
    //     description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global',
    //     tags: ['Literature Review']
    // },
    // {
    //     banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    //     preview: [
    //         'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    //     ],
    //     title: 'A Gated Recurrent Unit Approach to Bitcoin Price P-1',
    //     date: 'Aug 29',
    //     timeRead: '4 min',
    //     description: 'Traditional neural networks have shortcomings in effectively using prior information for future predictions of Bitcoin price. Therefore, Dutta et al. (2020) investigated a framework',
    //     tags: ['Research']
    // },
    // {
    //     banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    //     preview: [
    //         'https://images.unsplash.com/photo-1559406041-c7d2b2e98690?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    //     ],
    //     title: 'Predicting Bitcoin Price Direction Exchange Rate U',
    //     date: 'Aug 29',
    //     timeRead: '4 min',
    //     description: 'Mallqui and Fernandes (2018) used machine learning techniques to predict the price direction as well as the maximum, minimum and closing prices of daily Bitcoin exchange rate',
    //     tags: ['Performance', 'Research']
    // },
    // {
    //     banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    //     preview: [
    //         'https://images.unsplash.com/photo-1465815367149-ca149851a3a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    //     ],
    //     title: 'The Economics of Bitcoin Price Formation',
    //     date: 'Aug 29',
    //     timeRead: '4 min',
    //     description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global',
    //     tags: ['Literature Review', 'Performance']
    // },
    // {
    //     banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    //     preview: [
    //         'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    //     ],
    //     title: 'A Gated Recurrent Unit Approach to Bitcoin Price P-1',
    //     date: 'Aug 29',
    //     timeRead: '4 min',
    //     description: 'Traditional neural networks have shortcomings in effectively using prior information for future predictions of Bitcoin price. Therefore, Dutta et al. (2020) investigated a framework',
    //     tags: ['Research']
    // },
    // {
    //     banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    //     preview: [
    //         'https://images.unsplash.com/photo-1502514276381-1ea51dfe201c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    //     ],
    //     title: 'Predicting Bitcoin Price Direction Exchange Rate U',
    //     date: 'Aug 29',
    //     timeRead: '4 min',
    //     description: 'Mallqui and Fernandes (2018) used machine learning techniques to predict the price direction as well as the maximum, minimum and closing prices of daily Bitcoin exchange rate',
    //     tags: ['Literature Review']
    // },
    // {
    //     banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    //     preview: [
    //         'https://images.unsplash.com/photo-1495542779398-9fec7dc7986c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    //     ],
    //     title: 'The Economics of Bitcoin Price Formation',
    //     date: 'Aug 29',
    //     timeRead: '4 min',
    //     description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global',
    //     tags: ['Performance Reports']
    // },
    // {
    //     banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    //     preview: [
    //         'https://images.unsplash.com/photo-1502514276381-1ea51dfe201c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    //     ],
    //     title: 'A Gated Recurrent Unit Approach to Bitcoin Price P-1',
    //     date: 'Aug 29',
    //     timeRead: '4 min',
    //     description: 'Traditional neural networks have shortcomings in effectively using prior information for future predictions of Bitcoin price. Therefore, Dutta et al. (2020) investigated a framework',
    //     tags: ['Research']
    // },
    // {
    //     banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    //     preview: [
    //         'https://images.unsplash.com/photo-1550565227-a6144af19c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    //     ],
    //     title: 'Predicting Bitcoin Price Direction Exchange Rate U',
    //     date: 'Aug 29',
    //     timeRead: '4 min',
    //     description: 'Mallqui and Fernandes (2018) used machine learning techniques to predict the price direction as well as the maximum, minimum and closing prices of daily Bitcoin exchange rate',
    //     tags: ['Literature Review', 'Performance Reports']
    // },
    // {
    //     banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    //     preview: [
    //         'https://images.unsplash.com/photo-1550565227-a6144af19c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    //     ],
    //     title: 'The Economics of Bitcoin Price Formation',
    //     date: 'Aug 29',
    //     timeRead: '4 min',
    //     description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global',
    //     tags: ['Literature Review']
    // },
    // {
    //     banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    //     preview: [
    //         'https://images.unsplash.com/photo-1550565227-a6144af19c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    //     ],
    //     title: 'A Gated Recurrent Unit Approach to Bitcoin Price P-1',
    //     date: 'Aug 29',
    //     timeRead: '4 min',
    //     description: 'Traditional neural networks have shortcomings in effectively using prior information for future predictions of Bitcoin price. Therefore, Dutta et al. (2020) investigated a framework',
    //     tags: ['Research']
    // },
    // {
    //     banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    //     preview: [
    //         'https://images.unsplash.com/photo-1550565227-a6144af19c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    //     ],
    //     title: 'Predicting Bitcoin Price Direction Exchange Rate U',
    //     date: 'Aug 29',
    //     timeRead: '4 min',
    //     description: 'Mallqui and Fernandes (2018) used machine learning techniques to predict the price direction as well as the maximum, minimum and closing prices of daily Bitcoin exchange rate',
    //     tags: ['Performance Reports']
    // },
    // {
    //     banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    //     preview: [
    //         'https://images.unsplash.com/photo-1550565227-a6144af19c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    //     ],
    //     title: 'The Economics of Bitcoin Price Formation',
    //     date: 'Aug 29',
    //     timeRead: '4 min',
    //     description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global',
    //     tags: ['Literature Review', 'Research']
    // },
    // {
    //     banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    //     preview: [
    //         'https://images.unsplash.com/photo-1550565227-a6144af19c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    //     ],
    //     title: 'A Gated Recurrent Unit Approach to Bitcoin Price P-1',
    //     date: 'Aug 29',
    //     timeRead: '4 min',
    //     description: 'Traditional neural networks have shortcomings in effectively using prior information for future predictions of Bitcoin price. Therefore, Dutta et al. (2020) investigated a framework',
    //     tags: ['Literature Review', 'Performance Reports']
    // },
    // {
    //     banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    //     preview: [
    //         'https://images.unsplash.com/photo-1550565227-a6144af19c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    //     ],
    //     title: 'Predicting Bitcoin Price Direction Exchange Rate U',
    //     date: 'Aug 29',
    //     timeRead: '4 min',
    //     description: 'Mallqui and Fernandes (2018) used machine learning techniques to predict the price direction as well as the maximum, minimum and closing prices of daily Bitcoin exchange rate',
    //     tags: ['Literature Review', 'Performance Reports', 'Research']
    // },
    // {
    //     banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    //     preview: [
    //         'https://images.unsplash.com/photo-1550565227-a6144af19c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    //         'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    //     ],
    //     title: 'The Economics of Bitcoin Price Formation',
    //     date: 'Aug 29',
    //     timeRead: '4 min',
    //     description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global',
    //     tags: []
    // },
  ],
  tags: [
    {
      id: 0,
      title: "ZT Literature Review",
      isActive: true,
    },
    {
      id: 1,
      title: "ZT Documentation",
      isActive: false,
    },
    {
      id: 2,
      title: "ZT Use Cases",
      isActive: false,
    },
    {
      id: 3,
      title: "ZT Research",
      isActive: false,
    },
  ],
  isLoading: false,
  error: null,
  navData: [
    {
      title: "Forecast",
      pathName: "forecast",
      icon: forecast,
      iconActive: forecastActive,
    },
    {
      title: "Volatility-Factors",
      pathName: "volatility-factors",
      icon: volatility,
      iconActive: volatility,
    },
    {
      title: "Macro-Factors",
      pathName: "macro-factors",
      icon: stylized,
      iconActive: stylizedActive,
    },
    {
      title: "Micro-Factors",
      pathName: "micro-factors",
      icon: feature,
      iconActive: featureActive,
    },
    {
      title: "Resources",
      pathName: "resources",
      icon: market,
      iconActive: marketActive,
    },
  ],
  currentNavData: {
    icon: null,
    title: "",
  },
};

export const researchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TAG:
      console.log("action.payload", action.payload);
      const tag = state.tags[action.payload];
      const newTag = { ...tag, isActive: !tag.isActive };

      return {
        ...state,
        tags: [
          ...state.tags.slice(0, action.payload),
          newTag,
          ...state.tags.slice(action.payload + 1),
        ],
      };
    case FILTER_BY_SEARCH:
      // const filteredPosts = [...state.data.filter(post => post.title.toLowerCase().includes(action.payload.toLowerCase()))];
      const filteredPosts = [
        ...initialState.data.filter((post) =>
          post.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      ];
      return {
        ...state,
        data: [...filteredPosts],
        initialState: initialState.data[0],
      };
    case LOAD_DASHBOARD_PAGE_SUCCESS_RESEARCH:
      return {
        ...state,
        currentNavData: action.payload,
      };
    default:
      return state;
  }
};
