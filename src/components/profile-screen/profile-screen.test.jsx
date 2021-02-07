import React from "react";
import renderer from "react-test-renderer";
import ProfileScreen from "./profile-screen";

it(`Render ProfileScreen`, () => {
  const tree = renderer.create(<ProfileScreen
    onButtonClickTask={() => {}}
    onButtonClickStatistics={() => {}}
    buttonClickMenuHandler={() => {}}
    buttonClickArrowHandler={() => {}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});