import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppContainer from './app_container'; 
import App from './App'; 

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <AppContainer/>
    </HashRouter>
  </Provider>
);

export default Root; 