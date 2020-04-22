import React, {Component} from "react";
import ItemList from "../item-list";
import ItemDetail from "../item-detail";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";

export default class PeoplePage extends Component {
    state = {
        renderError: false,
        selectedPersonId: 3
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPersonId: id
        })
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            renderError: true
        })
    }

    render() {
        if (this.state.renderError) {
            return <div className="pt-4">
                <ErrorIndicator />
            </div>
        }

        return (
            <div className="row">
                <div className="col-12 col-xl-6 pt-4">
                    <ItemList selectedPersonId={this.state.selectedPersonId} onPersonSelected={this.onPersonSelected} />
                </div>
                <div className="col-12 col-xl-6 pt-4">
                    <ItemDetail personId={this.state.selectedPersonId} />
                    <div className="mt-3">
                        <ErrorButton />
                    </div>
                </div>
            </div>
        )
    }
}
