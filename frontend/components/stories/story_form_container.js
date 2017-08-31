import { connect } from 'react-redux';
import StoryForm from './story_form';
import { activateDropdown } from '../../actions/dropdown_actions';

import { createStory, updateStory, fetchStory } from '../../actions/story_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    storyFormBodyVisible: state.dropdowns["storyFormBody"],
  };
};

const mapDispatchToProps = dispatch => ({
  createStory: (story) => dispatch(createStory(story)),
  updateStory: story => dispatch(updateStory(story)),
  fetchStory: (story) => dispatch(fetchStory(story)),
  showStoryFormBody: () => dispatch(activateDropdown('storyFormBody')),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryForm);