import React from 'react';

import './components/SearchBar/SearchBar.css';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }
  componentDidMount(){
    this.setState({
      posts: dummyData,
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
      <div className="App">
        <SearchBar typeChanges={this.typeChanges} filterSearch={this.filterSearch} />
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

export default App;
