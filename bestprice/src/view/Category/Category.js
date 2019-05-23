import React from 'react';
import './Category.css';

class Nav extends React.Component {
  render() {
    return (
      <div>
      <div className='Title'>Choose the service you looking for</div>
      <div className='selection'>
      <div className='rowOne'>
      <div className='item'>HAIR</div>
      <div className='item'>NAIL</div>
      <div className='item'>Massage</div>
      </div>
      <div className='rowTwo'>
      <div className='item'>OTHER</div>
      <div className='item'>OTHER</div>
      <div className='item'>OTHER</div>
      </div>
      </div>
      </div>
    );
  }
}

export default Nav;
