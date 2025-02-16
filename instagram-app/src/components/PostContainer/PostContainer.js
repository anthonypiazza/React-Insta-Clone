import React from 'react';

import CommentSection from '../CommentSection/CommentSection';
import Post from '../Post/Post';
import '../Post/Post.css'

const PostContainer = props => {
  return (
    <div>
      {props.posts.map((post) => {
        return(
          <div>
            <Post 
              post={post} 
              likes={post.likes} 
              image={post.imageUrl} 
              thumbnail={post.thumbnailUrl} 
              username={post.username} 
              key={post.timestamp} 
            />
            <CommentSection 
              comments={post.comments} 
              key={post.id} 
            />
          </div>
        );
      })}
    </div>
  );
}


export default PostContainer;