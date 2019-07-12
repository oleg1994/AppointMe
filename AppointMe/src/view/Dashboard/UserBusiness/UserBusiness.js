import React, { useState, useEffect } from 'react';
import './../UserBusiness/UserBusiness.css'
import AddBusiness from './AddBusiness/AddBusiness';





function UserBusiness(props) {
  const [renderState, setrenderState] = useState('noBusiness')


  function RenderingOptions() {
    if (renderState !== 'NewBiz') {
      setrenderState('NewBiz')
    }
    
  }


  if (renderState === 'noBusiness') {
    return (
      <div>
        <div className='UserBusinessTextNoBiz'>We don't have any business registered under your ownership on our platform.</div>
        <div className='Splitter'></div>
        <div className='OrangeButton' onClick={RenderingOptions}>Add business &nbsp; <i className="fas fa-plus"></i></div>
      </div>
    )
  }
  if (renderState === 'HasBusiness') {
    return (
      <div>

      </div>
    )
  }
  if (renderState === 'NewBiz') {
    return (
      <AddBusiness />
    )
  }


}


export default UserBusiness;


