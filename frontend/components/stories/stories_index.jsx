import React from 'react';
import StoriesIndexItem from './stories_index_item';


class StoriesIndex extends React.Component {
  componentDidMount() {
    // request stories from the API 
    this.props.fetchStories(); 
  }

  filterByCategory(stories, category, currentUser, createBookmark, deleteBookmark) {
    return stories.filter((story) => story.category === category).map((story) => {
      return <StoriesIndexItem createBookmark={createBookmark} deleteBookmark={deleteBookmark} currentUser={currentUser} story={story} key={`story-category-key${story.id}`}/>
    });
  }

  render() {
    const {stories, currentUser, createBookmark, deleteBookmark} = this.props;
    let followerStoriesTitle;
    let followerStories;
    let followerStoriesDiv; 

    if (this.props.currentUser) {

      followerStories = stories.filter((story) => this.props.currentUser.followee_ids.includes(story.author.id))
        .map((story) => {
          return <StoriesIndexItem createBookmark={createBookmark} deleteBookmark={deleteBookmark}
                    currentUser={currentUser} story={story} key={`story-follower-key${story.id}`}/>
        });

      followerStoriesDiv = <div id="followedStoriesContainer" className="storiesIndexContainer">{followerStories}</div>

      if (this.props.currentUser.followee_ids.length >= 1) {
        followerStoriesTitle = <div className="storiesIndexTitle"><h4>Stories by People You are Following</h4></div>
      }
    }

    
    const generalStories = this.filterByCategory(stories, "General", currentUser, createBookmark, deleteBookmark);
    const artStories = this.filterByCategory(stories, "Art", currentUser, createBookmark, deleteBookmark);
    const scienceStories = this.filterByCategory(stories, "Science", currentUser, createBookmark, deleteBookmark);

    return (
      <div>
        {followerStoriesTitle}
        {followerStoriesDiv}
        <div className="storiesIndexTitle">
          <h4>General Stories</h4>
        </div>
        <div className="storiesIndexContainer">
          {generalStories}
        </div>
        <div className="storiesIndexTitle">
          <h4>Art</h4>
        </div>
        <div className="storiesIndexContainer">
          {artStories}
        </div>
        <div className="storiesIndexTitle">
          <h4>Science</h4>
        </div>
        <div className="storiesIndexContainer">
          {scienceStories}
        </div>
      </div>
    );
  }
};

export default StoriesIndex; 