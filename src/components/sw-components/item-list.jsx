import React from "react";
import ItemList from "../item-list";
import {withData, withSwapiService} from "../hocs";

const withChildrenFn = (fn) => (Wrapped) => {
      return (props) => {
          return (
              <Wrapped {...props}>
                  {fn}
              </Wrapped>
          )
      }
};

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

const PersonList = withSwapiService(mapPeopleMethodsToProps)
                        (withData(
                            withChildrenFn(renderNameAndGender)(ItemList)));

const PlanetsList = withSwapiService(mapPlanetMethodsToProps)
                        (withData(
                            withChildrenFn(renderName)(ItemList)));

const StarshipsList = withSwapiService(mapStarshipMethodsToProps)
                        (withData(
                            withChildrenFn(renderName)(ItemList)));

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
