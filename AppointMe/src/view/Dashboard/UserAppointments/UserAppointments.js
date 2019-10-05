import React, { useState, useEffect } from 'react';
import './../UserAppointments/UserAppointments.css'




function UserAppointments(props) {
    const [appointments, setappointments] = useState([])
    const [token,] = useState(localStorage.getItem('logged-token'))



    useEffect(() => {

        //fetches biz basic info
        fetch('http://localhost:4000/appointmentInfo', {
            method: 'POST',
            body: JSON.stringify({ token }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                setappointments(response)
            })
            .catch(error => console.error('Error:', error));
    }, [token]);




    return (
        <div className='UserAppointmentsWrapper'>
            {
                appointments.map((result, index) => {
                    return appointments[index].appointments.map((second, index) => {
                        return (
                            <div key={index}>
                                <div className='AppointmentList'>
                                    <div className='appointItem'>
                                        <div className='topWrapper'>
                                            <div className='placeName'>{result.name}</div>
                                            <div className='editAppoint'><i className="fas fa-ellipsis-h"></i></div>
                                        </div>
                                        <div className='middleWrapper'>
                                            <img className='placePhoto' src='https://pbs.twimg.com/profile_images/2736392900/6cb90e48d2d7ab563fb5601df9d13cb8.jpeg' alt="placePhoto" />
                                            <div className='placeLoc'>Address:&nbsp;{result.location},
                    <div className='servicePos'>Service:&nbsp;{second.services}</div>
                                                <div className='appointTime'>{second.dateOfAppointment},{second.timeOfAppointment}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                })
            }
        </div>


    );


}
export default UserAppointments;


