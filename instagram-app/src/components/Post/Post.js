import React from 'react';


const Post = props => {
  return (
    <div className="post">
        <div className="post-header">
            <img className="user-photo" src={props.thumbnail} />
            <h2>{props.username}</h2>
        </div>
        <div className="post-image">
            <img src={props.image} />
        </div>
        <div className="interactions">
            <h2>{props.likes} likes</h2>
        </div>
    </div>
  );
}

export default Post;