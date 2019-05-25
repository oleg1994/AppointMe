import React from 'react';
import './Search.css';
import searchIcon from './../images/search.png';


function Search() {
    return (
      <div className='searchWrapper'>
      <input className='search' type="text" name="fname"></input>
        <div className='searchIcon'><img src={searchIcon} alt="Logo" className='searchSize'/></div>
      </div>
    );
}

export default Search;
