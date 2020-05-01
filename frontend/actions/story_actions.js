import * as APIUtil from '../util/story_api_util';

export const RECEIVE_STORIES = 'RECEIVE_STORIES';
export const RECEIVE_STORY = 'RECEIVE_STORY';
export const REMOVE_STORY = 'REMOVE_STORY';

export const REQUEST_DATA = 'REQUEST_DATA';

export const requestData = () => ({
    type: REQUEST_DATA
});

export const receiveStories = ({stories, comments}) => {
    return {
        type: RECEIVE_STORIES,
        stories: stories,
        comments: comments
    };
};

export const receiveStory = ({story, comments}) => {
    return {
        type: RECEIVE_STORY,
        story: story,
        comments: comments
    };
};

export const removeStory = (story) => ({
    type: REMOVE_STORY,
    story: story
});

export const fetchStories = () => (dispatch) => {
    dispatch(requestData());
    return APIUtil.fetchStories().then((stories) => dispatch(receiveStories(stories)));
};

export const createStory = (story) => (dispatch) => {
    return APIUtil.createStory(story).then((story) => dispatch(receiveStory(story)));
};

export const addStoryLike = (story) => (dispatch) =>
    APIUtil.addStoryLike(story).then((story) => dispatch(receiveStory(story)));

export const deleteStoryLike = (story) => (dispatch) =>
    APIUtil.removeStoryLike(story).then((story) => dispatch(receiveStory(story)));

export const updateStory = (story) => (dispatch) =>
    APIUtil.updateStory(story).then((story) => dispatch(receiveStory(story)));

export const fetchStory = (id) => (dispatch) => {
    dispatch(requestData());
    return APIUtil.fetchStory(id).then((story) => dispatch(receiveStory(story)));
};

export const deleteStory = (story) => (dispatch) =>
    APIUtil.destroyStory(story).then((story) => dispatch(removeStory(story)));
