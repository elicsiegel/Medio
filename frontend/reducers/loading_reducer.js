import { RECEIVE_STORIES, RECEIVE_STORY, REQUEST_DATA } from '../actions/story_actions';
import { RECEIVE_USER } from '../actions/user_actions'; 


const loadingReducer = (state = true, action) => {
  switch(action.type) {
    case REQUEST_DATA:
      return true;
    case RECEIVE_USER:
    case RECEIVE_STORY:
    case RECEIVE_STORIES:
      return false;
    default:
      return state;
  }
}

export default loadingReducer;