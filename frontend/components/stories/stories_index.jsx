import React from 'react';

class StoriesIndex extends React.Component {
  componentDidMount() {
    // request stories from the API 
    this.props.fetchStories(); 
  }

  render() {
    const {stories} = this.props;

    const storyItems = stories.map((story) => <li>{ story.title }</li>);

    return (
      <div>
        <ul>
          {storyItems}
        </ul>
      </div>
    );
  }
};

export default StoriesIndex; 