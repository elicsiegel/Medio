import { connect } from 'react-redux';
import Search from './search';
import { relevantStorySearchResults, relevantUserSearchResults } from '../../reducers/selectors';
import { activateDropdown, deactivateDropdown } from '../../actions/dropdown_actions';
import { sendSearchQuery, clearSearchResults } from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    storyResults: relevantStorySearchResults(state),
    searchBarVisible: state.dropdowns["searchBar"],
    searchResultsVisible: state.dropdowns["searchResults"],
    // userResults: relevantUserSearchResults(state),
  };
}

const mapDispatchToProps = dispatch => ({
  clearSearchResults: () => dispatch(clearSearchResults()),
  // fetchStory: storyId => dispatch(fetchStory(storyId)),
  sendSearchQuery: searchQuery => dispatch(sendSearchQuery(searchQuery)),
  showSearchResults: () => dispatch(activateDropdown('searchResults')),
  showSearchBar: () => dispatch(activateDropdown('searchBar')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);