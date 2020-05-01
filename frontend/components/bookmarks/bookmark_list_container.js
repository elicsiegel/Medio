import BookmarkList from './bookmark_list';
import {connect} from 'react-redux';
import {fetchStories} from '../../actions/story_actions';
import {createBookmark, deleteBookmark} from '../../actions/bookmark_actions';
import {allBookmarkedStories} from '../../reducers/selectors';

const mapStateToProps = (state) => {
    return {
        bookmarkedStories: allBookmarkedStories(state),
        currentUser: state.session.currentUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createBookmark: (bookmark) => dispatch(createBookmark(bookmark)),
        deleteBookmark: (bookmark) => dispatch(deleteBookmark(bookmark)),
        fetchStories: () => {
            return dispatch(fetchStories());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkList);
