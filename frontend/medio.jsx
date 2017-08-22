import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'; 

import {signup, login, logout} from './util/session_api_util';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  window.signup = signup; 
  window.login = login; 
  window.logout = logout;
  const store = configureStore();
  window.store = store; 

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});

