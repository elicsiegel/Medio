import React from 'react';
import CommentItem from './comment_item';

class Comments extends React.Component {
  componentDidMount() {
    // request comments from the API  
  }

  render() {
    // debugger
    const {comments, deleteComment, currentUser} = this.props;

    let commentItems;

    if (comments) {
      commentItems = comments.map((comment) => {
        return <CommentItem comment={comment} 
                  currentUser={currentUser}
                  deleteComment={deleteComment} 
                  key={`comment-key${comment.id}`}/>
      });  
    }

    return (
      <div>
        <div className="commentsTitle">
          <h4>Comments</h4>
        </div>
        <div className="commentItemsContainer">
          {commentItems}
        </div>
      </div>
    );
  }
};

export default Comments; 