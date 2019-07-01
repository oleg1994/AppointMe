import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import './../Scheduling/Scheduling.css'
import "react-datepicker/dist/react-datepicker.css";
import { useStateValue } from '../../Context/state';
import TimeSelector from '../TimeSelector/TimeSelector';







function Scheduling(props) {
    const [startDate, setstartDate] = useState(null)
    const [time, setTime] = useState('Select time')
    const [date, setDate] = useState('Select date')
    const [servicename, setserviceName] = useState()
    const [serviceContext,] = useStateValue();
    const [serviceList, setserviceList] = useState(serviceContext.servicePackage.selected)
    const [excluded, setexcluded] = useState([])
    const [hour, sethour] = useState([])
    const [minute, setminute] = useState([])
    let tempHours = []
    const [checkTimeSpace, setcheckTimeSpace] = useState(false)



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
        fetch('http://localhost:4000/getOneBusinesses', {
            method: 'POST',
            body: JSON.stringify({ service }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                setserviceName(response.name)
                // console.log(response)
            })
            .catch(error => console.error('Error:', error));
    }, []);



    function RegisterAppointment() {
        if (date !== 'Select date' && time !== 'Select time') {
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
        }
    }



    useEffect(() => {
        let service = localStorage.getItem('selectedService')
        fetch('http://localhost:4000/getAllBusinessesAppointments', {
            method: 'POST',
            body: JSON.stringify({ service }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                // console.log(response)
                setexcluded(response)
                console.log(response)
                response.forEach(element => {
                    console.log(element.date)
                    console.log(date)
                    if (date === element.date) {
                        console.log(element.date)


                    }
                });


            })
            .catch(error => console.error('Error:', error));
    }, [date]);


    excluded.map((newT, index) => {
        return (
            tempHours.push(parseInt(newT.time.slice(0, -3)))
        )
    });


    console.log(tempHours)


    return (
        <div className='CalendarWrapper'>
            <div className='AppointName'>Select the day of appointment</div>
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
                        tempHours.map((hourz, index) => { return new Date(new Date().setHours(hourz, 0, 0)); })
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
                <div className='approveButton' onClick={RegisterAppointment}>Approve</div>
            </div>
        </div>
    );
}

export default Scheduling;
