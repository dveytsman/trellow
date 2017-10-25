import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { signup, login, logout } from './util/session_api_util.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  ReactDOM.render(<Root store={store}/>, root );
});
