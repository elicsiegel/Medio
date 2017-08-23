import React from 'react';

class StoryDetail extends React.Component {

  componentDidMount() {
    // debugger
    const story = this.props.fetchStory(this.props.match.params.storyId); 
  }

  componentWillReceiveProps(newProps) {
    // if (newProps.post) {
    //   if (newProps.post.id !== +newProps.match.params.postId) {
    //     this.props.fetchPost(newProps.match.params.postId);
    //   }
    // }  
  }

  render() {
    // debugger
    if (this.props.story) {
      return (
        <div className="post-show"> 
          <h1>{this.props.story.title}</h1>
          <p>{this.props.story.body}</p>
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