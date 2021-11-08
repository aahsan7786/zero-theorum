import React from 'react';

const ResearchPagination = () => {
    return(
        <div className="pagination">
            <button className="btn __border">
                <span className="btn-title">Back</span>
            </button>
            <div className="pagination-nums">
                <button className="pagination-nums-item active">1</button>
                <button className="pagination-nums-item">2</button>
                <button className="pagination-nums-item">3</button>
                <span className="pagination-nums-item collapsed">...</span>
                <button className="pagination-nums-item">6</button>
            </div>
            <button className="btn __border">
                <span className="btn-title">Next</span>
            </button>
        </div>
    )
};

export default ResearchPagination;