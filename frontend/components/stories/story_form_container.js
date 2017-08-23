import { connect } from 'react-redux';
import StoryForm from './story_form';
// import { allPosts } from '../reducers/selectors';

import { createStory } from '../../actions/story_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  createStory: (story) => dispatch(createStory(story))
  // updatePost: post => dispatch(updatePost(post)),
  // fetchPost: (post) => dispatch(fetchPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryForm);