import React from 'react';
import './Header.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';

function Header() {
  return (
      <div className='header'>
          <Link to={'/register'} className='headerBlock'>Register</Link>
          <Link to={`/placeholder`} className='headerBlock'>Sign in!</Link>
        </div>

  );
}

export default Header;
