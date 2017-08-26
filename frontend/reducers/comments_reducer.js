import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_STORY, RECEIVE_STORIES } from '../actions/story_actions';
import merge from 'lodash/merge';

const  commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState; 
  
  switch(action.type) {
    case RECEIVE_COMMENT:   
      return merge({}, state, {[action.comment.id]: action.comment}); 
    case RECEIVE_STORY:
      if (action.comments === undefined) {
        action.comments = {};
      }
      return action.comments;
    case RECEIVE_STORIES:
      return action.comments
    case REMOVE_COMMENT:
      nextState = merge({}, state);
      delete nextState[action.comment.id];
      return nextState;
    default:
      return state;
  }
};

export default commentsReducer;