import React from 'react';
import { Link } from 'react-router-dom';

class CommentItem extends React.Component {

  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
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

  render() {
    let deleteButton;
    if (this.props.currentUser) {
      if (this.props.comment.author_id === this.props.currentUser.id) {
        deleteButton = <button onClick={this.handleDelete}>Delete Comment</button>
      }   
    }

    return (
      <div className="comment-item">
        {deleteButton}
        {this.props.comment.body}
      </div>
    );
  }
}

export default CommentItem;