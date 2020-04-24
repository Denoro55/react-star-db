import React from 'react';
import Row from "../row";
import {StarshipDetail, StarshipsList} from "../sw-components";

export default class PeoplePage extends React.Component {
    state = {
        selectedItemId: null
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItemId: id
        })
    };

    render() {
        const {selectedItemId} = this.state;

        return <Row left={<StarshipsList selectedItemId={selectedItemId} onItemSelected={this.onItemSelected} />} right={<StarshipDetail itemId={selectedItemId} />} />
    }
}
