import React from 'react';
// import logo from './logo.svg';
import './Search.css';

function Search() {
    return (
      <div className='searchWrapper'>
      <input className='search' type="text" name="fname"></input>
      <i className="material-icons">search</i>
      </div>
    );
}

export default Search;
