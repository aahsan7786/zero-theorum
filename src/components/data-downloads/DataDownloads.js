import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingIndicator from "../loadingIndicator/LoadingIndicator";

class DataDownloads extends Component {

    state = {
        downloads: []
    };

    componentDidMount() {
        const { downloads } = this.props;
        this.setState({
            downloads
        })
    }

    handleDetectButton = (box, enableDownloads) => {
        if(enableDownloads) {
            return (
                <button className="btn sm border" onClick={() => console.log(box.url)}>
                    <span className="btn-title semi-bold">{box.buttonTitle}</span>
                    <span className="btn-icon download" />
                </button>
            )
        }
        return (
            <button className="btn sm border border-dark disabled">
                <span className="btn-title semi-bold">{box.buttonTitle}</span>
                <span className="btn-icon download" />
            </button>
        )
    };

    render() {
        const { downloads } = this.state;
        const { enableDownloads } = this.props;

        if (!downloads.length) {
            return <LoadingIndicator />
        }

        return(
            <div className="data-list">
                {
                    downloads.map((box, key) => {
                        return (
                            <div className="data-list-item" key={key}>
                                <p className="data-download-title" dangerouslySetInnerHTML={{ __html: box.title }} />
                                {this.handleDetectButton(box, enableDownloads)}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = ({ dataReducer }) => {
  return dataReducer;
};

export default connect(mapStateToProps)(DataDownloads);
