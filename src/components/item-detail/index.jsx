import React, {Component} from "react";
import ItemList from "../item-list";
import ItemInfo from "../item-info";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi";
import Row from "../row";

import './style.css';

export default class ItemDetail extends Component {
    swapiService = new SwapiService();

    state = {
        selectedItemId: null
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItemId: id
        })
    };

    render() {
        const itemInfo = <ItemInfo personId={this.state.selectedItemId} />;

        return (
            <ErrorBoundry>
                <Row left={itemInfo} right={itemInfo} />
            </ErrorBoundry>
        )
    }
}
