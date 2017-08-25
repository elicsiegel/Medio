import Comments from './comments';
import { connect } from 'react-redux';
import { fetchComments, deleteComment } from '../../actions/comment_actions';
import { allComments } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    comments: allComments(state),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (comment) => dispatch(deleteComment(comment)),
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);