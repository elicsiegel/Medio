import { RECEIVE_STORIES, RECEIVE_STORY, REMOVE_STORY } from '../actions/story_actions';
import merge from 'lodash/merge';

const storiesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState; 
  
  switch(action.type) {
    case RECEIVE_STORY:
      return action.story; 
    case RECEIVE_STORIES:
      return action.stories;
    case REMOVE_STORY:
      nextState = merge({}, state);
      delete nextState[action.story.id];
      return nextState;
    default:
      return state;
  }
};

export default storiesReducer;