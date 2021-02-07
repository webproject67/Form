import React from "react";
import {Switch, Route, HashRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import ProfileScreen from "../profile-screen/profile-screen";
import TaskScreen from "../task-screen/task-screen";
import StatisticsScreen from "../statistics-screen/statistics-screen";

const onButtonClickMenu = () => {
  const button = document.querySelector(".main__btn");
  const list = document.querySelector(".main__list");
  button.classList.toggle("main__btn--open");
  list.classList.toggle("main__list--display");
}

const onButtonClickArrow = () => {
  const button = document.querySelector(".main__arrow");
  const nav = document.querySelector(".main__nav");
  const list = document.querySelector(".main__list");
  const form = document.querySelector(".main__form");
  button.classList.toggle("main__arrow--close");
  nav.classList.toggle("main__nav--width");
  list.classList.toggle("main__list--display");
  if(form) form.classList.toggle("main__form--width");
}

const App = () => (
  <HashRouter hashType={'noslash'}>
    <Switch>
      <Route exact 
        path="/"
        render={({history}) => (
          <WelcomeScreen
            onButtonClickProfile={() => history.push('/profile')}
          />
        )}
      />
      <Route exact 
        path="/profile"
        render={({history}) => (
          <ProfileScreen 
            onButtonClickTask={() => history.push('/task')}
            onButtonClickStatistics={() => history.push('/statistics')}
            buttonClickMenuHandler={onButtonClickMenu}
            buttonClickArrowHandler={onButtonClickArrow}
          />
        )}
      />
      <Route exact 
        path="/task"
        render={({history}) => (
          <TaskScreen 
            onButtonClickProfile={() => history.push('/profile')}
            onButtonClickStatistics={() => history.push('/statistics')}
            buttonClickMenuHandler={onButtonClickMenu}
            buttonClickArrowHandler={onButtonClickArrow}
          />
        )}
      />
      <Route exact 
        path="/statistics"
        render={({history}) => (
          <StatisticsScreen 
            onButtonClickProfile={() => history.push('/profile')}
            onButtonClickTask={() => history.push('/task')}
            buttonClickMenuHandler={onButtonClickMenu}
            buttonClickArrowHandler={onButtonClickArrow}
          />
        )}
      />
    </Switch>
  </HashRouter>
) 

export default App;