import React, { useState, useEffect } from 'react';
import './../UserBusiness/UserBusiness.css'
import AddBusiness from './AddBusiness/AddBusiness';





function UserBusiness(props) {
  const [renderState, setrenderState] = useState('noBusiness')
  const [biz, setbiz] = useState([])
  const [token,] = useState(localStorage.getItem('logged-token'))


  useEffect(() => {
    fetch('http://localhost:4000/ownedBusiness', {
      method: 'POST',
      body: JSON.stringify({ token }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => {
        if (response.success) {
          let bizness = response.success
          setbiz([...biz, { bizness }])
          setrenderState('HasBusiness')
        }

      })
      .catch(error => console.error('Error:', error));
  }, [token,])

  function RenderingOptions() {
    if (renderState !== 'NewBiz') {
      setrenderState('NewBiz')
    }

  }
  console.log(biz)


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
      <div className='serviceWrapper'>
        <div className='serviceWrapper'>
        <div>Your business</div>
          {
            biz.map((result, index) => {
              return (
                <div className='Buisness' key={index}>
                  <img src='https://i.imgur.com/CaFZ8N6.jpg' alt='' className='bizImage' ></img>
                  <div className='bizInfo' >
                    <div className='bizTitle'>business name: {result.bizness.name}</div>
                    <div className='bizMenu'>
                      <div className='serviceItem'>business category: {result.bizness.category}</div>
                      <div className='serviceItem'>business telephone: {result.bizness.telephone}</div>
                      <div className='serviceItem'>amount of appointments scheduled: {result.bizness.appointments.length}</div>
                    </div>
                  </div>
                </div>

              )
            })
          }

        </div>

      </div>
    );
  }
  if (renderState === 'NewBiz') {
    return (
      <AddBusiness />
    )
  }


}


export default UserBusiness;


