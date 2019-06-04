import React from 'react';


function SearchBar() {
  return (
    <div className="search">
      <h1>Instagram </h1>
      <input
        type="text"
        placeholder="Search"
      />
      <i className="far fa-compass"></i>
      <i className="far fa-heart"></i>
      <i className="fas fa-user-alt"></i>
    </div>
  );
}

export default SearchBar;