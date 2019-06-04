import React from 'react';
import Comment from './Comment';
import './Comment.css';

// const CommentSection = props => {
class CommentSection extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      comments: props.comments,
      commentText: "",
      username: "Guest"
    }
  }
  // handleChanges = event => {
  //   this.setState({
  //     newComments: [
  //       {
  //         ...this.state.newComments,
  //         [event.target.name]: event.target.value
  //       }
  //     ]
  //   })
  // }
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
      <div className="comment-section">
        {this.state.comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        <form onSubmit={this.addNewComment}>
          <input
            className="add-comment"
            type="text"
            placeholder="Add a comment..."
            name="commentText"
            onChange={this.handleChanges}
            value={this.state.commentText}
          />
        </form>
      </div>
    );
  }
}

export default CommentSection;