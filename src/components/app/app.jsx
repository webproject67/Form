import React from "react";
import {Switch, Route, HashRouter} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import ProfileScreen from "../profile-screen/profile-screen";
import TaskScreen from "../task-screen/task-screen";
import StatisticsScreen from "../statistics-screen/statistics-screen";

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
          />
        )}
      />
      <Route exact 
        path="/task"
        render={({history}) => (
          <TaskScreen 
            onButtonClickProfile={() => history.push('/profile')}
            onButtonClickStatistics={() => history.push('/statistics')}
          />
        )}
      />
      <Route exact 
        path="/statistics"
        render={({history}) => (
          <StatisticsScreen 
            onButtonClickProfile={() => history.push('/profile')}
            onButtonClickTask={() => history.push('/task')}
          />
        )}
      />
    </Switch>
  </HashRouter>
) 

export default App;