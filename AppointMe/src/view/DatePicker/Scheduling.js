import React, {useState } from 'react';
import DatePicker from "react-datepicker";
import "./node_modules/react-datepicker/dist/react-datepicker.css";






function Scheduling(props) {
    const [startDate, setstartDate] = useState(new Date())



    function selectedDate(date) {
        setstartDate(date)
        console.log(date)
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

    return (
        <div className='CalendarWrapper'>
            <div className='AppointName'>Select the day of appointment</div>
            <DatePicker
                showDisabledMonthNavigation
                selected={startDate}
                onChange={selectedDate}
                shouldCloseOnSelect={false}
                filterDate={isWeekend}
                inline
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
                minDate={new Date()}
                maxDate={LimitDays(new Date(), 10)}
                minTime={new Date(new Date().setHours(8, 0, 0))}
                maxTime={new Date(new Date().setHours(20, 0, 0))}
            >
            </DatePicker>
        </div>
    );
}

export default Scheduling;
