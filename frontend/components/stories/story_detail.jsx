import React from 'react';
import { Link } from 'react-router-dom';
import CommentsContainer from '../comments/comments_container';

class StoryDetail extends React.Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    if (this.props.match.url !== '/stories/new') {
      const story = this.props.fetchStory(this.props.match.params.storyId);  
    }
  }

  componentWillReceiveProps(newProps) {
    
    if (newProps.story) {
      if (newProps.story.id !== +newProps.match.params.storyId) {
        this.props.fetchStory(newProps.match.params.storyId);
      }
    }  
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
      const { title, body, author, created_at, id, author_img_url, story_img_url } = this.props.story;

      let editLink;
      let deleteButton; 
      if (this.props.currentUser) {
        if (author.id === this.props.currentUser.id) {
          deleteButton = <button onClick={this.handleDelete}>Delete</button>
          editLink = <Link to={`/stories/${id}/edit`}>Edit Story</Link>
        }   
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
          </div>
          <h1>{title}</h1>
          <img className="story-detail-img" src={story_img_url} />
          <section className="story-detail-body">
            <p>{body}</p>
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