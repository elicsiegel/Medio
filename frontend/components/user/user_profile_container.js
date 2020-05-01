import {connect} from 'react-redux';
import UserProfile from './user_profile';
import {fetchStories} from '../../actions/story_actions';
import {fetchUser} from '../../actions/user_actions';
import {createBookmark, deleteBookmark} from '../../actions/bookmark_actions';
import {userStories} from '../../reducers/selectors';
import {createFollow, deleteFollow} from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users[ownProps.match.params.userId],
        userStories: userStories(state, ownProps.match.params.userId),
        currentUser: state.session.currentUser,
        loading: state.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (id) => dispatch(fetchUser(id)),
        createFollow: (follow) => dispatch(createFollow(follow)),
        deleteFollow: (follow) => dispatch(deleteFollow(follow)),
        createBookmark: (bookmark) => dispatch(createBookmark(bookmark)),
        deleteBookmark: (bookmark) => dispatch(deleteBookmark(bookmark)),
        fetchStories: () => {
            return dispatch(fetchStories());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
