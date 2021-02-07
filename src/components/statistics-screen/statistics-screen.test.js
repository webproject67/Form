import React from "react";
import renderer from "react-test-renderer";
import StatisticsScreen from "./statistics-screen";

it(`Render StatisticsScreen`, () => {
  const tree = renderer.create(<StatisticsScreen
    onButtonClickProfile={() => {}}
    onButtonClickTask={() => {}}
    buttonClickMenuHandler={() => {}}
    buttonClickArrowHandler={() => {}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});