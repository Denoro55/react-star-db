import React from 'react';
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundry extends React.Component {
    state = {
        error: false
    };

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <div className="pt-4 pb-4">
                <ErrorIndicator />
            </div>
        }

        return this.props.children;
    }
}
