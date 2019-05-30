import React from 'react';
import './../Sort/Sort.css';


function Sort() {
  return (
    <div className='sortWrapper'>
      <div className='sortButton'>Sort by:</div>
      <div className='sortButton'>Featured</div>
      <div className='sortButton'>Distance</div>
      <div className='sortButton'>Price</div>
    </div>
  );
}

export default Sort;
