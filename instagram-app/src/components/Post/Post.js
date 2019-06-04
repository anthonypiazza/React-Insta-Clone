import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component{
  constructor(props){
    super(props);
    this.state={
      likes: props.likes,
      username: props.username,
      thumbnail: props.thumbnail,
      image: props.image
    }
  }
  addLike = () => {
    this.setState(prevState => {
      return{
        likes: prevState.likes + 1
      }
    });
  };
  render(){
    return (
      <div className="post">
          <div className="post-header">
              <img className="user-photo" src={this.state.thumbnail} alt={this.state.username}/>
              <h2>{this.state.username}</h2>
          </div>
          <div className="post-image">
              <img src={this.state.image} alt={this.state.username}/>
          </div>
          <div className="icons">
            <i onClick={this.addLike} className="far fa-heart"></i>
            <i className="far fa-comment"></i>
          </div>
          <div className="interactions">
              <h2>{this.state.likes} likes</h2>
          </div>
      </div>
    );
  }
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