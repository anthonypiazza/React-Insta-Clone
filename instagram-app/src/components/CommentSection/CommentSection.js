import React from 'react';
import Comment from './Comment';
import './Comment.css';

const CommentSection = props => {
  return (
    <div className="comment-section">
      {props.comments.map(comment => <Comment comment={comment} />)}
      <input
        className="add-comment"
        type="text"
        placeholder="Add a comment..."
      />
    </div>
  );
}

export default CommentSection;
