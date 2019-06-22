import React, {} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import {useStateValue} from '../../Context/state';






function Header(props) {
  
  const [, dispatchloginCheck] = useStateValue();
 
  function logOut(e) {
    dispatchloginCheck({
      type: 'changeLoginStatus',
      payload: { status: 'false' }  //payload
  })
    localStorage.removeItem('logged-token');
  }


  if (localStorage.getItem('logged-token')){
    return (
      <div className='header'>
        <Link to={'/dashboard'} className='headerBlock'>Dashboard</Link>
        <Link to={`/`} className='headerBlock' onClick={logOut}>Log out</Link>
      </div>
      

    );
  }
  return (
      <div className='header'>
        <Link to={'/register'} className='headerBlock' >Register</Link>
        <Link to={`/login`} className='headerBlock'>Sign in!</Link>
      </div>
  );
}

export default Header;
