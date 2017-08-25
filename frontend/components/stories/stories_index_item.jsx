import React from 'react';
import { Link } from 'react-router-dom';

class StoriesIndexItem extends React.Component {

  stylizeDate(created_at) {
    const date = new Date(created_at);

    const year = date.getFullYear();
    const month = date.getMonth();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const dayOfMonth = date.getDate();

    return `${months[month]} ${dayOfMonth}`;
  }

  render() {
    const formBody = this.props.story.body.slice(0, 100) + "..."
    const link = `/stories/${this.props.story.id}`
    return (
      <div className="storiesIndexItem">
        <div className="image-div">
          <img className="stories-index-img" src={this.props.story.story_img_url} />
        </div>
        <div className="index-title-body">
          <Link to={link}><h4>{this.props.story.title}</h4></Link>
          <p>{formBody}</p>
          <div className="author-info-index">
            <div className="author-index-image-div">
              <img className="author-index-image" src={this.props.story.author_img_url} />
            </div>
            <p>{this.props.story.author.username}</p>
            <p>{this.stylizeDate(this.props.story.created_at)}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default StoriesIndexItem;