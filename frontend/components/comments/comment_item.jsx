import React from 'react';
import { Link } from 'react-router-dom';

class CommentItem extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      body: "",
      author_id: null,
      story_id: null 
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.editStatus = false; 
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

  handleDelete() { 
    this.props.deleteComment(this.props.comment);
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.updateComment(this.state).then(() => {
      this.editStatus = false; 
      this.setState({body: ""});
    });
  }

  toggleEdit() {
    if (this.editStatus === false) {
      this.editStatus = true;
    } else if (this.editStatus === true) {
      this.editStatus = false;
    }
  }

  handleEdit() {
    this.editStatus = true; 
    this.setState({body: this.props.comment.body, id: this.props.comment.id, author_id: this.props.comment.author_id, story_id: this.props.comment.story_id}); 
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {
    let deleteButton;
    let editButton;
    let editForm;

    if (this.props.currentUser) {
      if (this.props.comment.author_id === this.props.currentUser.id) {
        deleteButton = <button onClick={this.handleDelete}>Delete</button>
        editButton = <button onClick={this.handleEdit}>Edit</button>
      }
      if (this.editStatus) { 
        editForm = (
            <form onSubmit={this.handleUpdate}>
              <input className="comment-body-input" value={this.state.body} onChange={this.update('body')} required/>
              <button className="publish-button">Update</button>
            </form>
          ); 
      } 
    }

    if (this.editStatus === false){
        editForm = <p className="comment-item-text">{this.props.comment.body}</p>
      }

    return (
      <div className="comment-item">
        <div className="comment-header">
          <div className="comment-author-info">
            <img className="comment-author-img" src={this.props.comment.author_img_url} /> 
            <h4>{this.props.comment.author.username}</h4>
            <p>{this.stylizeDate(this.props.comment.created_at)}</p>
          </div>
          <div className="comment-modifiers">
            {deleteButton}
            {editButton}
          </div>
        </div>
        <div className="comment-item-body"> 
          {editForm}    
        </div>
      </div>
    );
  }
}

export default CommentItem;