import React, {Component} from "react";

export default class ErrorButton extends Component {
    state = {
        renderError: false
    };

    throwErr = () => {
        this.setState({
            renderError: true
        })
    };

    render() {
        if (this.state.renderError) {
            this.prop.undef = 10;
        }

        return (
            <button onClick={this.throwErr} className="btn btn-danger">Throw error</button>
        )
    }
}
