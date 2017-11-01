import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LandingContainer from './landing/landing_container';
import LoginFormContainer from './login/login_form_container';
import BoardsContainer from './boards/boards_container';
import SignupFormContainer from './signup/signup_form_container';
import {Route, Link, Switch, HashRouter } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { hideDropdown } from '../actions/dropdown_actions';
import { connect } from 'react-redux';
import BoardShowContainer from './boards/board_show_container';


const mapStateToProps = (state, ownProps) => {
  return {dropdownVisible: state.dropdown};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    hideDropdown: () => dispatch(hideDropdown())
  };
};

const App = () => {
  return(
    <div>
      <header>
      </header>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={LandingContainer}/>
      <Route path="/boards/:boardId" component={BoardShowContainer}/>
      <div>
        <BoardsContainer />
      </div>
    </div>
  );
};

export default App;
