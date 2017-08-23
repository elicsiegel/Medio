import * as APIUtil from '../util/story_api_util';

export const RECEIVE_STORIES = 'RECEIVE_STORIES';
export const RECEIVE_STORY = 'RECEIVE_STORY';

export const receiveStories = (stories) => {
  return {
    type: RECEIVE_STORIES,
    stories: stories
  };
};

export const receiveStory = story => {
  return {
    type: RECEIVE_STORY,
    story: story 
  }
};

export const fetchStories = () => (dispatch) => {
  return APIUtil.fetchStories()
    .then(stories => dispatch(receiveStories(stories)));
};

export const createStory = story => dispatch => {
  return APIUtil.createStory(story)
  .then(story => dispatch(receiveStory(story)))
};