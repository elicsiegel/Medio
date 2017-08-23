import React from 'react';
import { Link } from 'react-router-dom';

class StoryDetail extends React.Component {

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

  render() {

    if (this.props.story && this.props.match.url !== '/stories/new') {
      const { title, body, author, created_at, id } = this.props.story;
      
      let editLink;
      if (this.props.currentUser) {
        if (author.id === this.props.currentUser.id) {
          
          editLink = <Link to={`/stories/${id}/edit`}>Edit Story</Link>
        }   
      }

      return (
        <div className="story-show">
          {editLink}
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