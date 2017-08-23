import { connect } from 'react-redux';
import StoryDetail from './story_detail';
import { allStories } from '../../reducers/selectors';
import { fetchStory, deleteStory } from '../../actions/story_actions';

const mapStateToProps = (state) => {
  return {
    story: allStories(state)[0],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteStory: (story) => dispatch(deleteStory(story)), 
    fetchStory: (story_id) => {
      return dispatch(fetchStory(story_id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryDetail);