import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import StoriesReducer from './stories_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  stories: StoriesReducer
});

export default rootReducer;