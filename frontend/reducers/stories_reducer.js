import { RECEIVE_STORIES } from '../actions/story_actions';

const storiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STORIES:
      return action.stories;
    default:
      return state;
  }
};

export default storiesReducer;