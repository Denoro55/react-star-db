import React from 'react';
import Row from "../row";
import {StarshipDetail, StarshipsList} from "../sw-components";
import {withRouter} from 'react-router-dom'

const PeoplePage = ({history, match}) => {
    const {id} = match.params;

    return (
        <Row
            left={<StarshipsList selectedItemId={id} onItemSelected={(id) => history.push(id)} />}
            right={<StarshipDetail itemId={id} />}
        />
    )
};

export default withRouter(PeoplePage);
