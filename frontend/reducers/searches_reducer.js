import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS} from '../actions/search_actions';

const defaultState = {
    story_ids: [],
    user_ids: []
};

const SearchesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            if (action.user === null) {
                return defaultState;
            } else {
                return Object.assign({}, state);
            }
        case CLEAR_SEARCH_RESULTS:
            return Object.assign({}, state, defaultState);

        case RECEIVE_SEARCH_RESULTS:
            const nextState = Object.assign({}, state, action.results.ids);

            return Object.assign({}, nextState);

        default:
            return state;
    }
};

export default SearchesReducer;
