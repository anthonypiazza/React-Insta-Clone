import React from 'react';


const SearchBar = props => {
  return (
    <div className="search">
      <h1>Instagram </h1>  
        <input 
          onChange={props.filterSearch}
          type="text"
          placeholder="Search"
          name="search"
        /> 
      <i className="far fa-compass"></i>
      <i className="far fa-heart"></i>
      <i className="fas fa-user-alt"></i>
    </div>
  );
}

export default SearchBar;

// - Set up the search bar like the comment input and the like button. 
// In your function, filter out any post whose username doesn't match the 
// search term passed in, then update the state with the resulting data.