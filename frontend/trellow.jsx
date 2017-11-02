import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { signup, login, logout } from './util/session_api_util.js';
import { createBoard, fetchBoards, deleteBoard, updateBoard } from './actions/board_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  window.createBoard = createBoard;
  window.fetchBoards = fetchBoards;
  window.deleteBoard = deleteBoard;
  window.updateBoard = updateBoard;
  window.logout = logout;
  if(window.currentUser){
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  window.store = store;
  ReactDOM.render(<Root store={store}/>, root );
});
