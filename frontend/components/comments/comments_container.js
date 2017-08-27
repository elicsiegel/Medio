import Comments from './comments';
import { connect } from 'react-redux';
import { createComment, deleteComment, updateComment } from '../../actions/comment_actions';
import { allComments } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    story: ownProps.story,
    comments: allComments(state, ownProps.story),
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (comment) => dispatch(deleteComment(comment)),
    createComment: (comment) => dispatch(createComment(comment)),
    updateComment: (comment) => dispatch(updateComment(comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);