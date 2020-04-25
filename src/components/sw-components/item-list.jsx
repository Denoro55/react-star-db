import React from "react";
import ItemList from "../item-list";
import {withData, withSwapiService, withChildFn, compose} from "../hocs";

const renderName = ({name}) => `${name}`;
const renderNameAndGender = ({name, gender}) => `${name} (${gender})`;

const mapPeopleMethodsToProps = (swapiService) => {
    return { getData: swapiService.getPeopleAll }
};

const mapPlanetMethodsToProps = (swapiService) => {
    return { getData: swapiService.getPlanetsAll }
};

const mapStarshipMethodsToProps = (swapiService) => {
    return { getData: swapiService.getStarshipsAll }
};

// const PersonList = withSwapiService(withData(withChildrenFn(ItemList, renderNameAndGender)), mapPeopleMethodsToProps);

// const PersonList = withSwapiService(mapPeopleMethodsToProps)
//                         (withData(
//                             withChildFn(renderNameAndGender)
//                                 (ItemList)));

const PersonList = compose(
    withSwapiService(mapPeopleMethodsToProps),
    withData,
    withChildFn(renderNameAndGender)
)(ItemList);

const PlanetsList = withSwapiService(mapPlanetMethodsToProps)
                        (withData(
                            withChildFn(renderName)
                                (ItemList)));

const StarshipsList = withSwapiService(mapStarshipMethodsToProps)
                        (withData(
                            withChildFn(renderName)
                                (ItemList)));

// const wrap = (Wrapped) => {
//     return (props) => {
//         return <Wrapped {...props} />
//     }
// };
//
// const Person = (props) => {
//     return <span>{props.name}</span>
// };
//
// const PersonList = wrap(Person);

export {PersonList, PlanetsList, StarshipsList}
