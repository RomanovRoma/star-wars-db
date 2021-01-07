import React from "react";
import ItemList from "../item-list";
import { withData, withSwapiService } from "../hoc-helpers";

const withChildFunction = (fn) => (Wrapped) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => (
  <span>
    {name} ({model})
  </span>
);

const mapPersonMethodsProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}

const mapPlanetMethodsProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const mapStarshipMethodsProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const PersonList = withSwapiService(mapPersonMethodsProps)(
                    withData(
                      withChildFunction(renderName)(
                        ItemList)))

const PlanetList = withSwapiService(mapPlanetMethodsProps)(
                    withData(
                      withChildFunction(renderName)(
                        ItemList)))

const StarshipList = withSwapiService(mapStarshipMethodsProps)(
                      withData(
                        withChildFunction(renderModelAndName)(
                          ItemList)))

export { PersonList, PlanetList, StarshipList };
