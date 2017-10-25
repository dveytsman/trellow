import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {Route, Link, Switch, HashRouter } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => {
  return(
    <div>
      <header>
        <GreetingContainer />
        <h1>Trello</h1>
        <h3>Where it all happens</h3>
      </header>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
</div>
  );
};

export default App;
