import React from 'react';
import './Middle.css';
import Ali from './Shops/Aliexpress/Ali'

function Middle() {
    return (
      <div className='shopsWrapper'>
      <div className='Aliexpress'><Ali/></div>
      <div className='Amazon'>Amazon</div>
      <div className='Ebay'>Ebay</div>
      </div>
    );
}

export default Middle;
