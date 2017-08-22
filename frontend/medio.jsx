import React from 'react';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './util/session_api_util';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  window.signup = signup; 
  window.login = login; 
  window.logout = logout;
  const store = configureStore();
  window.store = store; 

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Medio</h1>, root);
});

