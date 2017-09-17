import React from 'react';
import CommentItem from './comment_item';
import CommentForm from './comment_form';

class Comments extends React.Component {

  render() {
    
    const { deleteComment, commentFormVisible, showCommentForm, createComment, updateComment, currentUser, story, comments} = this.props;
    
    let commentItems;
    let commentTitle;
    if (comments) {
      commentItems = comments.map((comment) => {
        return <CommentItem comment={comment} 
                  currentUser={currentUser}
                  deleteComment={deleteComment}
                  updateComment={updateComment} 
                  key={`comment-key${comment.id}`}/>
      });
      if (comments.length >= 1) {
        
      commentTitle = <h4>Comments</h4>
      }
    }

    let commentForm;
    if (this.props.currentUser) {
      commentForm = <CommentForm story={story} 
                        createComment={createComment} 
                        showCommentForm={showCommentForm}
                        commentFormVisible={commentFormVisible}
                        currentUser={currentUser} />
    }

    return (
      <div>
      {commentForm} 
        <div className="commentsTitle">
          {commentTitle}
        </div>
        <div className="commentItemsContainer">
          {commentItems}
        </div>
      </div>
    );
  }
};

export default Comments; 