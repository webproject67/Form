import React from "react";
import renderer from "react-test-renderer";
import TaskScreen from "./task-screen";

it(`Render TaskScreen`, () => {
  const tree = renderer.create(<TaskScreen
    onButtonClickProfile={() => {}}
    onButtonClickStatistics={() => {}}
    buttonClickMenuHandler={() => {}}
    buttonClickArrowHandler={() => {}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});