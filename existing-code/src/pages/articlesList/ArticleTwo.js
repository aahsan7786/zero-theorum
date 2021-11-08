import React from "react";
import article2 from "../../assets/images/article2.png";
import "./articles.scss";
import {NavLink} from "react-router-dom";
import awac from "Images/awac.PNG";
import a2c from "Images/a2c.PNG";

const ArticleTwo = () => {
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
                                    AWAC: Accelerating Online Reinforcement Learning with Offline Datasets
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
                            <p>• Whether implementing AWAC can effectively combine prior data with online experience to
                                learn complex robotic control tasks more efficiently than prior methods or not?</p>
                            <p>• Providing a practical way to bootstrap real world robotic reinforcement learning by
                                applying AWAC that is able to learn from sub-optimal or random data.</p>

                            <br/>
                            <div className="subtitle-articles">Background</div>

                            <p>With the advancement of RL, robots that have been trained will be able to solve a wide
                                range of complex real-world problems. Hence, building the environment by devising a
                                reward function, and training the robot to achieve the goal by allowing it to explore
                                the new environment are all required steps in applying RL to a new problem. However,
                                this may eventually work, but these online RL methods are data hungry and repeating this
                                data inefficient process for every new problem makes it difficult to apply online RL to
                                real world problematic challenges of robotics.</p>
                            <p>To tackle these problematic challenges, it is necessary to devise an RL paradigm that can
                                effectively use the large amount of already available data while still continuing to
                                improve behavior on new tasks because the use of data mitigates challenges due to
                                exploration and sample complexity. Therefore, there is a need to move RL towards a data
                                driven paradigm because it considers the general idea related to offline RL. Hence,
                                offline RL considers the problem of learning optimal policies from arbitrary off-policy
                                data, without any further exploration.</p>
                            <p>Moreover, it is clear that with the help of offline RL, one can easily eliminate the data
                                collection problem by incorporating data from arbitrary sources. From this it is clear
                                that one can easily move RL from training with every new problem to a paradigm which is
                                able to reuse prior data effectively, with some offline training followed by online
                                fine-tuning. To better understand the problem of accelerating online RL with offline
                                datasets let’s have a look at figure 1.</p>

                            <div className="d-flex align-items-center mt-5 flex-column">
                                <img src={awac} alt="awac" width={'80%'}/>
                                <div className="mt-3">
                                    Figure 1: problem of accelerating online RL with offline datasets
                                </div>
                            </div>
                            <br/>
                            <p>A number of challenges in the problem of learning from offline data and subsequent
                                fine-tuning, using the standard benchmark are analyzed which are as follow:</p>


                            <p>• Data Efficiency: A simple way to utilize prior data such as demonstrations for RL is to
                                pre-train a policy with imitation learning, and fine-tune with on-policy RL algorithms
                                such as AWR or DAPG. This has two drawbacks. First, the prior data may not be optimal so
                                imitation learning may be ineffective. Second, on-policy fine-tuning is data inefficient
                                as it does not reuse the prior data in the RL stage. Hence for real-world robotics, data
                                efficiency is vital.</p>
                            <p>• Bootstrapping Error: Another main challenge is bootstrapping error which is basically a
                                issue when using off-policy RL for offline training. Hence the use of Actor Critic
                                method learn efficiently from off-policy data by estimating a value estimate or
                                action-value estimate of future returns. However, the challenge can be attributed to
                                off-policy bootstrapping error accumulation. This means that during training phase, the
                                Q estimates will not be fully accurate, particularly in extrapolating actions that are
                                not present in the data. Therefore, the policy update exploits overestimated Q values,
                                making the estimated Q values worse.</p>
                            <br/>
                            <br/>
                            <b> Introduction to Advantage Weighted Actor Critic (AWAC)</b>
                            <br/>
                            In this context, to deal with challenges related to Offline RL with Online Fine- tuning, an extremely simple algorithm named advantage weighted actor critic (AWAC) is proposed. The proposed algorithm combines sample efficient dy- namic programming with maximum likelihood policy updates by providing a simple and effective framework that is able to leverage large amounts of offline data and then quickly perform online fine-tuning of RL policies [1].
                           <p>Moreover, the proposed method enables rapid learning of skills with a combi- nation of prior demonstration data and online experience to avoid over-conservative behavior empirically. Also researchers demonstrated the benefits on a variety of simulated and real-world robotics domains, including dexterous manipula- tion with a real multi-fingered hand, drawer opening with a robotic arm, and rotating a valve that significantly outperform the ABM.</p>
<br/>
                            <div className="subtitle-articles">Working of Advantage Weighted Actor Critic</div>
                            Let’s move toward the working of the advantage weighted actor-critic (AWAC) algorithm, which trains an off-policy critic and an actor with an implicit policy constraint. For this purpose, AWAC follows the design for actor-critic algo- rithms with a policy evaluation step to learn policy improvement steps that is able to obtain the benefits of offline RL algorithms at training from prior datasets, while avoiding the overly conservative behavior. Therefore, the pro- posed algorithm update amounts to weighted maximum likelihood where the targets are obtained by re-weighting the state-action pairs observed in the cur- rent dataset by the predicted advantages from the learned critic, without explic- itly learning any parametric behavior model. This means that one can easily parameterize the actor and the critic by neural networks and perform SGD updates. At the end, AWAC ensures data efficiency with off-policy critic esti- mation via bootstrapping, and avoids offline bootstrap error with a constrained actor update. By avoiding explicit modeling of the behavior policy.

                            <br/>
                            <br/>
                            <div className="subtitle-articles">Conclusion</div>
                            This led to the conclusion that using prior data to fine-tune quickly on new problems opens up many new avenues of research. From the findings it is clear that incorporating prior data can reduce the time required to learn a range of robotic skills to practical time-scales. Moreover, it is evident that AWAC is able to effectively leverage prior data for significantly accelerating learning because it does run into some limitations.
                            <br/>
                            <br/>
                            <div className="subtitle-articles">Reference</div>
                            [1] A. Nair, M. Dalal, A. Gupta, and S. Levine, “Awac: Accelerating online reinforcement learning with offline datasets,” 2020.
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

export default ArticleTwo;
