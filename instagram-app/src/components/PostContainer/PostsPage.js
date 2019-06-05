import React from 'react';

import dummyData from '../../dummy-data';
import '../SearchBar/SearchBar.css';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends React.Component {
    constructor() {
      super();
      this.state = {
        posts: [],
        filteredPosts: []
      };
    }
    componentDidMount(){
      this.setState({
        posts: dummyData
      })
    };
  
    filterSearch = (e) => {
      e.preventDefault();
      const filtered = this.state.posts.filter(post => {
        if (post.username.includes(e.target.value)) {
          return post;
        }
      });
      this.setState({ filteredPosts: filtered });
    };
  
    typeChanges = (e) => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    render(){
        return (
            <div className="posts-page">
                <SearchBar 
                    typeChanges={this.typeChanges} 
                    filterSearch={this.filterSearch} 
                />
                <PostContainer 
                    posts={
                    this.state.filteredPosts.length > 0
                        ? this.state.filteredPosts
                        : this.state.posts
                    }
                />
            </div>
        );
    }
}

export default PostsPage;