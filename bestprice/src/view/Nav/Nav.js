<<<<<<< HEAD:bestprice/src/view/Nav/Nav.js
import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <div className='navBar'>
      <h1>LOGO</h1><h1>Button</h1>
=======
import React, { useState, useEffect } from 'react';
import './Ali.css';
import example from '../../../../images/aliExample.png'

function Ali(){
    const [product, SetProduct] = useState('');

    return (
      <div className='wrapper'>
        <img className='example'  src={example} alt="fireSpot" />
        <div><img className='image' src={example} alt="fireSpot" /></div>
>>>>>>> master:bestprice/src/view/Middle/Shops/Aliexpress/Ali.js
      </div>
    );
}

export default Nav;
