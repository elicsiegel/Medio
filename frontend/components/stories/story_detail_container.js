import {connect} from 'react-redux';
import StoryDetail from './story_detail';
import {fetchStory, fetchStories, deleteStory, addStoryLike, deleteStoryLike} from '../../actions/story_actions';
import {createFollow, deleteFollow} from '../../actions/follow_actions';
import {createBookmark, deleteBookmark} from '../../actions/bookmark_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        story: state.stories[ownProps.match.params.storyId],
        comments: Object.values(state.comments),
        currentUser: state.session.currentUser,
        loading: state.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStories: () => dispatch(fetchStories()),
        createFollow: (follow) => dispatch(createFollow(follow)),
        deleteFollow: (follow) => dispatch(deleteFollow(follow)),
        createBookmark: (bookmark) => dispatch(createBookmark(bookmark)),
        deleteBookmark: (bookmark) => dispatch(deleteBookmark(bookmark)),
        addStoryLike: (story) => dispatch(addStoryLike(story)),
        deleteStoryLike: (story) => dispatch(deleteStoryLike(story)),
        deleteStory: (story) => dispatch(deleteStory(story)),
        fetchStory: (story_id) => {
            return dispatch(fetchStory(story_id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryDetail);
