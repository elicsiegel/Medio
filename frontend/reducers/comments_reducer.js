import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_STORY } from '../actions/story_actions';
import merge from 'lodash/merge';

const default_comments = {
  1: {
    id: 1,
    body: "I love this article",
    author_id: 1,
    story_id: 1
  },
  2: {
    id: 2,
    body: 'with shampoo articles are better',
    author_id: 1,
    story_id: 91
  },
};

const  commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState; 
  
  switch(action.type) {
    case RECEIVE_COMMENT:
      return action.comment; 
    case RECEIVE_STORY:
      nextState = merge({}, action.story[Object.keys(action.story)[0]].comments)
      return nextState;
    case REMOVE_COMMENT:
      debugger
      nextState = merge({}, state);
      delete nextState[action.comment.id];
      return nextState;
    default:
      return state;
  }
};

export default commentsReducer;