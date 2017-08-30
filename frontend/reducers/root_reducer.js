import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import StoriesReducer from './stories_reducer';
import CommentsReducer from './comments_reducer';
import SearchesReducer from './searches_reducer';
import DropdownsReducer from './dropdowns_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  searches: SearchesReducer, 
  stories: StoriesReducer,
  comments: CommentsReducer,
  dropdowns: DropdownsReducer, 
});

export default rootReducer;