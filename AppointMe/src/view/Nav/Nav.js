import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';



function Nav() {
    return (
      <div className='navBar'>
          <Link to={`/`} className='logo'>Home</Link>
          <Link to={`/about`} className='logo'>About</Link>
        
        </div>
    );
}


export default Nav;