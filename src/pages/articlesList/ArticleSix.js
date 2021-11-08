import React from "react";
import "./articles.scss";
import { NavLink } from "react-router-dom";

import rl from "Images/rl.PNG";

// import { ReactSVG } from "react-svg";
// import MathJax from "react-mathjax-preview";
// import InfoModalGraph from "../../components/infoModalGraph/infoModalGraph";
// import ErrorBoundry from "../../components/error-boundry/ErrorBoundry";
// import information from "Images/icons/information.svg";

const ArticleSix = () => {
  return (
    <section className="section hero inner-page articles-six">
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
                  All about the “hello world” of Deep Reinforcement Learning
                </h3>
              </div>
              <br />
              <br />
              <div className="hero-title">
                <h4>September 2021</h4>
              </div>
              <p className=" mt-4">
                Have you ever heard of terms like supply chain management,
                demand forecasting, inventory management, and handling warehouse
                operations as business activities in your everyday life? What
                role do these activities play in financial portfolio management,
                as well as market forecasting and trading in commercial
                transaction markets?
              </p>
              <p className=" mt-1">
                Moreover, in your life have you heard about driverless cars? How
                are these manufactured? What are the rules and principles that
                intelligent robots follow in order to adopt specific positions
                in order to move a vehicle while lowering labour expenses and
                boosting productivity? To address all of these potential
                circumstances, the phrase ”deep reinforcement learning” is used.
                But isn’t this statement sometimes ambiguous as to what it
                means? To have a better understanding let’s have a hazy look at
                the evolution of machines that gives rise to the idea of DRL.
              </p>
              <br />
              <br />
              <div className="subtitle-articles">Evolution of Machines</div>
              <br />
              As we all know, we are living in the world of humans and machines.
              Humans have been evolving and learning from their past experience
              for millions of years. On the other hand, the era of machines and
              robots have just begun. Although we can consider it in a way that
              currently we are living in the primitive age of machines, the
              future of machines is enormous and is beyond our scope of
              imagination
              <p className=" mt-1">
                But what if the machine started learning from the environment in
                which they are interacting with each other, do things more
                accurately than us? These things sound fascinating, Right? Well,
                this gives rise to the concept of Reinforcement Learning.
              </p>
              <br />
              <br />
              <div className="subtitle-articles">
                What is Reinforcement Learning?
              </div>
              <br />
              Basically, it’s a behavioural psychology idea that involves using
              a formal framework to tackle decision-making problems. The idea is
              that, like a biological agent, an AI agent may learn by
              interacting with its surroundings. The AI agent should be able to
              maximise various objectives provided in the form of cumulative
              rewards based on the experience gained.
              <p className=" mt-1">
                Hence, the goal of reinforcement learning is to make decisions
                in a sequential manner [1]. In simple terms, the output is
                determined by the current input’s state, and the next input is
                determined by the previous input’s output. This means that RL’s
                approach is significantly more focused on goal-directed
                interactional learning. In order to prove its significance,
                there is a need to establish a good policy, one that utilises
                valued-based methods like Q-learning to assess how good an
                action is in a given state, or policy-based methods to determine
                what actions to take in various situations without first
                evaluating how good the actions are.
              </p>
              <p className=" mt-1">
                However, there are some problems that can be extremely
                complicated and can’t be addressed by typical RL approaches. For
                example, in a game environment when the search space is large
                and multiple agents are interacting with one another, the
                environment can’t be fully observed. To solve this problem, deep
                neural networks come into play that are combined with the RL to
                make it a deep reinforcement learning approach which is a
                mainstream algorithm used to solve different games and sometimes
                achieve superhuman performance. In order to have a better
                understanding about DRL, take a look at the introduction of DRL.
              </p>
              <br />
              <br />
              <div className="subtitle-articles">
                What is Deep Reinforcement Learning?
              </div>
              <br />
              Deep reinforcement learning combines artificial neural networks
              with a reinforcement learning framework to assist software agents
              in learning how to achieve their objectives. It essentially
              combines function approximation with target optimization by
              mapping states and actions to the rewards they produce. However,
              concerns remain, such as how the two work together and how Deep
              Learning improves RL?[2]
              <p className=" mt-1">
                Before answering the above mentioned questions, let’s take a
                look at the key concepts that are associated with RL. For this
                purpose, consider this metaphor: A young child is handed the
                TV’s remote control at your house.
              </p>
              <ol className="ml-5 mt-2">
                <li className="mt-2">
                  <b>Agent:</b> The agent is exactly what it sounds like: an
                  individual that takes actions and learns through its
                  interactions with its surroundings. In the above mentioned
                  metaphor, the child is an agent.
                </li>
                <li className="mt-2">
                  <b>Environment:</b> The physical reality in which the agent
                  operates and executes the setting is referred to as the
                  environment. The environment in the preceding example, for
                  example, is a house with a television, a remote control, and a
                  child.
                </li>
                <li className="mt-2">
                  <b>State:</b> The state of an agent refers to the immediate or
                  current circumstance in which it finds itself, which might be
                  both now and in the future. Basically, it’s a set of external
                  inputs that puts the agent in an immediate scenario. In the
                  above-mentioned metaphor, the current, unaffected state of the
                  house or environment refers to a state.
                </li>
                <li className="mt-2">
                  <b>Action:</b> The action is the variety of possible decisions
                  or movements an agent can make. For example, the child starts
                  to experiment with the remote.
                </li>
                <li className="mt-2">
                  <b>Reward:</b> The reward is positive and negative feedback,
                  which enables the agent to comprehend the consequences of its
                  actions in the current environment. As a result, reinforcement
                  learning’s ultimate goal is to achieve this. To demonstrate
                  the above-mentioned metaphor, the child is essentially
                  rewarded when the TV eventually works. When the TV is
                  non-responsive and silent, the child does less of the action,
                  which is more conducive to negative reward.
                </li>
              </ol>
              <div className="d-flex align-items-center mt-5 flex-column">
                <img src={rl} alt="rl" width={"80%"} />
                <div className="mt-3">Figure 1: Architecture of DRL</div>
              </div>
              <p className=" mt-4">
                From the above mentioned example, it is concluded that today’s
                intelligent robots can learn anything from their activities,
                just as humans do from their experiences. As a result, the
                “deep” part of reinforcement learning is thought to refer to
                several (deep) layers of artificial neural networks that mimic
                the complexity of the human brain [3]. As a result, deep
                learning necessitates a vast amount of training data as well as
                a significant amount of computational capacity. The volume of
                data has expanded in recent years, while the cost of processing
                power has dropped considerably, allowing for an explosion of
                deep learning applications. Hence with the potential use of DRL
                for a range of applications the concept of RL improves.
              </p>
              <br />
              <br />
              <div className="subtitle-articles">Applications of DRL</div>
              <br />
              Some applications which make promising revolutions in world are as
              follows:
              <ul className="ml-5 mt-2">
                <li className="mt-2">
                  <b>Self-driving cars:</b> Autonomous driving makes extensive
                  use of deep reinforcement learning. Interacting agents in
                  autonomous driving scenarios necessitate negotiation and
                  dynamic decision-making, which Reinforcement Learning excels
                  at.
                </li>
                <li className="mt-2">
                  <b>Healthcare:</b> Artificial Intelligence (AI) has enabled
                  the creation of powerful intelligent systems capable of
                  learning about therapeutic treatments, clinical decision
                  support, and discovering new medical knowledge from massive
                  amounts of data collected in the medical profession.
                  Reinforcement Learning enables advancements such as customised
                  medicine, which uses individual patient data to systematically
                  optimise patient health treatment, particularly for chronic
                  illnesses and tumours.
                </li>
                <li className="mt-2">
                  <b>Manufacturing:</b> Intelligent robots are increasingly
                  being used to sort millions of products and deliver them to
                  the right people in warehouses and fulfilment centres. When a
                  robot selects a gadget to place in a container, deep
                  reinforcement learning assists it in gaining knowledge
                  depending on its success or failure. It will make better use
                  of this information in the future.
                </li>
                <li className="mt-2">
                  <b>Bots:</b> Deep reinforcement learning is used to fuel the
                  conversational UI paradigm that allows AI bots to exist.
                  Thanks to deep reinforcement learning, the bots are rapidly
                  learning the intricacies and semantics of language across
                  various domains for automated speech and natural language
                  interpretation.
                </li>
              </ul>
              <br />
              <br />
              <div className="subtitle-articles">
                Challenges of Deep Reinforcement Learning
              </div>
              <br />
              When dealing with DRL, multiple challenges arise. Due to these
              challenges it becomes difficult to explore the environment
              efficiently or to generalize good behavior. These challenges
              appear when moving from a simulated setting to solving real-world
              problems. Some of the challenges are mentioned below:
              <ul className="ml-5 mt-2">
                <li className="mt-2">Limited freedom of the agent</li>
                <li className="mt-2">Reality gap</li>
                <li className="mt-2">Limited observations</li>
              </ul>
              <br />
              But to tackle these issues, solutions are also there:
              <ul className="ml-5 mt-2">
                <li className="mt-2">
                  <b>Simulation:</b> In many circumstances, the implementation
                  of a very accurate simulator is a viable option.
                </li>
                <li className="mt-2">
                  <b>Algorithm Design:</b> The design of the learning
                  algorithms, as well as their generalisation degree, have a
                  significant impact.
                </li>
                <li className="mt-2">
                  <b>Transfer Learning:</b> Transfer learning is a critical
                  strategy for utilising external expertise from other jobs to
                  assist the target task’s learning process.
                </li>
              </ul>
              <br />
              <br />
              <div className="subtitle-articles">Conclusion</div>
              <br />
              From this it is clear that when it is needed to to improve the
              capabilities of our agents along with using them to make a
              positive impact on society, Deep Reinforcement Learning has shown
              a huge significance.
              <br />
              <b>
                “Although still in its infancy, DRL will be a game changer in
                every field.”
              </b>
              <br />
              <br />
              <div className="d-flex justify-content-center subtitle-articles">
                References
              </div>
              <br />
              <br />
              [1] M. A. Wiering and M. Van Otterlo, “Reinforcement learning,” <i>Adaptation, learning, and optimization</i>, vol. 12, no. 3,
              2012.
              <br />
              <br />
              [2] P. Henderson, R. Islam, P. Bachman, J. Pineau, D. Precup, and
              D. Meger, “Deep reinforcement learning that matters,” in <i>
                Proceedings of the AAAI conference on artificial intelligence
              </i>
              , vol. 32, no. 1, 2018.
              <br />
              <br />
              [3] Y. Li, “Deep reinforcement learning: An overview,”
              <i> arXiv preprint arXiv:1701.07274</i>, 2017.
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

export default ArticleSix;
