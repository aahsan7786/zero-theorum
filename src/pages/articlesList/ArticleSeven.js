import React from "react";
import "./articles.scss";
import { NavLink } from "react-router-dom";

import plas from "Images/plas.PNG";

// import { ReactSVG } from "react-svg";
// import MathJax from "react-mathjax-preview";
// import InfoModalGraph from "../../components/infoModalGraph/infoModalGraph";
// import ErrorBoundry from "../../components/error-boundry/ErrorBoundry";
// import information from "Images/icons/information.svg";

const ArticleSeven = () => {
  return (
    <section className="section hero inner-page articles-one articles-six">
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
                  PLAS: Latent Action Space for Offline Reinforcement Learning
                </h3>
              </div>
              <br />
              <br />
              <div className="hero-title">
                <h4>September 2021</h4>
              </div>
              <br />
              <br />
              <div className="subtitle-articles">Highlights</div>
              <br />
              <ul className="ml-5 mt-2">
                <li className="mt-2">
                  Instead of implementing explicit limits, alter the action
                  space to eliminate out-of-distribution actions in the Offline
                  Reinforcement Learning problem.
                </li>
                <li className="mt-2">
                  Building a basic offline RL strategy that implicitly
                  constrains the policy to be within the datasets support
                  without being constrained by the datasets density
                  distribution.
                </li>
              </ul>
              <br />
              <br />
              <div className="subtitle-articles">Background</div>
              <br />
              With the advent of RL, acquiring a huge amount of interactive data
              to learn a policy gains is an important concept. Hence, in safety
              critical situations where it is necessary to perform a task by
              interacting with the environment, data collection is quite
              challenging and potentially dangerous. However, there is a need to
              use data intelligently so that policy may be updated and the key
              paradigm for real-world applications is increased.
              <p className=" mt-1">
                In order to use this data in a better way, offline RL comes into
                existence whose goal is to learn a policy from a static dataset
                of transitions without the need for additional data. Although a
                large amount of data is needed, that will allow static data to
                be more flexible. For example, in robotics, one can include
                human demonstrations, reuse roll-outs from previous experiments,
                and share data within the community. In this way, the dataset is
                more likely to be scaled up in size even when data collection is
                expensive.
              </p>
              <br />
              <br />
              <div className="subtitle-articles">
                Introduction to Policy in the Latent Action Space
              </div>
              <br />
              But the problem is more significant when the action space is
              large, such as continuous action space with high dimensions.
              Therefore, there is a need to fix the issue by utilizing the
              policy that should be constrained to select actions within the
              support of the dataset. However, different off policy algorithms
              are used but they have limited performance on static dataset due
              to extrapolation errors from out-of-distribution actions. Hence,
              these explicit constraints create difficulties in the optimization
              and distance metrics such as KL will be affected by the
              density.Below are the two policy constraints that are considered.
              <div className="d-flex align-items-center mt-5 flex-column">
                <img src={plas} alt="plas" width={"80%"} />
                <div className="mt-3">
                  Figure 1: Explicit vs Implicit Policy Constraint
                </div>
              </div>
              <br />
              <br />
              <div className="subtitle-articles">Working of PLAS</div>
              <br />
              In this regard, Policy in the Latent Action Space (PLAS) is
              designed that evaluate the proposed method on continuous control
              benchmarks in simulation and a deformable object manipulation task
              with a physical robot. As the previous model in this regard model
              the behavior policy of the dataset as a Conditional Variational
              Auto-encoder (CVAE) so this proposed methodology learn a policy in
              the latent action space of the CVAE and then use its decoder to
              output an action in the original action space of the environment.
              Moreover, proposed method demonstrate that PLAS allows
              generalization within the dataset and can provide consistently
              good performance for datasets with diverse actions [1].
              <p className=" mt-1">
                In order to validate the proposed method it is evaluated on
                continuous control tasks from the d4rl benchmark datasets to
                achieve consistent performance across a wide range of datasets
                with different environments and qualities despite its
                simplicity. Moreover, to further analyze the result, the
                estimation error of the learned Q-functions are compared with
                their true return from the roll-outs.
              </p>
              <br />
              <br />
              <div className="subtitle-articles">Conclusion</div>
              <br />
              This led to the conclusion that proposed policy in latent action
              space named PLAS is a simple and straightforward approach to
              offline RL. From the results it is clear that proposed approach
              naturally avoids out-of-distribution actions while allowing the
              flexibility for improvement over the performance of the dataset
              through implicit constraints along with achieving competitive
              performance in both simulated environments and a real robot
              experiment. Additionally proposed methodology provided the
              analyses on Q-function estimation error and the separation of
              in-distribution vs. out-of-distribution generalization in Offline
              RL that will pave the way for future possibilities of applying
              reinforcement learning algorithms to real-world applications by
              using the static datasets more efficiently.
              <br />
              <br />
              <div className="subtitle-articles">Reference</div>
              <br />
              [1] W. Zhou, S. Bajracharya, and D. Held, “Plas: Latent action
              space for offline reinforcement learning,”{" "}
              <i>arXiv preprint arXiv:2011.07213</i>, 2020.
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

export default ArticleSeven;
