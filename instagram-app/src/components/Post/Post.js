import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: 10%;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0%;
  border: 1px solid #e6e6e6;
  width: 638px;
`;

const UserThumbnail = styled.img`
  border-radius: 50%;
  width: 30px;
  margin-left: 20px;
  margin-right: 10px;
`;

const PostUsername = styled.h2`
  font-size: 1rem;
`;

const PostImage = styled.div`
  height: auto;
  width: 600px;
`;

const Interactions = styled.h2`
  font-size: .9rem;
  text-align: left;
  padding-left: 11px;
  margin-top: -4px;
  margin-bottom: -5px;
  width: 627px;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
`;

const IconsDiv = styled.div`
  width: 638px;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  margin-top: -4px;
  display: flex;
`;

const Icons = styled.i`
  margin: 10px;
  font-size: 1.3rem;
`;
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
      <PostBox>
        <PostHeader>
            <UserThumbnail className="user-photo" src={this.state.thumbnail} alt={this.state.username}/>
            <PostUsername>{this.state.username}</PostUsername>
        </PostHeader>
        <PostImage>
            <img src={this.state.image} alt={this.state.username}/>
        </PostImage>
        <IconsDiv>
          <Icons onClick={this.addLike} className="far fa-heart"></Icons>
          <Icons className="far fa-comment"></Icons>
        </IconsDiv>
        <div>
            <Interactions>{this.state.likes} likes</Interactions>
        </div>
      </PostBox>
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