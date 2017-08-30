import { connect } from 'react-redux';
import Search from './search';
import { relevantStorySearchResults, relevantUserSearchResults } from '../../reducers/selectors';
import { sendSearchQuery, clearSearchResults } from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    storyResults: relevantStorySearchResults(state),
    // userResults: relevantUserSearchResults(state),
  };
}

const mapDispatchToProps = dispatch => ({
  clearSearchResults: () => dispatch(clearSearchResults()),
  // fetchStory: storyId => dispatch(fetchStory(storyId)),
  sendSearchQuery: searchQuery => dispatch(sendSearchQuery(searchQuery))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);