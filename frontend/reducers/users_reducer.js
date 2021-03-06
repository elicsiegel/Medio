import {RECEIVE_SEARCH_RESULTS} from '../actions/search_actions';
import {RECEIVE_USER} from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
            return Object.assign({}, state, action.results.users);

        case RECEIVE_USER:
            return Object.assign({}, state, action.user);

        default:
            return state;
    }
};

export default usersReducer;
