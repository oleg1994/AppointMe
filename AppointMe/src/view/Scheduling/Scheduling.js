import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import './../Scheduling/Scheduling.css'
import "react-datepicker/dist/react-datepicker.css";
import { useStateValue } from '../../Context/state';
import Info from '../Pop-up/InfoIcon';








function Scheduling(props) {
    const [startDate, setstartDate] = useState(null)
    const [time, setTime] = useState('Select time')
    const [date, setDate] = useState('Select date')
    const [servicename, setserviceName] = useState()
    const [serviceContext, setserviceContext] = useStateValue();
    const [serviceList, setserviceList] = useState(serviceContext.servicePackage.selected)
    const [excluded, setexcluded] = useState([])




    useEffect(() => {
        setserviceList(localStorage.getItem('servicesMenu'))

    }, []);



    function selectedDate(date) {
        setstartDate(date)
        setDate(date.toDateString())
        const datelocal = date.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        setTime(datelocal.slice(0, -3))
        setserviceList(localStorage.getItem('servicesMenu'))
    }

    function LimitDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    function isWeekend(startDate) {
        let day = startDate.getDay()
        return day !== 6
    }


    useEffect(() => {
        let service = localStorage.getItem('selectedService')
        fetch('/getOneBusinesses', {
            method: 'POST',
            body: JSON.stringify({ service }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                setserviceName(response.name)
            })
            .catch(error => console.error('Error:', error));
    }, []);



    function RegisterAppointment() {
        if (localStorage.getItem('logged-token') && date !== 'Select date' && time !== 'Select time') {
            let user = localStorage.getItem('logged-token')
            let buisness = localStorage.getItem('selectedService')
            let appointment = { user, buisness, date, time, serviceList }
            fetch('http://localhost:4000/registerAppointment', {
                method: 'POST',
                body: JSON.stringify({ appointment }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(response => {
                    if (response.occupied) {
                        console.log(response.occupied.dateOfAppointment)
                    }
                    if (response.success) {
                        props.history.push('/dashboard')
                    }
                })
                .catch(error => console.error('Error:', error));
        } else {
            setserviceContext({
                type: 'popUp',
                payload: { status: true, message: 'Please sign-in or register to proceed',url:`/scheduling`}  //payload
            })

        }
    }



    useEffect(() => {
        let tempData = []
        let service = localStorage.getItem('selectedService')
        fetch('/getAllBusinessesAppointments', {
            method: 'POST',
            body: JSON.stringify({ service }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                response.forEach(element => {
                    if (date === element.date) {
                        tempData.push(element)
                        tempData.map((result, index) => (
                            tempData.push(result)
                        ))
                    }
                    setexcluded([])
                    setexcluded(tempData)
                });


            })
            .catch(error => console.error('Error:', error));
    }, [date]);


    return (
        <div className='CalendarWrapper'>
            <Info />
            <div className='AppointName'>Select the day and time</div>
            <div className='timeandDate' >
                <DatePicker
                    selected={startDate}
                    onChange={selectedDate}
                    shouldCloseOnSelect={false}
                    filterDate={isWeekend}
                    inline
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                    minDate={new Date()}
                    maxDate={LimitDays(new Date(), 10)}
                    minTime={new Date(new Date().setHours(8, 0, 0))}
                    maxTime={new Date(new Date().setHours(20, 0, 0))}
                    timeFormat="HH:mm"
                    excludeTimes={
                        excluded.map((exclude, index) => { return new Date(new Date().setHours(parseInt(exclude.time.slice(0, -3)), exclude.time.slice(3), 0)); })
                    }
                />
            </div>
            < div className='reviewWrapper' >
                <div className='AppointName'>Review Appointment details:</div>
                <div className='reviewItem'>
                    <div className='topWrapper'>
                        <div className='placeName'>{servicename}</div>
                    </div>
                    <div className='middleWrapper'>
                        <img className='serviceZPhoto' src='https://pbs.twimg.com/profile_images/2736392900/6cb90e48d2d7ab563fb5601df9d13cb8.jpeg' alt="placePhoto" />
                        <div className='schedulingInfo'>
                            <div className='dateReview'>{date}, {time}</div>
                            <div className='serviceReview'>Service:{serviceList}</div>
                        </div>
                    </div>
                </div>
                <div className='OrangeButton' onClick={RegisterAppointment}>APPROVE APPOINTMENT</div>
            </div>
        </div>
    );
}

export default Scheduling;
