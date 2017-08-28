import React from 'react';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      body: "",
      author_id: this.props.currentUser.id,
      story_id: this.props.story.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault(); 
    this.props.createComment(this.state).then(() => { 
        this.setState({body: ""})
    }); 
    
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {
    return (
      <div className="comment-form">
        <h4>Create Comment</h4>
        <form  onSubmit={this.handleSubmit}>
          <textarea
            className="comment-form-input"
            ref="body"
            value={this.state.body}
            cols='20'
            rows='5'
            placeholder="Add a comment..."
            onChange={this.update('body')}
            required></textarea>
          <button className="publish-button">Publish</button>
        </form>
      </div> 
    );
  }
}

export default CommentForm; 