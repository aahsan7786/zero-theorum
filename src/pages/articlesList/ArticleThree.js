import React from "react";
import "./articles.scss";
import {NavLink} from "react-router-dom";
import MathJax from "react-mathjax-preview";
import ac from "Images/ac.PNG";

const ArticleThree = () => {


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
                                    Actor Critic Algorithm
                                </h3>
                            </div>
                            <div className="hero-title">
                                <h4>
                                    September 2021
                                </h4>
                            </div>
                            <br/>
                            <br/>
                            <div className="subtitle-articles">Highlights</div>
                            <p>• Understand how policy evaluation fits into policy gradients that gives rise to the
                                concept of Actor Critic algorithm
                            </p>
                            <p> • Understand the working of Actor Critic Algorithm</p>
                            <br/>
                            <div className="subtitle-articles">Background</div>
                            When dealing with the policy gradient approach, two main essential components are considered
                            such as policy model and value function. Because the usage of value function lowers the
                            gradient variance through which policy updates can be easily assisted. This gives rise to
                            the concept of Actor-Critic method in which critic is used to update the value functions
                            parameters <MathJax wrapperTag={'span'} math={'$w$'}/> that could represent action
                            value <MathJax wrapperTag={'span'} math={'$Q_{w}(a \\mid s)$'}/> or state
                            value <MathJax wrapperTag={'span'} math={'$V_{w}(s)$'}/> whereas when
                            there is a need to update the policy
                            parameter <MathJax wrapperTag={'span'} math={'$\\theta$'}/> for <MathJax wrapperTag={'span'}
                                                                                                     math={'$\\pi_{\\theta}(a \\mid s)$'}/> in
                            direction indicated by
                            critic, actor comes into use.
                            <br/>
                            <br/>
                            <div className="subtitle-articles">Introduction to Actor Critic Algorithm</div>
                            From the background it is clear that Actor-Critic methods are basically the temporal
                            difference (TD) learning methods that represent the policy function independent of the value
                            function where a policy function is used that returns a probability distribution over
                            actions that the agent can take based on the given state. Moreover, with a policy function,
                            a value function is used that determines the expected return for an agent starting at a
                            given state and acting according to a particular policy forever after [1].
                            <p>Hence, in the Actor-Critic method, the policy is referred to as the actor that proposes a
                                set of possible actions given a state, and the estimated value function is referred to
                                as the critic, which evaluates actions taken by the actor based on the given policy .
                            </p>
                            <br/>
                            <div className="subtitle-articles">Working of Actor Critic Algorithm</div>
                            In order to have better understanding let’s dive into the working of the proposed algorithm. For this first of all one needs to initialize the factors such
                            as <MathJax wrapperTag={'span'} math={'$s$, $\\theta$, $ \\omega $'}/> where the sample
                            is <MathJax wrapperTag={'span'} math={'$a \\sim \\pi_{\\theta}(a \\mid s)$'}/>. Following this, a loop from 1 to T begins which is executed till the value of ’T’ is out of range. To execute the loop firstly it is necessary to sample reward which uses current state and action
                            parameters <MathJax wrapperTag={'span'} math={'$r_{t} \\sim R(s, a)$'}/> and next
                            state <MathJax wrapperTag={'span'} math={'$s^{\\prime} \\sim P\\left(s^{\\prime} \\mid s, a\\right)$'}/> . Once these parameters are sampled there is a need to sample the next
                            action <MathJax wrapperTag={'span'} math={'$a^{\\prime} \\sim \\pi_{\\theta}\\left(a^{\\prime} \\mid s^{\\prime}\\right)$'}/> that comes under consideration. After this update the policy
                            parameters <MathJax wrapperTag={'span'} math={'$\\theta \\leftarrow \\theta+\\alpha_{\\theta} Q_{w}(s, a) \\nabla_{\\theta} \\ln \\pi_{\\theta}(a \\mid s)$'}/> that play an important role to compute the TD error at
                            time <MathJax style={{lineHeight: 1.25}} wrapperTag={'span'} math={'$t$, $\n' +
                        '\\delta_{t}=r_{t}+\\gamma Q_{w}\\left(s^{\\prime}, a^{\\prime}\\right)-Q_{w}(s, a)\n' +
                        '$ that is used to update the parameters of the action-value function by \n' +
                        '$w \\leftarrow w+\\alpha_{w} \\delta_{t} \\nabla_{w} Q_{w}(s, a)\n' +
                        '$. At the end update current action and state values to next action and state values $ a \\leftarrow a^{\\prime} \\text { and } s \\leftarrow s^{\\prime}\n' +
                        '$. From this working principle we come to the point that learning rates such as $\n' +
                        'a \\leftarrow a^{\\prime}\n' +
                        '$ and $\n' +
                        's \\leftarrow s^{\\prime}\n' +
                        '$'}/> that is used to update the parameters of the action-value function by w ← w + αw δt ∇w Qw (s, a). At the end update current action and state values to next action and state values a ← a′ and s ← s′. From this working principle we come to the point that learning rates such as a ← a′ and s ← s′ are predefined for policy and value function parameters update [2].
                           <p>To have a better understanding let’s have a look at this algorithm in simple words where the actor decide which action should be taken and critic inform the actor how good was the action and how it should adjust. To do this lets take a example where you imagine you play a video game with a friend that provides you some feedback. You’re the Actor and your friend is the Critic. At the beginning, you don’t know how to play, so you try some action randomly whereas the Critic observes your action and provides feedback to you. To have a better understanding lets look at the architecture of Actor Critic Algorithm</p>
                            <div className="d-flex align-items-center mt-5 flex-column">
                                <img src={ac} alt="ac" width={'35%'}/>
                                <div className="mt-3">
                                    Figure 1: Architecture of Actor Critic Algorithm
                                </div>
                            </div>
                            <br/>

                            <div className="subtitle-articles">Conclusion</div>
                            This led to the conclusion that Actor Critic method is similar to a policy gradient algorithm called REINFORCE with baseline whereas Reinforce is the MONTE- CARLO learning that indicates that total return which is sampled from the full trajectory. But in actor-critic, we use bootstrap.From this it is clear that the learning of the actor is based on policy gradient approach.
                            <br/>
                            <br/>
                            <div className="subtitle-articles">Reference</div>
                            [1] V. R. Konda and J. N. Tsitsiklis, “Actor-critic algorithms,” in Advances in neural information processing systems, 2000, pp. 1008–1014.
                            [2] S. Qiu, Z. Yang, J. Ye, and Z. Wang, “On finite-time convergence of actor- critic algorithm,” IEEE Journal on Selected Areas in Information Theory, vol. 2, no. 2, pp. 652–664, 2021.
                            <br/>
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

export default ArticleThree;
