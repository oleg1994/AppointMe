import React, { useState, useEffect } from 'react';
import './../Appointment/Appointment.css'





function Appointment(props) {
  const [serviceName, setserviceName] = useState('')

  // const [selectedService, setSelectedService] = useState([])


  useEffect(() => {
    let service = localStorage.getItem('selectedService')
    fetch('http://localhost:4000/getOneBusinesses', {
      method: 'POST',
      body: JSON.stringify({ service }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => {
        setserviceName(response.name)
        console.log(response)
      })
      .catch(error => console.error('Error:', error));
  }, []);

  function checked(e) {
    console.log(e.target.value)
  }


  return (
    <div className='AppointmentWrapper'>
      <img className='AppointImg' src='https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2832,w_4256,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/_DSC0597a_i6bo5s.jpg' alt=''></img>
      <form className='AppointInfo'>
        <div className='AppointName'>{serviceName}</div>
        <div className='AppointName'>Select service</div>
        <div className='ServiceSelection'>
          <div className='ServiceType'><input className='serviceCheckbox' type="checkbox"></input>Haircut</div>
          <div className='ServiceType'>9.99$</div>
        </div>
        <div className='ServiceSelection'>
          <div className='ServiceType'><input className='serviceCheckbox' type="checkbox"></input>Beard trim</div>
          <div className='ServiceType'>9.99$</div>
        </div>
        <div className='ServiceSelection'>
          <div className='ServiceType'><input className='serviceCheckbox' type="checkbox"></input>Color</div>
          <div className='ServiceType'>9.99$</div>
        </div>
        <div className='ServiceSelection'>
          <div className='ServiceType'><input className='serviceCheckbox' type="checkbox" onChange={checked} ></input>Style</div>
          <div className='ServiceType'>9.99$</div>
        </div>
        <div className='serviceLocation'>
          LOCATION
          <img className='locPlaceHolder' src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg' alt=''></img>
        </div>
      </form>

    </div>
  );
}


export default Appointment;


