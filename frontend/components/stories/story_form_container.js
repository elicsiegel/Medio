import { connect } from 'react-redux';
import StoryForm from './story_form';
// import { allPosts } from '../reducers/selectors';

import { createStory, updateStory, fetchStory } from '../../actions/story_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  createStory: (story) => dispatch(createStory(story)),
  updateStory: story => dispatch(updateStory(story)),
  fetchStory: (story) => dispatch(fetchStory(story))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryForm);