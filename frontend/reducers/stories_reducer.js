import {RECEIVE_STORIES, RECEIVE_STORY, REMOVE_STORY} from '../actions/story_actions';
import {RECEIVE_SEARCH_RESULTS} from '../actions/search_actions';
import {REMOVE_COMMENT} from '../actions/comment_actions';
import merge from 'lodash/merge';

const storiesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;

    switch (action.type) {
        case RECEIVE_STORY:
            nextState = Object.assign({}, state, action.story);

            return nextState;

        case RECEIVE_STORIES:
            return merge({}, state, action.stories);

        case REMOVE_STORY:
            nextState = merge({}, state);
            delete nextState[Object.keys(action.story.story)[0]];

            return nextState;

        case RECEIVE_SEARCH_RESULTS:
            return Object.assign({}, state, action.results.stories);

        case REMOVE_COMMENT:
            nextState = merge({}, state);
            const index = state[action.comment.story_id].comment_ids.indexOf([action.comment.id]);

            nextState[action.comment.story_id].comment_ids.splice(index, 1);
            return nextState;

        default:
            return state;
    }
};

export default storiesReducer;
