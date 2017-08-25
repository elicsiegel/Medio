import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import StoriesReducer from './stories_reducer';
import CommentsReducer from './comments_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  stories: StoriesReducer,
  comments: CommentsReducer
});

export default rootReducer;