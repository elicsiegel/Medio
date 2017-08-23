import * as APIUtil from '../util/story_api_util';

export const RECEIVE_STORIES = 'RECEIVE_STORIES';

export const receiveStories = (stories) => {
  return {
    type: RECEIVE_STORIES,
    stories: stories
  };
};

export const fetchStories = () => (dispatch) => {
  return APIUtil.fetchStories()
    .then(stories => dispatch(receiveStories(stories)));
};