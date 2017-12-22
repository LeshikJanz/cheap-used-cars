import * as React from 'react';
import '../styles/searchBar.scss';
const searchIcon = require('assets/icons/search.png');

const SearchBar = () => (
  <div className="searchBarContainer">
    <input type="text"
           placeholder="Search for a model, or get started by choosing a colour, budget, or feature"
    />
    <button>
      <label htmlFor="search">Search</label>
      <img src={searchIcon} id="search" alt="Run search"/>
    </button>
  </div>
);

export default SearchBar;