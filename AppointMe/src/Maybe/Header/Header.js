import React from 'react';
import './Header.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';

function Header() {
  return (
    <Router>
      <div className='header'>
        <Link to={`/`} className='register'>Register</Link>
        <Link to={`/`} className='login'>Sign in!</Link>
      </div>
    </Router>

  );
}

export default Header;
