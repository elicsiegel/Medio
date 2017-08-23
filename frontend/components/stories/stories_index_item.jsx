import React from 'react';
import { Link } from 'react-router-dom';

class StoriesIndexItem extends React.Component {

  render() {
    // debugger
    const formBody = this.props.story.body.slice(0, 100) + "..."
    const link = `/stories/${this.props.story.id}`
    return (
      <div className="storiesIndexItem">
        <Link to={link}><h4>{this.props.story.title}</h4></Link>
        <p>{formBody}</p>
      </div>
    );
  }
}

export default StoriesIndexItem;