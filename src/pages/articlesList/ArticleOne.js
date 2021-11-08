import React from "react";
import "./articles.scss";
import {NavLink} from "react-router-dom";
import a2c from "Images/a2c.PNG";

const ArticleOne = () => {
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
                                    A2C Algorithm
                                </h3>
                            </div>
                            <br/>
                            <br/>
                            <div className="hero-title">
                                <h4>
                                    September 2021
                                </h4>
                            </div>
                            <br/>
                            <br/>
                            <p className=" mt-4">
                                <div className="subtitle-articles">Highlights</div>
                                Understand the concept of synchronous Advantage Actor Critic Algorithm by comparing the
                                architecture with A3C that enables the concept of par- allelism.
                            </p>
                            <br/>
                            <p className="">
                                <div className="subtitle-articles">Background</div>
                                With the development of Actor-Critic algorithm, synchronous Advantage Actor- Critic
                                (A2C) comes into existence. Hence, this technique is a deterministic variant of
                                Asynchronous Advantage Actor-Critic (A3C) in which critics learn the value function
                                while several actors are trained in parallel and periodically synchronised with global
                                parameters. This means that in A3C every agent acts as an independent parameter due to
                                which thread specific agents occur that are not optimal. Moreover, A3C enables the
                                parallelism in multiple agent training in which gradient accumulation step can be
                                considered as a parallelized reformation of minibatch-based stochastic gradient update.
                                Therefore there is a need to address such discrepancies that can be achieved by
                                implementing A2C.
                            </p>
                            <br/>
                            <p className="">
                                <div className="subtitle-articles">
                                    Introduction to A2C Algorithm
                                </div>
                                For this purpose, the initial coordinator available in A2C waits for all parallel actors
                                to finish their work before changing the global parameters, and then parallel actors
                                start from the same policy in the following iteration. In this way the process tends to
                                continue due to which synchronized gradient keeps on updating the training process more
                                cohesively [1].This led to the conclusion that A2C algorithm is able to utilize graphic
                                processing units more efficiently that works better with large batch sizes while
                                achieving same or better performance than all other variants present. To have a better
                                understanding let’s have a look at the Fig 1 where A3C and A2C architecture is compared.
                                <br/>
                                From the architectures it is clear that A2C is a policy gradient algorithm which is
                                basically a part of the on-policy family. This means that we are learning the value
                                function for one policy while following it, or in other words, we can’t learn the value
                                function by following another policy.
                                <div className="d-flex align-items-center mt-5 flex-column">
                                    <img src={a2c} alt="A2C" width={'80%'}/>
                                    <div className="mt-3">
                                        Figure 1: A3C vs A2C architecture
                                    </div>
                                </div>
                            </p>
                            <br/>
                            <br/>
                            <div className="subtitle-articles">Working of A2C</div>

                            To make it work as Actor-Critic algorithm, it is necessary to predict states without Critic model to get values which are to be subtracted from discounted rewards, that is known as Advantage. This Advantage solves the problem of correlated inputs and outputs, as each worker explores different regions of the environment (one can set different initial states in each worker, vary the explo- ration rate, etc), so the final batch of transitions used for training the global networks is much less correlated. The only drawback of this approach is that it has to be possible to explore multiple environments in parallel. This is easy to achieve in simulated environments (e.g. video games) but much harder in real-world systems like robots.
                            <br/>
                            <br/>
                            <div className="subtitle-articles">Conclusion</div>
                            This led to the conclusion that using parallel actor learners to update a shared model had a stabilizing effect on the learning process. From the results it is clear that stable online Q-learning is possible without experience replay but he spatial softmax could improve both value-based and policy-based methods by making it easier for the network to represent feature coordinates.
                            <br/>
                            <br/>
                            <div className="subtitle-articles">Reference</div>
                            [1] V. Mnih, A. P. Badia, M. Mirza, A. Graves, T. P. Lillicrap, T. Harley, D. Sil- ver, and K. Kavukcuoglu, “Asynchronous methods for deep reinforcement learning,” 2016.
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

export default ArticleOne;
