import React, { useState, useEffect } from 'react';
import './../UserAppointments/UserAppointments.css'




function UserAppointments(props) {
    const [appointments, setappointments] = useState([])
    const [token,] = useState(localStorage.getItem('logged-token'))

    useEffect(() => {
        //fetches biz basic info
        fetch('/appointmentInfo', {
            method: 'POST',
            body: JSON.stringify({ token }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                setappointments(response)
                console.log(response)
            })
            .catch(error => console.error('Error:', error));
    }, [token]);
    return (
        <div className='UserAppointmentsWrapper'>
            {
                appointments.map((result, index) => {
                    return appointments[index].appointments.map((second, index) => {
                        // var date = new Date(second.dateOfAppointment);
                        // var followingDay = new Date(date1.getTime() + 86400000);                   // TO-DO Expiration Check
                        // console.log(second.dateOfAppointment +'following dayy' +followingDay)
                        if (second.usernameID === token ) {
                            return (
                                <div key={index}>
                                    <div className='AppointmentList'>
                                        <div className='appointItem'>
                                            <div className='topWrapper'>
                                                <div className='placeName'>{result.name}</div>
                                                <div className='editAppoint'><i className="fas fa-ellipsis-h"></i></div>
                                            </div>
                                            <div className='middleWrapper'>
                                                <div className="containerplacePhoto">
                                                    <img className='placePhoto' src={result.logo} alt="placePhoto" />
                                                </div>
                                                <div className='placeLoc'>Address:&nbsp;{result.location},
                                            <div className='servicePos'>Service:&nbsp;{second.services.replace(/,/g, ', ')}</div>
                                                    <div className='appointTime'>{second.dateOfAppointment},{second.timeOfAppointment}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                })
            }
        </div>


    );


}
export default UserAppointments;


