import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'; 
import {login, signup, logout} from './actions/session_actions';

import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  window.signup = signup; 
  window.login = login; 
  window.logout = logout;
  const store = configureStore();
  window.store = store; 
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});

