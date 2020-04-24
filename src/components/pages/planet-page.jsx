import React from 'react';
import Row from "../row";
import {PlanetDetail, PlanetsList} from "../sw-components";

export default class PlanetPage extends React.Component {
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

        return <Row left={<PlanetsList selectedItemId={selectedItemId} onItemSelected={this.onItemSelected} />} right={<PlanetDetail itemId={selectedItemId} />} />
    }
}
