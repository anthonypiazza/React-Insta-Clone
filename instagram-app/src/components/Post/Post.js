import React from 'react';
import PropTypes from 'prop-types';

const Post = props => {
  return (
    <div className="post">
        <div className="post-header">
            <img className="user-photo" src={props.thumbnail} alt={props.username}/>
            <h2>{props.username}</h2>
        </div>
        <div className="post-image">
            <img src={props.image} alt={props.username}/>
        </div>
        <div className="interactions">
            <h2>{props.likes} likes</h2>
        </div>
    </div>
  );
}
Post.defaultProps = {
  likes: 0
}

Post.propTypes= {
  username: PropTypes.string,
  thumbnail: PropTypes.string,
  image: PropTypes.string,
  likes: PropTypes.number
};
export default Post;