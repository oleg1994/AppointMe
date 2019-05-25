import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';



class Nav extends React.Component {
  render() {
    return (
    
      <div className='navBar'>
          <Link to={`/`} className='logo'>Home</Link>
          <i className="material-icons">menu</i>
      </div>
      
    );
}
}

export default Nav;