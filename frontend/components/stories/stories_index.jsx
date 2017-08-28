import React from 'react';
import StoriesIndexItem from './stories_index_item';


class StoriesIndex extends React.Component {
  componentDidMount() {
    // request stories from the API 
    this.props.fetchStories(); 
  }

  render() {
    const {stories, currentUser} = this.props;

    let followerStoriesTitle;
    let followerStories;
    if (this.props.currentUser) {
      followerStories = stories.filter((story) => this.props.currentUser.followee_ids.includes(story.author.id))
        .map((story) => {
          return <StoriesIndexItem story={story} key={`story-follower-key${story.id}`}/>
        });

      followerStoriesTitle = <h4>Stories by People You are Following</h4>
    }

    const generalStories = stories.filter((story) => story.category === "General").map((story) => {
      return <StoriesIndexItem story={story} key={`story-category-key${story.id}`}/>
    });

    const artStories = stories.filter((story) => story.category === "Art").map((story) => {
      return <StoriesIndexItem story={story} key={`story-category-key${story.id}`}/>
    });

    const scienceStories = stories.filter((story) => story.category === "Science").map((story) => {
      return <StoriesIndexItem story={story} key={`story-category-key${story.id}`}/>
    });

    return (
      <div>
        <div className="storiesIndexTitle">
          {followerStoriesTitle}
        </div>
        <div className="storiesIndexContainer">
          {followerStories}
        </div>
        <div className="storiesIndexTitle">
          <h4>General Stories</h4>
        </div>
        <div className="storiesIndexContainer">
          {generalStories}
        </div>
        <div className="storiesIndexTitle">
          <h4>Art Stories</h4>
        </div>
        <div className="storiesIndexContainer">
          {artStories}
        </div>
        <div className="storiesIndexTitle">
          <h4>Science Stories</h4>
        </div>
        <div className="storiesIndexContainer">
          {scienceStories}
        </div>
      </div>
    );
  }
};

export default StoriesIndex; 