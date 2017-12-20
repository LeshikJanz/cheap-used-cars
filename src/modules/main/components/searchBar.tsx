import * as React from 'react';
import '../styles/searchBar.scss';

const SearchBar = () => (
  <div className="searchBarContainer">
    <input type="text"/>
    <button>Search</button>
  </div>
);

export default SearchBar;