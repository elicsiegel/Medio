import React from 'react';
import { Link } from 'react-router-dom';

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
    // if (newProps.post) {
    //   if (newProps.post.id !== +newProps.match.params.postId) {
    //     this.props.fetchPost(newProps.match.params.postId);
    //   }
    // }  
  }

  handleDelete() {
    this.props.deleteStory(this.props.story).then(() => {
      this.props.history.push("/"); 
    });
  }

  render() {

    if (this.props.story && this.props.match.url !== '/stories/new') {
      const { title, body, author, created_at, id } = this.props.story;
      
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
          {editLink}
          {deleteButton}
          <h4>{author.username}</h4> 
          <p>{created_at}</p>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      ); 
    }

    return (
      <div>

      </div>
    );
  }
}

export default StoryDetail; 