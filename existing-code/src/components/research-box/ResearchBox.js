import React from 'react';
import { connect } from 'react-redux';
import Post from "../post/Post";

const ResearchBox = ({ data }) => {

    return(
        <div className="research-list">
            {
                data.slice(0, 3).map((post, key) => {
                    return (
                        <div className="research-list-item" key={key}>
                            <Post post={post} />
                        </div>
                    )
                })
            }
        </div>
    )

};

const mapStateToProps = ({ researchReducer }) => {
  return researchReducer;
};

export default connect(mapStateToProps)(ResearchBox);