import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container'; 
import StoriesIndexContainer from './stories/stories_index_container';
import { AuthRoute } from '../util/route_util';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <div className="nav">
      <Link to='/'><h1>Medio</h1></Link>
      <GreetingContainer />
    </div>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <Route path="/" component={ StoriesIndexContainer } />
  </div>
);

export default App;