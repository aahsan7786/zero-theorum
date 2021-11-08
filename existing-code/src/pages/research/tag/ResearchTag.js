import React from 'react';

const ResearchTag = ({ tag: { id, title, isActive }, toggleTag }) => {
    return <button className={`tags-item ${isActive ? 'active' : ''}`} onClick={ () => toggleTag(id) }>{title}</button>;
};

export default ResearchTag;