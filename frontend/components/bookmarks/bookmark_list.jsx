import React from 'react';
import StoriesIndexItem from '../stories/stories_index_item';

class BookmarkList extends React.Component {

  componentDidMount() {
    // request stories from the API 
    if (this.props.bookmarkedStories.length <= 1) {
      this.props.fetchStories(); 
    }
  }

  render() {

    const bookmarkedStoryItems = this.props.bookmarkedStories.map((story) => {
          return <StoriesIndexItem createBookmark={this.props.createBookmark} deleteBookmark={this.props.deleteBookmark}
                    currentUser={this.props.currentUser} story={story} key={`story-follower-key${story.id}`}/>
        });
    let bookmarksTitle; 
    let blankDiv;

    if (bookmarkedStoryItems.length === 0) {
      bookmarksTitle = (
        <div className="empty-bookmarks-title">
          <h4>No bookmarks yet!</h4>
        </div>
      )
    } else {
      bookmarksTitle = (
        <div className="storiesIndexTitle">
          <h4>Stories you have saved</h4>
        </div>
      )
    }

    return (
      <div>
        {bookmarksTitle}
        <div className="storiesIndexContainer">
          {bookmarkedStoryItems}
        </div>
      </div>
    );
  }
}

export default BookmarkList; 