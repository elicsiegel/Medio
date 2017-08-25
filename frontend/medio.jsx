import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root'; 
import {login, signup, logout} from './actions/session_actions';

import configureStore from './store/store';

import { fetchStories } from './actions/story_actions'; 
import { receiveComment, removeComment } from './actions/comment_actions'; 
import {storyComments} from './reducers/selectors.js';

document.addEventListener('DOMContentLoaded', () => {
  // window.signup = signup; 
  // window.login = login; 
  // window.logout = logout;
  // const store = configureStore();
  window.storyComments = storyComments; 
  window.receiveComment = receiveComment; 
  window.removeComment = removeComment;
  window.fetchStories = fetchStories;
  let store;
  
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store; 
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});

