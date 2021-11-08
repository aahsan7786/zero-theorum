import React from "react";
import "./articles.scss";
import { NavLink } from "react-router-dom";

// import { ReactSVG } from "react-svg";
// import MathJax from "react-mathjax-preview";
// import InfoModalGraph from "../../components/infoModalGraph/infoModalGraph";
// import ErrorBoundry from "../../components/error-boundry/ErrorBoundry";
// import information from "Images/icons/information.svg";

const ArticleEight = () => {
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
                  Policy Gradient Algorithms
                </h3>
              </div>
              <br />
              <br />
              <div className="hero-title">
                <h4>September 2021</h4>
              </div>
              <br />
              <br />
              <div className="subtitle-articles">
                Introduction to Reinforcement Learning
              </div>
              <br />
              As technology advances, the need to acquire new abilities becomes
              a necessity. However, figuring out how to learn new skills is
              still a work in progress. Therefore, there is a need to comprehend
              the simple answer that allows one to quickly find out the required
              explanation, so that we can empower the human species to do things
              we hadn’t considered before. But with the advent of machines it
              becomes easier for human to learn about new skill but some things
              are still unclear.
              <p className=" mt-1">
                Therefore, to answer this it is necessary to interact with
                environment.Let’s have a look at this scenario by considering an
                infant learning to walk.For this purpose, firstly the child will
                observe you walking that you use two legs and make a step in
                order to walk. To grasp this concept, child tries to replicate
                you. In this way by balancing the body weight, deciding which
                foot to put next and where to put it child start walking. This
                is the point where Reinforcement Learning comes into existence.
              </p>
              <p className=" mt-1">
                To understand the above example,where the child is an agent
                trying to manipulate the environment by taking actions (via
                walking) and tries to go from one state to another where he
                needs to balance the body weight and then take step. Moreover,
                The child gets a reward in the form of chocolate when he/she
                accomplishes a sub module of the task by taking couple of steps
                and will not receive any chocolate when he/she is not able to
                walk.
              </p>
              <br />
              <br />
              <div className="subtitle-articles">
                Evolution of Policy Gradient
              </div>
              <br />
              By exploring the above example, the concept of reinforcement
              learning emerges. Hence, every revolution brings new obstacles
              that must be overcome. Therefore, to address these challenges, a
              method known as policy gradient is used, which focuses on
              modelling and optimising policies directly where human has to take
              actions based on observations. For this purpose, one need to train
              a policy that acts on the basis of observations. To have a better
              understanding let’s have a look at the introduction of policy
              gradient methods.
              <br />
              <br />
              <div className="subtitle-articles">
                What is Policy Gradient method?
              </div>
              <br />
              Policy Gradient method is basically a type of RL approach that
              focuses on optimising parameterized policies in terms of expected
              return [1]. This means that in contrast to classic value function
              approximation approaches, which generate policies from a value
              function, these methods belong to the class of policy search
              strategies that maximise the expected return of a policy in a
              specified policy class. Therefore, these methods avoid issues
              related to the intractability problem caused by uncertain state
              information, and the complexity caused by continuous states and
              actions.
              <p className=" mt-1">
                Hence, these policy gradient approaches differ dramatically
                since they do not suffer from the same issues. For example, if
                no additional state estimator is utilised, uncertainty in the
                state may harm the policy’s performance, but the policy’s
                optimization procedures may not need to be adjusted. Continuous
                states and actions can be dealt with in the same way as discrete
                ones, with the added benefit of improved learning performance.
                At the very least, convergence to a local optimum is guaranteed
                [2].
              </p>
              <p className=" mt-1">
                This led to the consequence that for real world applications,
                policy gradients have a number of advantages. Among the most
                important are the fact that policy representations can be chosen
                to be meaningful for the task and to incorporate domain
                knowledge, that the learning process often requires fewer
                parameters than value-function based approaches, and that there
                are a variety of different policy gradient estimation algorithms
                in the literature with a strong theoretical foundation.
                Furthermore, because policy gradient approaches are a generic
                formulation, they can be applied model-free or model-based.
              </p>
              <p className=" mt-1">
                With its advantages there are some drawbacks of the policy
                gradient that needs to be addressed. They forget data very fast
                in order to avoid the introduction of a bias to the gradient
                estimator. Moreover, the use of sampled data is not very
                efficient. Hence, policy gradient methods are often quite
                demanding to apply, mainly because one has to have considerable
                knowledge about the system one wants to control to make
                reasonable policy definitions. From this we come to the point
                that policy gradients are not the salvation to all problems but
                also have significant problems.
              </p>
              <p className=" mt-1">
                To have a better understanding let’s look at the example of
                policy gradient. For example, if a person is planning to build a
                high jumping robot, he/she has to follow a multitude of styles
                [3]. In this context, current policy gradient methods would be
                helpful for improving a jumping style of a teacher, let’s say
                the classical straddle jump. However, discovering a Fosbery flop
                when starting with a basic straddle jump policy is probably not
                possible with policy gradient methods.
              </p>
              <br />
              <br />
              <div className="subtitle-articles">
                Notations for Policy Gradient Methods
              </div>
              <br />
              Here are some of the notations that help you to explore about the
              different concepts in Policy Gradient.
              <table className="mt-4" width="80%">
                <tr>
                  <th>Symbols</th>
                  <th>Meaning</th>
                </tr>
                <tr>
                  <td>s ∈ S</td>
                  <td>States</td>
                </tr>
                <tr>
                  <td>a ∈ A</td>
                  <td>Actions</td>
                </tr>
                <tr>
                  <td>r ∈ R</td>
                  <td>Rewards</td>
                </tr>
                <tr>
                  <td>S<sub>t</sub> , A<sub>t</sub> , R<sub>t</sub></td>
                  <td>
                    State, action, and reward at time step t of one trajectory
                  </td>
                </tr>
                <tr>
                  <td>γ</td>
                  <td>Discount factor</td>
                </tr>
                <tr>
                  <td>π(a | s)</td>
                  <td>Stochastic policy (agent behavior strategy)</td>
                </tr>
                <tr>
                  <td>µ(s)</td>
                  <td>Deterministic policy</td>
                </tr>
                <tr>
                  <td>V (s)</td>
                  <td>
                    State-value function measures the expected return of state
                  </td>
                </tr>
              </table>
              <br />
              <br />
              <div className="subtitle-articles">References</div>
              <br />
              [1] P. J. and B. J.A., “Policy gradient methods in: Sammut c.,
              webb g. (eds) encyclopedia of machine learning and data mining,”
              2016. [Online]. Available:
              <a href="https://doi.org/10.1007/978-1-4899-7502-7">
                https://doi.org/10.1007/978-1-4899-7502-7
              </a>
              <br />
              <br />
              [2] A. Agarwal, S. M. Kakade, J. D. Lee, and G. Mahajan,
              “Optimality and approximation with policy gradient methods in
              markov decision processes,” in{" "}
              <i>Proceedings of Thirty Third Conference on Learning Theory</i>,
              ser. Proceedings of Machine Learning Research, J. Abernethy and S.
              Agarwal, Eds., vol. 125. PMLR, 09–12 Jul 2020, pp. 64–66.
              [Online]. Available:
              <a href="https://proceedings.mlr.press/v125/agarwal20a.html">
                https://proceedings.mlr.press/v125/agarwal20a.html
              </a>
              <br />
              <br />
              [3] S. Khadka and K. Tumer, “Evolution-guided policy gradient in
              reinforcement learning,” in{" "}
              <i>
                Proceedings of the 32nd International Conference on Neural
                Information Processing Systems
              </i>
              , 2018, pp. 1196–1208.
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

export default ArticleEight;
