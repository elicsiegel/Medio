import StoriesIndex from './stories_index';
import {connect} from 'react-redux';
import {fetchStories} from '../../actions/story_actions';
import {createBookmark, deleteBookmark} from '../../actions/bookmark_actions';
import {allStories} from '../../reducers/selectors';

const mapStateToProps = (state) => {
    return {
        stories: allStories(state),
        currentUser: state.session.currentUser,
        loading: state.loading
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

export default connect(mapStateToProps, mapDispatchToProps)(StoriesIndex);
