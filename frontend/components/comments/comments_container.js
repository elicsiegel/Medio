import Comments from './comments';
import { connect } from 'react-redux';
import { createComment, deleteComment } from '../../actions/comment_actions';
import { allComments } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    story: ownProps.story,
    comments: allComments(state),
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (comment) => dispatch(deleteComment(comment)),
    createComment: (comment) => dispatch(createComment(comment)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);