import React from "react";
// import articles91 from "../../assets/images/articles9-1.png";
// import articles92 from "../../assets/images/articles9-2.png";
import "./articles.scss";
import MathJax from "react-mathjax-preview";
import { NavLink } from "react-router-dom";

const ArticleNine = () => {
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
                  Proximal Policy Optimization Algorithm
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
                  Introducing an algorithm that attains the data efficiency and
                  reliable performance of Trust region policy optimization
                  (TRPO), while using only first-order optimization.
                </li>
                <li className="mt-2">
                  Understand the working of PPO algorithm
                </li>
              </ul>
              <br />
              <br />
              <div className="subtitle-articles">Background</div>
              <br />
              When it comes to improve the training stability, there is a need
              to avoid such parameters updates that changes the pre-defined
              policy. Hence, it is required to enforce KL divergence constraint
              on the size of policy update with which distance between old and
              new policies can be evaluated. In this regard, Trust region policy
              optimization algorithm is implemented that ensures about the
              monotonic improvements related to small value of KL-divergence
              within a parameter that is represented in such a way{" "}
              <MathJax
                wrapperTag={"span"}
                math={
                  "${E}_{s \\sim \\rho^{\\pi} \\theta_{\\text {old }}}[D_{KL}(\\pi_{\\theta_{\\text {old }}}(\\cdot \\mid s) || \\pi_{\\theta}(\\cdot \\mid s)] \\leq \\delta$"
                }
              />{" "}
              . However, the use of TRPO algorithm is quite complex. To solve
              all the complexities related to TRPO, a similar variant named
              proximal policy optimization is suggested that retains similar
              performance which will led to the conclusion that with the help of
              surrogate models failure modes are easily resolved.
              <br />
              <br />
              <div className="subtitle-articles">
                Introduction to Proximal Policy Optimization
              </div>
              <br />
              Basically it’s an algorithm that uses fixed-length trajectory
              segments where each iteration, means each of N (parallel) actors
              that collect T timesteps of data. After collecting the data one
              can easily construct the surrogate loss on these NT timesteps of
              data and optimize it with minibatch. Moreover, PPO strikes a
              balance between ease of implementation, sample complexity, and
              ease of tuning, trying to compute an update at each step that
              minimizes the cost function while ensuring the deviation from the
              previous policy is relatively small [1].
              <br />
              <br />
              <div className="subtitle-articles">Working of PPO</div>
              <br />
              Now let’s move toward the working of PPO Algorithm. For this first
              of all probability ratio between old and new policies is defined
              in such a way{" "}
              <MathJax
                wrapperTag={"span"}
                math={
                  "$r(\\theta)=\\frac{\\pi_{\\theta}(a \\mid s)}{\\pi_{\\theta_{\\text {old }}}(a \\mid s)}$"
                }
              />{" "}
              . Once probability ratio is defined objective function of TRPO
              becomes{" "}
              <MathJax
                wrapperTag={"span"}
                math={
                  "$J^{\\operatorname{TRPO}}(\\theta)=\\mathbb{E}[r(\\theta) \\hat{A}_{\\theta_{\\text {old}}}(s, a)]$"
                }
              />{" "}
              . With this objective function limitation on the distance between
              old and new value of theta should be maximized that would lead to
              the instability. Therefore, to deal with instability PPO imposes
              the constraints by forcing{" "}
              <MathJax wrapperTag={"span"} math={"$r(\\theta)$"} /> from which
              one can easily define the function clip{" "}
              <MathJax
                wrapperTag={"span"}
                math={
                  "$J^{\\mathrm{CLIP}}(\\theta)=\\mathbb{E}[min(r(\\theta) \\hat{A}_{\\theta_{\\text {old }}}(s, a), \\operatorname{clip}(r(\\theta), 1-\\epsilon, 1+\\epsilon) \\hat{A}_{\\theta_{\\text {old }}}(s, a))]$"
                }
              />{" "}
              . Hence in this way when PPO algorithm is implemented on network
              architecture with shared parameters for both actor and critic
              function in addition to clipped reward, the objective function is
              explored
              <br />
              <br />
              <div className="d-flex justify-content-center">
                <MathJax
                  wrapperTag={"span"}
                  math={
                    "$J^{\\mathrm{CLIP}^{\\prime}}(\\theta)=\\mathbb{E}[J^{\\mathrm{CLIP}}(\\theta)-c_{1}(V_{\\theta}(s)-V_{\\text {target }})^{2}+c_{2} H(s, \\pi_{\\theta}(.))]$"
                  }
                />
              </div>
              <br />
              <br />
              <p className="mt-1">
                In order to validate the proposed algorithm, it is tested on a
                set of benchmark tasks that produce accurate results. This led
                to the conclusion that PPO is best suited and yields results
                with much greater simplicity. Furthermore with the help of PPO
                design choices are revisited in such a way that probability
                ratio for policy regularization is easily clipped and policy
                action space is parameterized by continuous Gaussian or discrete
                softmax distribution. These design choices led towards failure
                modes that are necessary to avoid [2]. Therefore to avoid these
                failure modes, action space is discretized or Beta distribution
                is used that are represented in such a way <br />
                <br />
                <div className="d-flex justify-content-center">
                  <MathJax
                    wrapperTag={"span"}
                    math={
                      "${L}^{\\mathrm{CLIP}}(\\theta) \\quad:=\\underset{a, s \\sim \\pi_{\\mathrm{old}}}{\\mathbb{E}}[\\min(\\frac{\\pi_{\\theta}(a \\mid s)}{\\pi_{\\mathrm{old}}(a \\mid s)} \\hat{A}^{\\pi_{\\text {old }}}(a, s), \\operatorname{clip}(\\frac{\\pi_{\\theta}(a \\mid s)}{\\pi_{\\text {old }}(a \\mid s)}, 1-\\epsilon, 1+\\epsilon) \\hat{A}^{\\pi_{\\text {old }}}(a, s))]$"
                    }
                  />
                </div>
                <br />
                <br />
                <div className="d-flex justify-content-center">
                  <MathJax
                    wrapperTag={"span"}
                    math={
                      "${L}^{\\mathrm{KL}, \\text { forward }}(\\theta) \\quad:=\\underset{a, s \\sim \\pi_{\\text {old }}}{\\mathbb{E}}[\\frac{\\pi_{\\theta}(a \\mid s)}{\\pi_{\\text {old }}(a \\mid s)} \\hat{A}^{\\pi_{\\text {old }}}(a, s)]-\\beta D_{\\mathrm{KL}}(\\pi_{\\text {old }} || \\pi_{\\theta})$"
                    }
                  />
                </div>
                <br />
                <br />
                <div className="d-flex justify-content-center">
                  <MathJax
                    wrapperTag={"span"}
                    math={
                      "${L}^{\\mathrm{KL}, \\text { reverse }}(\\theta) \\quad:=\\underset{a, s \\sim \\pi_{\\text {old }}}{\\mathbb{E}}[\\frac{\\pi_{\\theta}(a \\mid s)}{\\pi_{\\mathrm{old}}(a \\mid s)} \\hat{A}^{\\pi_{\\text {old }}}(a, s)]-\\beta D_{\\mathrm{KL}}(\\pi_{\\theta} || \\pi_{\\text {old }})$"
                    }
                  />
                </div>
              </p>
              <br />
              <br />
              <div className="subtitle-articles">Conclusion</div>
              <br />
              This led to the conclusion that proximal policy optimization
              belongs to a family of policy optimization methods that perform
              each policy update using numerous epochs of stochastic gradient
              ascent. From the results it is clear that PPO have the stability
              and reliability of trust-region methods but are much simpler to
              implement, requiring only few lines of code change to a vanilla
              policy gradient implementation, applicable in more general
              settings and have better overall performance.
              <br />
              <br />
              <div className="subtitle-articles">References</div>
              <br />
              [1] J. Schulman, F. Wolski, P. Dhariwal, A. Radford, and O.
              Klimov, “Proximal policy optimization algorithms,” 2017.
              <br />
              <br />
              [2] C. C.-Y. Hsu, C. Mendler-D¨unner, and M. Hardt, “Revisiting
              design choices in proximal policy optimization,” 2020.
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

export default ArticleNine;
