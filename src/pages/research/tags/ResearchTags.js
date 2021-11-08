import React from 'react';
import { connect } from 'react-redux';
import ResearchTag from "../tag/ResearchTag";
import { toggleTag } from 'Store/research/actions';

const ResearchTags = ({ tags, toggleTag }) => {
    return(
        <div className="research-tags">
            <div className="tags">
                {
                    tags.map((tag, key) => {
                        return <ResearchTag tag={tag} key={key} toggleTag={toggleTag} />
                    })
                }
            </div>
        </div>
    )
};

const mapStateToProps = ({ researchReducer }) => {
    return researchReducer;
};

const mapDispatchToProps = {
    toggleTag
};

export default connect(mapStateToProps, mapDispatchToProps)(ResearchTags);