import React from 'react';
import StoriesIndexItem from './stories_index_item';

class StoriesIndex extends React.Component {
  componentDidMount() {
    // request stories from the API 
    this.props.fetchStories(); 
  }

  render() {
    const {stories} = this.props;

    const storyItems = stories.map((story) => {
      return <StoriesIndexItem story={story} key={`story-index-key${story.id}`}/>
    });

    return (
      <div>
        <div className="storiesIndexTitle">
          <h4>Featured Stories</h4>
        </div>
        <div className="storiesIndexContainer">
          {storyItems}
        </div>
      </div>
    );
  }
};

export default StoriesIndex; 