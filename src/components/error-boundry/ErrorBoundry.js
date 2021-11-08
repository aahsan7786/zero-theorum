import React, { Component } from "react";

class ErrorBoundry extends Component{

    state = {
        hasError: false,
        error: null
    };

    componentDidCatch(error) {
        this.setState({
            hasError: true,
            error: error
        });
    }

    render() {

        const { hasError } = this.state;
        return hasError ? <div>Error!!!</div> : this.props.children;

    }

}

export default ErrorBoundry;