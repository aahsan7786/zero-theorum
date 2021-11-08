import React from "react";
import article2 from "../../assets/images/article2.png";
import { NavLink } from "react-router-dom";

import bear from "Images/bear.PNG";

// import { ReactSVG } from "react-svg";
// import MathJax from "react-mathjax-preview";
// import InfoModalGraph from "../../components/infoModalGraph/infoModalGraph";
// import ErrorBoundry from "../../components/error-boundry/ErrorBoundry";
// import information from "Images/icons/information.svg";

const ArticleEleven = () => {
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
                  Stabilizing Off-Policy Q-Learning via Bootstrapping Error
                  Reduction
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
                  Investigation of error accumulation in the bootstrapping
                  process in offpolicy reinforcement learning owing to
                  out-of-distribution inputs.
                </li>
                <li className="mt-2">
                  Developing a principled algorithm called bootstrapping error
                  accumulation reduction (BEAR) to control bootstrapping errors.
                </li>
              </ul>
              <br />
              <br />
              <div className="subtitle-articles">Background</div>
              <br />
              As technology progresses, ML generalizable models learn from large
              amounts of data. Hence, with the introduction of RL algorithms,
              learning from data has become more difficult to scale, as RL can
              readily learn complex behaviour in simulation. Moreover, recent
              off-policy RL methods have demonstrated sampleefficient
              performance on complex tasks in robotics and simulated
              environments. However, these methods can still fail to learn when
              presented with arbitrary off-policy data without the opportunity
              to collect more experience from the environment. Hence,
              performance is constrained due to this complex behaviour.
              Therefore, in order to improve performance, RL algorithms must be
              able to efficiently use data and significantly improve
              generalizations.
              <p className=" mt-1">
                In order to tackle this gap, off-policy RL algorithms are used
                that can leverage experience collected from prior policy and can
                learn entirely from this data. But these approaches fail to
                learn when off-policy data collects experience from the
                environment. However, there is a need to develop an off-policy
                RL method that can learn reasonable policies through training
                static dataset because commonly used off-policy approximate
                dynamic programming methods are sensitive to data distribution
                and can make limited performance. In a nutshell, these recent
                off-policy methods use Q-learning which is an optimal
                state-action value function that represents the expected
                cumulative discounted reward which is represented in Figure 1
              </p>
              <div className="d-flex align-items-center mt-5 flex-column">
                <img src={bear} alt="bear" width={"80%"} />
                <div className="mt-3">
                  Figure 1: Optimal state-action value function
                </div>
              </div>
              <br />
              <br />
              <div className="subtitle-articles">
                Introduction to Bootstrapping Error Accumulation Reduction
                (BEAR)
              </div>
              <br />
              In this context, a robust off-policy approach known as
              bootstrapping error accumulation reduction is presented, in which
              off-policy experience is resolved by not interacting with the
              environment. For this purpose, a practical actor-critic technique
              is implemented which leverages distribution-constrained backups to
              reduce the accumulation of bootstrapping error. This suggests that
              the proposed algorithm has two main components which will appear
              as a modification of the policy improvement steps[1].
              <p className=" mt-1">
                Moreover, researchers analyze the performance of the BEAR
                algorithm against a controlled benchmark task on medium quality
                data as well as random and optimal dataset to empirically
                analyze the error propagation in off-policy RL. In addition, to
                reduce the impact of out-of-distribution actions, a mechanism
                known as BEAR-QL was devised, which requires the backup to
                utilise actions that have non-negligible support under the data
                distribution. Moreover, to enforce that the learned policy
                satisfies the support constraint, researchers use the sampled
                Maximum Mean Discrepancy (MMD) distance between actions as a
                measure of support divergence.
              </p>
              <br />
              <br />
              <div className="subtitle-articles">
                Working of Bootstrapping Error Accumulation Reduction
              </div>
              <br />
              Let’s move toward the working of algorithm that uses
              distribution-constrained backups to reduce accumulation of
              bootstrapping error to have a better understanding. For this
              purpose, Q-functions and the minimum Q-value for policy
              improvements are used along with designing a constraint which will
              be used for searching over the set of policies. First of all set
              of Q-functions are initialized. Then, the policy is updated to
              maximize the conservative estimate of the Q-values. After this a
              differentiable constraint is defined that solve the constrained
              optimization problem via dual gradient descent. Moreover for
              number of iterations, Q-updates and policy-updates are evaluated
              that update the target networks. From this it is clear that , the
              actor is updated towards maximizing the Q-function while still
              being constrained to remain in the valid search space defined due
              to which the Q-function uses actions sampled from the actor to
              then perform distribution-constrained Q-learning, over a reduced
              set of policies.
              <br />
              <br />
              <div className="subtitle-articles">Conclusion</div>
              <br />
              This led to the conclusion that proposed BEAR-QL achieves good
              performance across a range of tasks by substantially stabilizing
              the off-policy RL along with learning random, medium quality and
              expert data. To further enhance the performance of BEAR-QL, a
              robust method that performs exceptionally well in continuous
              action space is required that can examine how well in terms of
              generalization and accuracy, BEAR-QL works on a large-scale
              off-policy learning problem.
              <br />
              <br />
              <div className="subtitle-articles">Reference</div>
              <br />
              [1] A. Kumar, J. Fu, G. Tucker, and S. Levine, “Stabilizing
              off-policy q-learning via bootstrapping error reduction,”{" "}
              <i>arXiv preprint arXiv:1906.00949</i>, 2019.
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

export default ArticleEleven;
