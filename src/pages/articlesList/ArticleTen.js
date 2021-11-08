import React from "react";
// import article2 from "../../assets/images/article2.png";
import MathJax from "react-mathjax-preview";
import { NavLink } from "react-router-dom";

const ArticleTen = () => {
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
                  Soft Actor-Critic: Off-Policy Maximum Entropy Deep
                  Reinforcement Learning with a Stochastic Actor
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
                  Designing an efficient and stable model free deep RL algorithm
                  for continuous state and action based on the maximum entropy
                  framework.
                </li>
                <li className="mt-2">
                  Understand the key components of SAC algorithm
                </li>
              </ul>
              <br />
              <br />
              <div className="subtitle-articles">Background</div>
              <br />
              When dealing with entropy measure of policy, Soft Actor-Critic
              (SAC) algorithm comes into existence that acts randomly to succeed
              the task. Basically, it’s an off-policy actor-critic model that
              follows the maximum entropy reinforcement learning framework to
              give accurate results by optimizing a stochastic policy in an
              off-policy way, forming a bridge between stochastic policy
              optimization and DDPG-style approaches [1].
              <br />
              <br />
              <div className="subtitle-articles">
                Introduction to Soft Actor-Critic Algorithm
              </div>
              <br />
              Moreover, this algorithm incorporates the clipped double-Q trick,
              and due to the inherent stochastic of the policy in SAC, it also
              winds up benefiting from something like target policy smoothing
              that can be represented in such a way{" "}
              <MathJax
                wrapperTag={"span"}
                math={
                  "$J(\\theta)=\\sum_{t=1}^{T} \\mathbb{E}_{(s_{t}, a_{t}) \\sim \\rho_{\\pi_{\\theta}}}[r(s_{t}, a_{t})+\\alpha \\mathcal{H}(\\pi_{\\theta}(. \\mid s_{t}))]$"
                }
              />
              <p className="mt-1">
                From the above mentioned mathematical representation it is clear
                that the entropy maximization leads to policies that can (1)
                explore more and (2) capture multiple modes of near-optimal
                strategies. There are three key components in SAC that is used
                to maximize the expected return and the entropy. These
                components are as follow: (1) An actor-critic architecture with
                separate policy and value function networks, (2) An off-policy
                formulation that enables reuse of previously collected data for
                efficiency and (3) Entropy maximization to enable stability and
                exploration.
              </p>
              <br />
              <br />
              <div className="subtitle-articles">
                Working of Soft Actor-Critic Algorithm
              </div>
              <br />
              To better understand the SAC algorithm, its necessary to introduce
              the entropyregularized reinforcement learning setting. In
              entropy-regularized RL, there are slightly-different equations for
              value functions.Hence, SAC concurrently learns a policy and two
              Q-functions. From this it is clear that there are two variants of
              SAC that are currently standard: one that uses a fixed entropy
              regularization coefficient and another that enforces an entropy
              constraint by varying coefficient over the course of training. For
              simplicity, spinning up process makes use of the version with a
              fixed entropy regularization coefficient, but the
              entropyconstrained variant is generally preferred by
              practitioners.
              <p className="mt-1">
                Hence, SAC makes use of three networks: a state value function V
                parameterized by Ψ, a soft Q-function Q parameterized by θ and a
                policy function. Once these functions are initialized it’s
                needed to train the value network by minimizing the error which
                is as follow <br />
                <br />
                <div className="d-flex justify-content-center">
                  <MathJax
                    wrapperTag={"span"}
                    math={
                      "$J_{V}(\\psi)=\\mathbb{E}_{\\mathbf{s}_{t} \\sim \\mathcal{D}}[\\frac{1}{2}(V_{\\psi}(\\mathbf{s}_{t})-\\mathbb{E}_{\\mathbf{a}_{t} \\sim \\pi_{\\phi}}[Q_{\\theta}(\\mathbf{s}_{t}, \\mathbf{a}_{t})-log \\pi_{\\phi}(\\mathbf{a}_{t} \\mid \\mathbf{s}_{t})])^{2}]$"
                    }
                  />
                </div>
              </p>
              <br />
              <br />
              <div className="subtitle-articles">Conclusion</div>
              <br />
              Hence, it is concluded that soft actor-critic (SAC) which is an
              off-policy maximum entropy deep reinforcement learning algorithm,
              provides sample-efficient learning while retaining the benefits of
              entropy maximization and stability. From the results it is clear
              that stochastic, entropy maximizing reinforcement learning
              algorithms can provide a promising avenue for improved robustness
              and stability
              <br />
              <br />
              <div className="subtitle-articles">References</div>
              <br />
              [1] T. Haarnoja, A. Zhou, P. Abbeel, and S. Levine, “Soft
              actor-critic: Offpolicy maximum entropy deep reinforcement
              learning with a stochastic actor,” 2018.
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

export default ArticleTen;
