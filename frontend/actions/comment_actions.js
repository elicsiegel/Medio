import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments: comments
  };
};

export const receiveComment =comment => {
  return {
    type: RECEIVE_COMMENT,
    comment: comment 
  }
};

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment: comment 
});

export const deleteComment = comment => dispatch => (
  APIUtil.destroyComment(comment).then(comment => dispatch(removeComment(comment)))
);

export const fetchComments = (storyId) => (dispatch) => {
  return APIUtil.fetchComments(storyId)
    .then(comments => dispatch(receiveComments(comments)));
};



export const createStory = story => dispatch => {
  return APIUtil.createStory(story)
  .then(story => dispatch(receiveStory(story)))
};

export const updateStory = story => dispatch => (
  APIUtil.updateStory(story).then(story => dispatch(receiveStory(story)))
);

export const fetchStory = id => dispatch => {
  return APIUtil.fetchStory(id).then(story => dispatch(receiveStory(story)))
};

