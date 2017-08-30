import React from 'react';
import CommentItem from './comment_item';
import CommentForm from './comment_form';

class Comments extends React.Component {

  render() {
    
    const { deleteComment, commentFormVisible, showCommentForm, createComment, updateComment, currentUser, story, comments} = this.props;
    
    let commentItems;

    if (comments) {
      commentItems = comments.map((comment) => {
        return <CommentItem comment={comment} 
                  currentUser={currentUser}
                  deleteComment={deleteComment}
                  updateComment={updateComment} 
                  key={`comment-key${comment.id}`}/>
      });  
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