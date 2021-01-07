import React from "react";
import ItemList from "../item-list";
import {
  withData,
  withSwapiService,
  compose,
  withChildFunction } from "../hoc-helpers";

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

const PersonList = compose(
                    withSwapiService(mapPersonMethodsProps),
                    withData,
                    withChildFunction(renderName)
                  )(ItemList)

const PlanetList = compose(
                    withSwapiService(mapPlanetMethodsProps),
                    withData,
                    withChildFunction(renderName)
                  )(ItemList)

const StarshipList = compose(
                      withSwapiService(mapStarshipMethodsProps),
                      withData,
                      withChildFunction(renderModelAndName),
                    )(ItemList)

export { PersonList, PlanetList, StarshipList };
