import React from 'react';
import styled from 'styled-components';

import Comment from './Comment';

import './Comment.css';

const CommentBox = styled.div`
  width: 638px;
  margin-left: 10%;
  border-bottom: 1px solid #e6e6e6;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  margin-bottom: 50px;
`;

const AddComment = styled.input`
  margin-top: 20px;
  border: none;
  display: flex;
  margin-left: 10px;
  padding: 20px 0%;
  border-top: 1px solid #e6e6e6;
  width: 600px;
  font-weight: bold;
`;


class CommentSection extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      comments: props.comments,
      commentText: "",
      username: "Guest"
    }
  }

  handleChanges = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  addNewComment = (e, index) => {
    e.preventDefault();
    const newComment ={
        ...this.state.comments.id,
        username: this.state.username,
        text: this.state.commentText
    }
    this.setState({
      comments: [...this.state.comments, newComment],
      commentText: ""
    }) 
  }

  render(){
    return (
      <CommentBox>
        {this.state.comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        <form onSubmit={this.addNewComment}>
          <AddComment
            type="text"
            placeholder="Add a comment..."
            name="commentText"
            onChange={this.handleChanges}
            value={this.state.commentText}
          />
        </form>
      </CommentBox>
    );
  }
}

export default CommentSection;