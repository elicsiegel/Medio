import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

export const receiveSearchResults = results => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
});

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS
});


export const sendSearchQuery = (searchQuery) => {
  return (dispatch) => {
    return SearchAPIUtil.sendSearchQuery(searchQuery)
      .then( results => dispatch(receiveSearchResults(results)) );
  };
}

