import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
  FETCHING_SEARCH,
  RECEIVE_SEARCH_RESULTS,
  CLEAR_SEARCH_RESULTS
} from '../actions/search_actions';

const defaultState = {
  story_ids: [],
  user_ids: [],
  fetching: false
};

const SearchesReducer = (state = defaultState, action) => {
  switch(action.type){

    case RECEIVE_CURRENT_USER:
      if (action.user === null) {
        return defaultState; 
      } else {
        return Object.assign({}, state); 
      }
    case CLEAR_SEARCH_RESULTS:
      return Object.assign( {}, state, defaultState );

    case FETCHING_SEARCH:
      return Object.assign( {}, state, { fetching: true });

    case RECEIVE_SEARCH_RESULTS:
      
      const copy = Object.assign({}, state, action.results.ids);
      
      copy.fetching = false;
      return Object.assign( {}, copy);

    default:
      return state;

  }
}

export default SearchesReducer;