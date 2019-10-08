import React, { useState, useEffect } from 'react';
import './../Appointment/Appointment.css'
import { useStateValue } from '../../Context/state';




function Appointment(props) {
  const [serviceName, setserviceName] = useState('')
  const [serviceLogo, setserviceLogo] = useState('')
  const [selected,] = useState([])
  const [servicesList, setservicesList] = useState([])
  const [atleastOne, setAtleastOne] = useState('')
  const [, dispatchServiceFill] = useStateValue();
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
      .then(async (response) => {
        setserviceName(response.name)
        setserviceLogo(response.logo)
        setservicesList(response.services)
        

      })
      .catch(error => console.error('Error:', error));
  }, []);






  function CheckifBoxIsChecked(e) {
    if (e.target.checked === true) {
      selected.push(e.target.name)
      console.log(selected)
      localStorage.setItem('servicesMenu', selected)
      dispatchServiceFill({
        type: 'addtoservicePackage',
        payload: { selected }  //payload
      })

    }
    if (e.target.checked === false) {
      var index = selected.indexOf(e.target.name);
      if (index > -1) {
        selected.splice(index, 1);
        // console.log(selected)
        localStorage.setItem('servicesMenu', selected)
        dispatchServiceFill({
          type: 'addtoservicePackage',
          payload: { selected }  //payload
        })

      }
    }
  }

  function CountinueButton() {
    if (localStorage.getItem('servicesMenu') === null) {
      setAtleastOne('Please select at least one service!')
    }
    if (localStorage.getItem('servicesMenu') !== null && localStorage.getItem('servicesMenu').length !== 0) {
      setAtleastOne('')
      props.history.push('/scheduling')
    }

  }











  return (
    <div className='AppointmentWrapper'>
      <img className='AppointImg' src={serviceLogo} alt=''></img>
      <div className='AppointName'>{serviceName}</div>
      <div className='AppointName'>Select service</div>
      {
        servicesList.map((result, index) => {
          return (
            <form className='AppointInfo' key={index}>
              <div className='ServiceSelection'>
                <div className='ServiceType'><input className='serviceCheckbox' type="checkbox" onChange={CheckifBoxIsChecked} name={Object.keys(result)} ></input>{Object.keys(result)}</div>
                <div className='ServiceType'>{Object.values(result)}</div>
              </div>
            </form>
          )
        })
      }
      <div className='ServiceSelection'>
        <div className='MatchError'>{atleastOne}</div>
      </div>
      <div className='ServiceSelection'>
        <div onClick={CountinueButton} className='OrangeButton'>COUNTINUE</div>
      </div>
      <div className="Splitter"></div>
      {/* <div className='serviceLocation'>
        LOCATION
      </div> */}
    </div>
  );
}


export default Appointment;


