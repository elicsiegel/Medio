import { connect } from 'react-redux';
import StoryDetail from './story_detail';
import { allStories } from '../../reducers/selectors';
import { fetchStory, deleteStory } from '../../actions/story_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    story: state.stories[ownProps.match.params.storyId],
    comments: Object.values(state.comments), 
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (follow) => dispatch(deleteFollow(follow)), 
    deleteStory: (story) => dispatch(deleteStory(story)), 
    fetchStory: (story_id) => {
      return dispatch(fetchStory(story_id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryDetail);