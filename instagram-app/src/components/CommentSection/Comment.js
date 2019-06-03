import React from 'react';


const Comment = props => {
  return (
    <div className="comment-box">
        <h2>{props.comment.username}</h2>
        <p>{props.comment.text}</p>
    </div>
  );
}

export default Comment;