import React from 'react';
import ReactDOM from 'react-dom';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      body: "",
      author_id: this.props.currentUser.id,
      story_id: this.props.story.id
    };
    this.showCommentForm = this.showCommentForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showCommentForm(e) {
    e.stopPropagation();
    this.props.showCommentForm();
  }

  handleSubmit(e) {
    e.preventDefault(); 
    
    this.props.createComment(this.state).then(() => { 
        this.setState({body: ""})
    }); 
    
  }

  componentDidUpdate() {
    if(this.props.story.id !== this.state.story_id) {
      this.setState({story_id: this.props.story.id})
    }
    this.commentFormInput.focus();
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
            placeholder="Add a comment..." 
            className={this.props.commentFormVisible ? "inactive" : "comment-form-input"}
            onClick={this.showCommentForm} />
          <textarea
            className={this.props.commentFormVisible ? "comment-form-input-active" : "inactive"}
            ref={ el => this.commentFormInput = el } 
            value={this.state.body}
            cols='20'
            rows='5'
            onClick={e => e.stopPropagation()}
            onChange={this.update('body')}
            required></textarea>
          <button className="publish-button">Publish</button>
        </form>
      </div> 
    );
  }
}

export default CommentForm; 