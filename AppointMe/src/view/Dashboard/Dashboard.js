import React, { useState, useEffect } from 'react';
import './../Dashboard/Dashboard.css'
import userPhoto from '../images/userPhoto.png';




function Dashboard(props) {
  const [username, setUsername] = useState('')
  const [token,] = useState(localStorage.getItem('logged-token'))


  let userInfo = { token }

  useEffect(() => {


    // fetches user basic info
    fetch('http://localhost:4000/getuserInfo', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => {
        setUsername(response.username)
      })
      .catch(error => console.error('Error:', error));

      
      //fetches biz basic info
    fetch('http://localhost:4000/getbusinessInfo', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => {
        console.log(response)
        
      })
      .catch(error => console.error('Error:', error));






  });



  return (
    <div className='DashboardWrapper'>
      <div className='dashboardTitle'>Dashboard</div>
      <div className='nameNphoto'>
        <img className='userPhoto' src={userPhoto} alt="userPhoto" />
        <div className='userName'>Hello,&nbsp;{username}</div>
      </div>
      <div className='AppointTitle'>My appointments:</div>
      <div className='AppointmentList'>
        <div className='appointItem'>
          <div className='topWrapper'>
            <div className='placeName'>The barbershop</div>
            <div className='editAppoint'><i className="fas fa-ellipsis-h"></i></div>
          </div>
          <div className='middleWrapper'>
            <img className='placePhoto' src='https://pbs.twimg.com/profile_images/2736392900/6cb90e48d2d7ab563fb5601df9d13cb8.jpeg' alt="placePhoto" />
            <div className='placeLoc'>Address:Some street 16,
            <div className='cityPos'>City : Tel-Aviv
            <div className='appointTime'>6/14/2019 - 17:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Dashboard;


