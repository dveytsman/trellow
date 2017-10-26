import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LandingContainer from './landing/landing_container';
import {Route, Link, Switch, HashRouter } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => {
  return(
    <div>
      <header>
        <GreetingContainer />
      </header>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <div>
        <LandingContainer />
      </div>
    </div>
  );
};

export default App;
