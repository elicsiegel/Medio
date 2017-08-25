import React from 'react';
import { Link } from 'react-router-dom';

class CommentItem extends React.Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
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

  toggleEdit() {
    if (this.editStatus === false) {
      this.editStatus = true;
    } else if (this.editStatus === true) {
      this.editStatus = false;
    }
  }

  handleEdit() {

  }

  render() {
    let deleteButton;
    let editButton;
    if (this.props.currentUser) {
      if (this.props.comment.author_id === this.props.currentUser.id) {
        deleteButton = <button onClick={this.handleDelete}>Delete Comment</button>
        editButton = <button onClick={this.handleEdit}>Edit Comment</button>
      }   
    }

    return (
      <div className="comment-item">
        <div className="comment-item-modifiers">
          {deleteButton}
          {editButton}
        </div>
        <div className="comment-item-body"> 
          {this.props.comment.body}
        </div>
      </div>
    );
  }
}

export default CommentItem;