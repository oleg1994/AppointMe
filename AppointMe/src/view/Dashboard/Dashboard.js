import React, { useState, useEffect } from 'react';
import './../Dashboard/Dashboard.css'
import userPhoto from '../images/userPhoto.png';
import UserAppointments from './UserAppointments/UserAppointments';
import UserBusiness from './UserBusiness/UserBusiness';





function Dashboard(props) {
  const [username, setUsername] = useState('')
  const [renderState, setrenderState] = useState('appointments')
  // const [BizIds, setBizIds] = useState([])
  const [token,] = useState(localStorage.getItem('logged-token'))



  useEffect(() => {
    // fetches user basic info
    fetch('http://localhost:4000/getuserInfo', {
      method: 'POST',
      body: JSON.stringify({ token }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => {
        setUsername(response.username)
      })
      .catch(error => console.error('Error:', error));
  }, [token]);



  function changeAvatar(e) {
    fetch('http://localhost:4000/changeAvatar', {
      method: 'POST',
      body: JSON.stringify({ token }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => {
        console.log(response)
      })
      .catch(error => console.error('Error:', error));
  }




  function renderingCondition() {
    if (renderState === 'appointments') {
      return <UserAppointments />
    }
    if (renderState === 'business') {
      return <UserBusiness />
    }
  }


  return (
    <div className='DashboardWrapper'>
      <div className='dashboardTitle'>Dashboard</div>
      <div className='nameNphoto'>
        <div className='avatarContainer'>
        <img className='userPhoto' src={userPhoto} alt="userPhoto" />
        <i className="fas fa-ellipsis-h" onClick={e => changeAvatar()}></i>
        </div>
        <div className='userName'>Hello,&nbsp;{username}</div>
      </div>
      <div className='dashboardNav'><div className='AppointTitle' onClick={e => setrenderState('appointments')}>My appointments <span></span></div><div className='AppointTitle' onClick={e => setrenderState('business')}>My business</div></div>
      <div className='Splitter'></div>
      {
        renderingCondition()
      }
    </div>


  );
}


export default Dashboard;


