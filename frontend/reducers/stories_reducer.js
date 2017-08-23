import { RECEIVE_STORIES, RECEIVE_STORY } from '../actions/story_actions';

const storiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STORY:
      return action.story; 
    case RECEIVE_STORIES:
      return action.stories;
    default:
      return state;
  }
};

export default storiesReducer;