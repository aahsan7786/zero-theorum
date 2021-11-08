import React from "react";
import "./articles.scss";
import { NavLink } from "react-router-dom";

const ArticleFive = () => {
  return (
    <section className="section hero inner-page articles-one">
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
                  Conservative Q-Learning for Offline Reinforcement Learning
                </h3>
              </div>
              <div className="hero-title">
                <h4>
                  September 2021
                </h4>
              </div>
              <br />
              <br />
              <div className="subtitle-articles">Highlights</div>
              <p>• Suggesting a simple and effective reinforcement learning algorithm that aims to address the limitations by learning a conservative Q-function such that the expected value of a policy under this Q-function which lower- bounds its true value.
                </p>
              <p>• Understand the working of CQL algorithm by evaluating it on different benchmarks.</p>
              <br />
              <div className="subtitle-articles">Background</div>
              With the advancement in reinforcement learning, different deep network func- tions are combined to yield a promising results that plays an important role. Hence, applying these RL solutions to real world problems poses practical chal- lenges where each training run requires active interaction with the environment. However, these large datasets when use with offline RL methods poses major technical difficulties. Sometimes, these existing value-based off-policy RL algo- rithms in an offline setting generally results in poor performance, due to issues with bootstrapping from out-of-distribution actions and over-fitting process. Therefore, there is a need to develop an algorithmic framework which provides a lower bound on the true values because policy evaluation and improvement typically only use the value of the policy that opposed to a point-wise lower bound.
              <br />
              <br />
              <div className="subtitle-articles">Introduction to conservative Q-learning (CQL)</div>
              In this context, a conservative Q-learning (CQL) algorithmic framework is in- troduced [1] that aims to address the limitations by learning a conservative Q- function such that the expected value of a policy under this Q-function lower- bounds its true value. For this purpose, CQL can be implemented with less than 20 lines of code on top of a number of standard, online RL algorithms by adding the CQL regularization terms to the Q-function update. Moreover, researchers demonstrated the efficacy of CQL for offline RL, in domains with complex dataset compositions, where prior methods are typically known to per- form poorly and domains with high-dimensional visual inputs.
              <br />
              <br />
              <div className="subtitle-articles">Working of Conservative Q-Learning</div>
              Now let’s jump towards the working of proposed algorithms that describe two practical offline deep reinforcement learning methods based on CQL. One is n actor-critic variant and other is Q-learning variant that optimizes a well-defined, penalized empirical RL objective, and performs high-confidence safe policy im- provement over the behavior policy. First of all Q-function and policy function is initialized that are parameterized by a neural network with parameters θ. After this initialization, Q-function is trained using gradient steps to improve policy with SAC-style entropy regularization. To implement this algorithm, addition of only 20 lines of code on top of standard implementations of soft actor-critic (SAC) for continuous control experiments and on top of QR-DQN for the discrete control experiments is required.
              <p>In order to compare CQL to prior offline RL methods on a range of domains and dataset compositions, including continuous and discrete action spaces, state observations of varying dimensionality, and high-dimensional image inputs sug- gested algorithm evaluate actor-critic CQL, using CQL(H) on continuous con- trol datasets from the D4RL benchmark by combining multiple policies that are more likely to be common in practical datasets.</p>
              <br />
              <div className="subtitle-articles">Conclusion</div>
              This led to the conclusion that CQL learns a lower bound on the policy value which demonstrate that CQL outperforms prior offline RL methods on a wide range of offline RL benchmark tasks, including complex control tasks and tasks with raw image observations. From the results it is clear that the performance of CQL is substantially better than the best-performing prior methods, exceeding their final returns by 2-5x because of its simplicity and efficacy which make it a promising choice for a wide range of real-world offline RL problems.
              <br />
              <br />
              <div className="subtitle-articles">References</div>

              [1] A. Kumar, A. Zhou, G. Tucker, and S. Levine, “Conservative q-learning for offline reinforcement learning,” 2020.

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

export default ArticleFive;
