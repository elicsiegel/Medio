import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container'; 
import StoriesIndexContainer from './stories/stories_index_container';
import StoryFormContainer from './stories/story_form_container';
import StoryDetailContainer from './stories/story_detail_container'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <div className="nav">
      <Link to='/'><h1>Medio</h1></Link>
      <GreetingContainer />
    </div>
    <div className="content">
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/stories/:storyId/edit" component={StoryFormContainer} />
      <ProtectedRoute path="/stories/new" component={StoryFormContainer} />
      <Route path="/stories/:storyId" exact component={StoryDetailContainer} />
      <Route path="/" exact component={ StoriesIndexContainer } />
    </div>
  </div>
);

export default App;