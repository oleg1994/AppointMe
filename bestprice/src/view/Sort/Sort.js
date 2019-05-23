import React from 'react';
import './Sort.css';

function Sort() {
    return (
      <div className='sortWrapper'>
      <div>Sort by:</div>
      <div className='Featured'>Featured</div>
      <div className='Featured'>Orders</div>
      <div className='Featured'>Newest</div>
      <div className='Featured'>Price</div>
      </div>
    );
}

export default Sort;
