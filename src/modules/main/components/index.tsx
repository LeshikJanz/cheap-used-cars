import * as React from 'react';
import '../styles/style.scss';
import SearchBar from './searchBar';

const Main = () => (
  <div className="mainPageContainer">
    <div className="backgroundFilter"/>
    <div className="searchBlock">
      <SearchBar/>
    </div>

    <h1>Cheap Used Cars</h1>
  </div>
);

export default Main;