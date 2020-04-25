import React from 'react';
import {PersonList} from "../sw-components";
import {withRouter} from 'react-router-dom';

const PeoplePage = (props) => {
    const {history} = props;

    return <PersonList onItemSelected={(id) => history.push(id)}/>
};

export default withRouter(PeoplePage);
