import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';



function Nav() {
    return (
      <div className='navBar'>
          <Link to={`/`} className='logo'>Home</Link>
        <i className="material-icons" >menu</i>
        </div>
    );
}


export default Nav;