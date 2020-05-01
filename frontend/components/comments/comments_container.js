import Comments from './comments';
import {connect} from 'react-redux';
import {createComment, deleteComment, updateComment} from '../../actions/comment_actions';
import {allComments} from '../../reducers/selectors';
import {activateDropdown} from '../../actions/dropdown_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        story: ownProps.story,
        comments: allComments(state, ownProps.story),
        currentUser: state.session.currentUser,
        commentFormVisible: state.dropdowns['commentForm']
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteComment: (comment) => dispatch(deleteComment(comment)),
        createComment: (comment) => dispatch(createComment(comment)),
        updateComment: (comment) => dispatch(updateComment(comment)),
        showCommentForm: () => dispatch(activateDropdown('commentForm'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
