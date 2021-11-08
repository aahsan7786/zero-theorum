import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import "./research.scss";
import Post from "Components/post/Post";
import Subscribe from "Components/subscribe/Subscribe";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import ResearchPagination from "./pagination/ResearchPagination";
import ResearchThumbnail from "./thumbnail/ResearchThumbnail";
import ResearchSearch from "./search/ResearchSearch";
import ResearchTags from "./tags/ResearchTags";

const Research = ({ data, tags, initialState }) => {
  const [limit, setLimit] = useState(9);
  const [offset, setOffset] = useState(9);
  const [tagsArr, setTagsArr] = useState([]);
  // const [posts, setPosts] = useState(data);
  // const [limitedPosts, setLimitedPosts] = useState(data.slice(0, offset));
  const thumbPost = data.length ? data[0] : initialState;

  useEffect(() => {
    let arr = [];
    tags.forEach((el) => {
      if (el.isActive) {
        arr.push(el.title);
      }
    });
    setTagsArr(arr);
  }, [tags]);

  return (
    <Fragment>
      <section className="section hero inner-page">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="h3">Our Resources</p>
              {/*<p className="subtitle">Our</p>*/}
              {/*<h1 className="title-1 __md">Resources</h1>*/}
            </div>
          </div>
          <ErrorBoundry>
            <ResearchThumbnail thumb={thumbPost} />
          </ErrorBoundry>
          <div className="row">
            <div className="col-lg-4 order-lg-2">
              <ErrorBoundry>
                <ResearchSearch />
              </ErrorBoundry>
            </div>
            <div className="col-lg-8 order-lg-1">
              <ErrorBoundry>
                <ResearchTags />
              </ErrorBoundry>
            </div>
          </div>
          <div className="row zero-block">
            <div className="col-6">
              <div className="zero-theorem">What is Zero Theorem?</div>
            </div>
            <div className="col-6">
              <div className="reinforcement-planning">
                Reinforcement Planning
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="research-list research-list-default">
                <ErrorBoundry>
                  {data.map((post, key) => {
                    if (post.tags.every((e) => tagsArr.includes(e))) {
                      return (
                        <div className="research-list-item col-12" key={key}>
                          <Post post={post} id={key} />
                          <div className="col-6">
                            <div className="reinforcement-planning">
                              Reinforcement Planning
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </ErrorBoundry>
              </div>
              {/*<ErrorBoundry>*/}
              {/*    <ResearchPagination />*/}
              {/*</ErrorBoundry>*/}
            </div>
          </div>
        </div>
      </section>
      {/*<ErrorBoundry>*/}
      {/*    <Subscribe />*/}
      {/*</ErrorBoundry>*/}
    </Fragment>
  );
};

const mapStateToProps = ({ researchReducer }) => {
  return researchReducer;
};

export default connect(mapStateToProps)(Research);
