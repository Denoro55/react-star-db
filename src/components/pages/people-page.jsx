import React from 'react';
import Row from "../row";
import {PersonDetail, PersonList} from "../sw-components";

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

        return <Row left={<PersonList selectedItemId={selectedItemId} onItemSelected={this.onItemSelected} />} right={<PersonDetail itemId={selectedItemId} />} />
    }
}
