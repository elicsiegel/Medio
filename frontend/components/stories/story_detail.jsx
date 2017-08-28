import React from 'react';
import { Link } from 'react-router-dom';
import CommentsContainer from '../comments/comments_container';
import renderHTML from 'react-render-html';

class StoryDetail extends React.Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
    this.followAuthor = this.followAuthor.bind(this);
    this.unfollowAuthor = this.unfollowAuthor.bind(this);
    this.addLike = this.addLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
  }

  componentDidMount() {
    if (this.props.match.url !== '/stories/new') {
      if (this.props.story === undefined) {
        this.props.fetchStory(this.props.match.params.storyId);   
      }
    }
  }

  componentWillReceiveProps(newProps) { 
    if (newProps.story === undefined) {
      this.props.fetchStory(newProps.match.params.storyId);
    }    
  }

  addLike() {
    this.props.addStoryLike(this.props.story)
  }

  removeLike() {
    this.props.deleteStoryLike(this.props.story)
  }

  followAuthor() {
    const follow = {follower_id: this.props.currentUser.id, followee_id: this.props.story.author.id}
    this.props.createFollow(follow); 
  }

  unfollowAuthor() {
    const follow = {follower_id: this.props.currentUser.id, followee_id: this.props.story.author.id}
    this.props.deleteFollow(follow)
  }

  handleDelete() {
    this.props.deleteStory(this.props.story).then(() => {
      this.props.history.push("/"); 
    });
  }

  stylizeDate(created_at) {
    const date = new Date(created_at);

    const year = date.getFullYear();
    const month = date.getMonth();
    const months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    const dayOfMonth = date.getDate();
    const dayOfWeek = date.getDay();
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday"];
    return `${weekDays[dayOfWeek]} ${months[month]} ${dayOfMonth}, ${year}`;
  }

  render() {
    if (this.props.story && this.props.match.url !== '/stories/new') {
      const { title, body, author, created_at, id, author_img_url, story_img_url, num_likes, liker_ids } = this.props.story;

      let editLink;
      let deleteButton;
      let followButton;
      let likeButton;  
      if (this.props.currentUser) {
        if (author.id === this.props.currentUser.id) {
          deleteButton = <button onClick={this.handleDelete}>Delete</button>
          editLink = <Link to={`/stories/${id}/edit`}>Edit Story</Link>
        }
        if (this.props.currentUser.followee_ids.includes(author.id)) {
          followButton = <button onClick={this.unfollowAuthor}>Unfollow</button>
        } else {
          followButton = <button onClick={this.followAuthor}>Follow</button>
        } 
        if (liker_ids.includes(this.props.currentUser.id)) {
          likeButton = <button id="like-button" onClick={this.removeLike}><img id="full-heart-img" src={window.staticImages.fullHeart}/></button>
        } else {
          likeButton = <button id="like-button" onClick={this.addLike}><img id="empty-heart-img" src={window.staticImages.emptyHeart}/></button>
        }
      } else {
        likeButton = <button id="like-button"><img id="full-heart-img" src={window.staticImages.fullHeart}/></button>
      }
      
      return (
        <div className="story-show">
          <div id="modify-own-story">
            {editLink}
            {deleteButton}
          </div>
          <div className="story-info">
            <div id="author-image-container">
              <img id="author-image" src={author_img_url} />
            </div>
            <h4>{author.username}</h4> 
            <p>{this.stylizeDate(created_at)}</p>
            {followButton}
            <div className="like-div">
              <p>{num_likes}</p>
              {likeButton}
            </div>
          </div>
          <h1>{title}</h1>
          <img className="story-detail-img" src={story_img_url} />
          <section className="story-detail-body">
            {renderHTML(body)}
          </section>
          <div className="comment-list">
            <CommentsContainer story={this.props.story}/>
          </div>
        </div>
      ); 
    }

    return (
      <div></div>
    );
  }
}

export default StoryDetail; 