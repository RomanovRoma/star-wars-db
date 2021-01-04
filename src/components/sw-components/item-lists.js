import React from "react";
import ItemList from "../item-list";
import { withData, withSwapiService } from "../hoc-helpers";

const withChildFunction = (Wrapped, fn) => {
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

const PersonList = withSwapiService(
                    withData(
                      withChildFunction(ItemList, renderName)),
                      mapPersonMethodsProps)

const PlanetList = withSwapiService(
                    withData(
                      withChildFunction(ItemList, renderName)),
                      mapPlanetMethodsProps)

const StarshipList = withSwapiService(
                      withData(
                        withChildFunction(ItemList, renderModelAndName)),
                        mapStarshipMethodsProps)

export { PersonList, PlanetList, StarshipList };
