import React, { } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Context/state';





function Header(props) {

  const [, dispatchloginCheck] = useStateValue();

  function logOut(e) {
    dispatchloginCheck({
      type: 'changeLoginStatus',
      payload: { status: 'false' }  //payload
    })
    localStorage.removeItem('logged-token');

  }


  if (localStorage.getItem('logged-token')) {
    return (
      <div className='header'>
        <Link to={'/dashboard'} className='headerBlock'>Dashboard&nbsp;<i className="far fa-address-card"></i></Link>
        <Link to={`/`} className='headerBlock' onClick={logOut}>Log out&nbsp;<i className="fas fa-sign-out-alt"></i></Link>
      </div>
      


    );
  }
  return (
    <div className='header'>
      <Link to={'/register'} className='headerBlock' >Register&nbsp;<i className="fas fa-user-plus"></i></Link>
      <Link to={`/login`} className='headerBlock'>Sign in&nbsp; <i className="fas fa-sign-in-alt"></i> </Link>
    </div>
  );
}

export default Header;
