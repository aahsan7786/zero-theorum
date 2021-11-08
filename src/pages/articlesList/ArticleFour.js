import React from "react";
import "./articles.scss";
import {NavLink} from "react-router-dom";
import MathJax from "react-mathjax-preview";

const ArticleFour = () => {

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
                                    Advantage-Weighted Regression: Simple and Scalable Off-Policy Reinforcement Learning
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
                            <p>• Suggesting a simple and scalable reinforcement learning algorithm that uses standard
                                supervised learning methods as a subroutines by incorpo- rating off-policy data from
                                experience replay.
                            </p>
                            <p>• Understand the working of AWR algorithm by evaluating it on different benchmarks.
                            </p>
                            <br/>
                            <div className="subtitle-articles">Background</div>
                            When it comes to training agents to learn complex behaviour despite making few assumptions
                            about the underlying goal, model-free reinforcement learning proves to be a useful strategy.
                            Hence, these reinforcement learning techniques can be substantially more complex to
                            implement and tune as compared to stan- dard supervised learning methods. However, these
                            methods can be notoriously unstable and are typically on-policy, often requiring a
                            substantial number of samples to learn effective behaviors. Therefore, there is a need to
                            develop a reinforcement learning algorithm that is simple, easy to implement, and can
                            readily incorporate off-policy experience data.
                            <br/>
                            <br/>
                            <div className="subtitle-articles">Introduction to Advantage-weighted regression</div>
                            In this regard, advantage-weighted regression (AWR), a simple off-policy algo- rithm for
                            model-free RL, is introduced, with each iteration consisting of just two supervised
                            regression steps: one for training a value function baseline via regres- sion onto
                            cumulative rewards, and another for training the policy via weighted regression [1].
                            Furthermore, AWR can handle both continuous and discrete ac- tions, and it can be built on
                            top of ordinary supervised learning methods in just a few lines of code.
                            <br/>
                            <br/>
                            <div className="subtitle-articles">Working of Advantage-Weighted Regression</div>
                            To have a better understanding of AWR let’s have a look at the working of algorithm. For
                            this purpose, first of all random policy is defined and after defining the random policy,
                            iterations are performed in which each iteration <MathJax wrapperTag={'span'}
                                                                                      math={'$k$'}/> of AWR consists of
                            the following simple steps. First, the current policy is used to sample a batch of
                            trajectories that are then stored in the replay buffer <MathJax wrapperTag={'span'}
                                                                                            math={'$D$'}/>, which is
                            structured as a first-in first-out (FIFO) queue, which is common for off-policy
                            reinforcement learning algorithms. After this the entire buffer <MathJax wrapperTag={'span'}
                                                                                                     math={'$D$'}/> is
                            used to fit a value
                            function to the trajectories in the replay buffer, which can be done with simple Monte Carlo
                            return estimates. At the end the same buffer is used to fit a new policy using
                            advantage-weighted regression, where each state-action pair in the buffer is weighted
                            according to the exponential advantage which suggests that AWR uses only supervised
                            regression as learning subroutines, making the algorithm very simple to implement.
                            <p>In order to comparatively evaluate the performance of AWR to commonly used on policy and
                                off-policy deep RL algorithms, proposed algorithm is evalu- ated on Open-AI Gym
                                benchmarks consisting of discrete and continuous control tasks that demonstrate the
                                effectiveness on fully off-policy learning, by training on static datasets of
                                demonstrations collected from demo policies.</p>
                            <br/>
                            <div className="subtitle-articles">Conclusion</div>
                            This led to the conclusion that suggested algorithm is able to solve challenging control
                            tasks with complex simulated agents, by achieving competitive perfor- mance on standard
                            benchmarks compared to a number of well-established RL algorithms. From the results it is
                            clear that AWR is also able to learn from fully off-policy datasets, demonstrating
                            comparable performance to state-of-the-art off-policy methods.
                            <br/>
                            <br/>
                            <div className="subtitle-articles">Reference</div>
                            [1] X. B. Peng, A. Kumar, G. Zhang, and S. Levine, “Advantage-weighted regression: Simple
                            and scalable off-policy reinforcement learning,” 2019.
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

export default ArticleFour;
