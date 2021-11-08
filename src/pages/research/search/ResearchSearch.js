import React, { useState } from 'react';
import { connect } from 'react-redux';
import { filterBySearch } from 'Store/research/actions';

const ResearchSearch = ({ filterBySearch }) => {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        filterBySearch(value)
    };

    return(
        <div className="research-search">
            <div className="search">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input
                            type="text"
                            value={value}
                            name="search"
                            className="input"
                            onChange={handleChange}
                            placeholder="Search" />
                        <button className="search-btn" />
                    </div>
                </form>
            </div>
        </div>
    )
};

const mapDispatchToProps = {
    filterBySearch
};

export default connect(null, mapDispatchToProps)(ResearchSearch);