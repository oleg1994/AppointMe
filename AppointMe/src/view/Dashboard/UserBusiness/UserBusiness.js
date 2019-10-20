import React, { useState, useEffect } from 'react';
import './../UserBusiness/UserBusiness.css'
import AddBusiness from './AddBusiness/AddBusiness';





function UserBusiness(props) {
  const [renderState, setrenderState] = useState('noBusiness')
  const [biz, setbiz] = useState([])
  const [test, settest] = useState([])
  const [fest, setfest] = useState([])
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
        if (response.business) {
          let bizness = response.business
          let biznessAppoints = response.appoints
          let biznessUsers = response.usersInfo
          setbiz(bizness)
          settest(biznessAppoints)
          setfest(biznessUsers)
          setrenderState('HasBusiness')
        }
      })
      .catch(error => console.error('Error:', error));
  }, [token])
 
  for (let i = 0; i < test.length; i++) {
    for (let j = 0; j < fest.length; j++) {
      if (test[i].usernameID === fest[j]._id) {
        test[i].usernameID = fest[j].username
      }
    }
  }

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
      <div className='serviceWrapper'>
        <div className='serviceWrapper'>
          {
            [biz].map((result, index) => {
              return (
                <div key={index}>
                  <div className='Buisness'>
                    <img src='https://i.imgur.com/CaFZ8N6.jpg' alt='' className='bizImage' ></img>
                    <div className='bizInfo' >
                      <div className='bizTitle'>{result.name}</div>
                      <div className='bizMenu'>
                        <div className='serviceItem'>Category: {result.category}</div>
                        <div className='serviceItem'>Tel. {result.telephone}</div>
                        <div className='serviceItem'>scheduled: {result.appointments.length}&nbsp;appointments</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
          {
            test.map((result, index) => {
              return (
                <div key={index} className='userList'>
                  <div className='log'>NAME:<div className='logInner'>{result.usernameID}</div></div>
                  <div className='log'>DATE:<div className='logInner' >{result.dateOfAppointment}</div></div>
                  <div className='log'>TIME:<div className='logInner'>{result.timeOfAppointment}</div></div>
                  <div className='log'>SERVICES:<div className='logInner'>{result.services}</div></div>
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


