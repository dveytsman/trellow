import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LandingContainer from './landing/landing_container';
import LoginFormContainer from './login/login_form_container';
import BoardsContainer from './boards/boards_container';
import SignupFormContainer from './signup/signup_form_container';
import {Route, Link, Switch, HashRouter } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => {
  return(
    <div>
      <header>
      </header>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={LandingContainer}/>
      <div>
        <BoardsContainer />
      </div>
    </div>
  );
};

export default App;
