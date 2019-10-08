import React, { } from 'react';
import { Link } from 'react-router-dom';
import './Category.css';
import hair from './../images/hair.png';
import nail from './../images/nail.jpg';
import massages from './../images/massages.png';
import hairRemove from './../images/hairRemove.png';
import tanning from './../images/tanning.png';
import skinCare from './../images/skinCare.png';


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
            <Link to={`/service/Nail-Salons`} >
              <img src={nail} alt="Logo" className='categoryImg' />
            </Link>
            Nail Salon's
          </div>
          <div className='item'>
            <Link to={`/service/Tanning-Salons`} >
              <img src={tanning} alt="Logo" className='categoryImg' />
            </Link>
            Tanning Salon's
          </div>

        </div>
        <div className='rowTwo'>
          <div className='item'>
            <Link to={`/service/Massages`} >
              <img src={massages} alt="Logo" className='categoryImg' />
            </Link>
            Massages
          </div>
          <div className='item'>
            <Link to={`/service/Hair-removal`} >
              <img src={hairRemove} alt="Logo" className='categoryImg' />
            </Link>
            Hair removal
          </div>
          <div className='item'>
            <Link to={`/service/Skin-care`} >
              <img src={skinCare} alt="Logo" className='categoryImg' />
            </Link>
            Skin care
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
