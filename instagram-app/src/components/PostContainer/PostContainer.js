import React from 'react';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props => {
  return (
    <div className="posts">
      {props.posts.map(post => <CommentSection comments={post.comments} key={post.timestamp} />)}
    </div>
  );
}

export default PostContainer;