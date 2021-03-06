import React from 'react';
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';

class StoriesIndexItem extends React.Component {

  constructor(props) {
    super(props)
    this.addBookmark = this.addBookmark.bind(this);
    this.removeBookmark = this.removeBookmark.bind(this);
  }

  stylizeDate(created_at) {
    const date = new Date(created_at);

    const year = date.getFullYear();
    const month = date.getMonth();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const dayOfMonth = date.getDate();

    return `${months[month]} ${dayOfMonth}`;
  }

  removeBookmark(e) {
    e.preventDefault(); 
    this.props.deleteBookmark({story_id: this.props.story.id})
  }

  addBookmark(e) {
    e.preventDefault();
    this.props.createBookmark({story_id: this.props.story.id, user_id: this.props.currentUser.id})
  }

  render() {
    let bookmarkButton; 
    
    if (this.props.currentUser) {
      if (this.props.currentUser.bookmarked_story_ids.includes(this.props.story.id)) {
        bookmarkButton = <button className="bookmark" onClick={this.removeBookmark}><img className="deleteBookmark-img" src={window.staticImages.deleteBookmark}/></button>
      } else {
        bookmarkButton = <button className="bookmark" onClick={this.addBookmark}><img className="addBookmark-img" src={window.staticImages.addBookmark}/></button>
      }
    }

    const formBody = this.props.story.body.slice(0, 100); 
    const link = `/stories/${this.props.story.id}`
    const authorLink = `/stories/${this.props.story.author.id}`
    const background_photo = {
      backgroundImage: 'url(' + this.props.story.story_thumb_img_url + ')',
      backgroundSize: "cover"
    }

    return (
      <Link to={link} className="stories-index-item-link">
        <div className="storiesIndexItem">
          <div className="image-div" style={background_photo}>
          </div>
          <div className="index-title-body">
            <h4>{this.props.story.title}</h4>
            {renderHTML(formBody)}
            <div className="author-info-index">
              <div className="author-index-image-div">
                <img className="author-index-image" src={this.props.story.author_img_url} />
              </div>
              <p className="stories-index-username">{this.props.story.author.username}</p>
              <p className="stories-index-date">{this.stylizeDate(this.props.story.created_at)}</p>
              {bookmarkButton}
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default StoriesIndexItem;