import React from 'react';

class StoriesIndexItem extends React.Component {

  render() {
    const formBody = this.props.story.body.slice(0, 100) + "..."
    return (
      <div className="storiesIndexItem">
        <h4>{this.props.story.title}</h4>
        <p>{formBody}</p>
      </div>
    );
  }
}

export default StoriesIndexItem;