import React, { useState, useEffect } from 'react';
import './../Appointment/Appointment.css'
import './../Appointment/day.css'
import Calendar from 'react-calendar'







function Appointment(props) {
  const [serviceName, setserviceName] = useState('')
  const [selected,] = useState([])
  const [renderOptions, setrenderOptions] = useState('')
  const [date, setDate] = useState(new Date())



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
    if (e.target.checked === true) {
      selected.push(e.target.name)
    }
    if (e.target.checked === false) {
      var index = selected.indexOf(e.target.name);

      if (index > -1) {
        selected.splice(index, 1);
      }
    }
  }

  function customRender() {
    setrenderOptions('timeSelect')

  }




  function selectedDate(date) {
    setDate({ date })
    console.log(date)
    
  }
 

  if (renderOptions === 'timeSelect') {
    return (
      <div className='AppointmentWrapper'>
        <div className='AppointName'>Select the day of appointment</div>
        <Calendar onChange={selectedDate} returnValue='end' showNavigation={false} tileDisabled={({ activeStartDate, date, view }) => date.getDay() === 6} tileContent={({date, view }) => view === 'month' && date.getDay() === 1 ? <p>It's Sunday!</p> : null} />
      </div>




    );
  } else {
    return (
      <div className='AppointmentWrapper'>
        <img className='AppointImg' src='https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2832,w_4256,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/_DSC0597a_i6bo5s.jpg' alt=''></img>
        <form className='AppointInfo'>
          <div className='AppointName'>{serviceName}</div>
          <div className='AppointName'>Select service</div>
          <div className='ServiceSelection'>
            <div className='ServiceType'><input className='serviceCheckbox' type="checkbox" onChange={checked} name='Haircut' ></input>Haircut</div>
            <div className='ServiceType'>9.99$</div>
          </div>
          <div className='ServiceSelection'>
            <div className='ServiceType'><input className='serviceCheckbox' type="checkbox" onChange={checked} name='Beard trim' ></input>Beard trim</div>
            <div className='ServiceType'>9.99$</div>
          </div>
          <div className='ServiceSelection'>
            <div className='ServiceType'><input className='serviceCheckbox' type="checkbox" onChange={checked} name='Color' ></input>Color</div>
            <div className='ServiceType'>9.99$</div>
          </div>
          <div className='ServiceSelection'>
            <div className='ServiceType'><input className='serviceCheckbox' type="checkbox" onChange={checked} name='Style' ></input>Style</div>
            <div className='ServiceType'>9.99$</div>
          </div>
          <div className='ServiceSelection'>
            <div className='countinueButton' onClick={customRender}>CONTINUE</div>
          </div>
          <div className='serviceLocation'>
            LOCATION
          <img className='locPlaceHolder' src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg' alt=''></img>
          </div>
        </form>

      </div>
    );
  }
}


export default Appointment;


