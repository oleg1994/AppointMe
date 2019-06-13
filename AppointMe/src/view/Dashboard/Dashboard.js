import React, { } from 'react';
import './../Dashboard/Dashboard.css'
import userPhoto from '../images/userPhoto.png'; 




function Dashboard(props) {
  return (
    <div className='DashboardWrapper'>
      <div className='dashboardTitle'>Dashboard</div>
      <div className='nameNphoto'>
        <img className='userPhoto' src={userPhoto} alt="userPhoto"/>
        <div className='userName'>Oleg Melnyk</div>
      </div>
      <div className='AppointTitle'>My appointments:</div>
      <div className='AppointmentList'>
        <div className='appointItem'>
          <div className='topWrapper'>
          <div className='placeName'>The barbershop</div>
          <div className='editAppoint'>...</div>
          </div>
          <div className='middleWrapper'>
            <img className='placePhoto' src='https://previews.customer.envatousercontent.com/files/263761146/IMG_5727.jpg' alt="placePhoto" />
            </div>
          {/* <div className='placeLoc'></div>
          <div className='appointTime'></div> */}
        </div>
      </div>
    </div>
  );
}


export default Dashboard;


