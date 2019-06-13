import React, { } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';



function Header() {
  return (
      <div className='header'>
        <Link to={'/register'} className='headerBlock'>Register</Link>
        <Link to={`/login`} className='headerBlock'>Sign in!</Link>
      </div>

  );
}

export default Header;
