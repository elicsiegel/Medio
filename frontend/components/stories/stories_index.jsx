import React from 'react';
import StoriesIndexItem from './stories_index_item';
import LoadingSpinner from '../loading_spinner';

class StoriesIndex extends React.Component {
  componentDidMount() {
    // request stories from the API 
    if (this.props.stories.length < 2) this.props.fetchStories(); 
  }

  filterByCategory(category) {
    const {stories, currentUser, createBookmark, deleteBookmark} = this.props;

    return stories.filter((story) => story.category === category).map((story) => {
      return <StoriesIndexItem createBookmark={createBookmark} deleteBookmark={deleteBookmark} currentUser={currentUser} story={story} key={`story-category-key${story.id}`}/>
    });
  }

  generateFollowerStories() {
    if ( !this.props.currentUser ) return;

    const {stories, currentUser, createBookmark, deleteBookmark} = this.props; 

    const followerStories = stories.filter((story) => this.props.currentUser.followee_ids.includes(story.author.id))
        .map((story) => {
          return <StoriesIndexItem createBookmark={createBookmark} deleteBookmark={deleteBookmark}
                    currentUser={currentUser} story={story} key={`story-follower-key${story.id}`}/>
        });

    return (
      <div id="followedStoriesContainer" className="storiesIndexContainer">
        {followerStories}
      </div>
    );
  }

  generateFollowerTitle() {
    if ( !this.props.currentUser ) return;
    if ( this.props.currentUser.followee_ids.length < 1) return;

    return (
      <div className="storiesIndexTitle">
        <h4>Stories by People You are Following</h4>
      </div>
    );
  }

  render() {
    if (this.props.loading) return (<LoadingSpinner />);

    const generalStories = this.filterByCategory("General");
    const artStories = this.filterByCategory("Art");
    const scienceStories = this.filterByCategory("Science");
    const travelStories = this.filterByCategory("Travel");
    const foodStories = this.filterByCategory("Food");

    return (
      <div>
        {this.generateFollowerTitle()}
        {this.generateFollowerStories()}
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
        <div className="storiesIndexTitle">
          <h4>Travel</h4>
        </div>
        <div className="storiesIndexContainer">
          {travelStories}
        </div>
        <div className="storiesIndexTitle">
          <h4>Food</h4>
        </div>
        <div className="storiesIndexContainer">
          {foodStories}
        </div>
      </div>
    );
  }
};

export default StoriesIndex; 