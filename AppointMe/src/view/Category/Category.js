import React, { } from 'react';
import { Link } from 'react-router-dom';
import './Category.css';
import hair from './../images/hair.png';
import nail from './../images/nail.jpg';


function Category(props) {

  return (
    <div className='wrapperCat'>
      <div className='Title'>Choose the service</div>
      <div className='selection'>
        <div className='rowOne'>
          <div className='item'>
            <Link to={`/service/hair-salons`} >
              <img src={hair} alt="Logo" className='categoryImg' />
            </Link>
            Hair Salon's
          </div>
          <div className='item'>
            <Link to={`/service/nail-salons`} >
              <img src={nail} alt="Logo" className='categoryImg' />
            </Link>
            Nail Salon's
          </div>
          <div className='item'>
            <Link to={`/`} >
              <img src={nail} alt="Logo" className='categoryImg' />
            </Link>
            Tanning Salon's
          </div>

        </div>
        <div className='rowTwo'>
          <div className='item'>
            <Link to={`/`} >
              <img src={nail} alt="Logo" className='categoryImg' />
            </Link>
            Massages
          </div>
          <div className='item'>
            <Link to={`/`} >
              <img src={nail} alt="Logo" className='categoryImg' />
            </Link>
            Hair removal
          </div>
          <div className='item'>
            <Link to={`/`} >
              <img src={nail} alt="Logo" className='categoryImg' />
            </Link>
            Skin care
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
