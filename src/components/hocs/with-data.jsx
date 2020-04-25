import React, {Component} from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const withData = (View) => {
    return class extends Component {
        state = {
            error: false,
            data: null
        };

        update() {
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data
                    })
                })
                .catch(err => {
                    this.setState({
                        error: true
                    })
                })
        }

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update();
            }
        }

        componentDidMount() {
            this.update();
        }

        render() {
            const {data, error} = this.state;

            if (!data) {
                return <Spinner />
            }

            if (error) {
                return <ErrorIndicator/>
            }

            return <View {...this.props} data={data} />
        }
    }
};

export default withData;
