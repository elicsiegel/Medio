import StoriesIndex from './stories_index';
import { connect } from 'react-redux';
import { fetchStories } from '../../actions/story_actions';
import { allStories } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    stories: allStories(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStories: () => {
      return dispatch(fetchStories());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoriesIndex);