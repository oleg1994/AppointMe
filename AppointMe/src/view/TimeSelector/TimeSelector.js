import React, { useState} from 'react';
import './../TimeSelector/TimeSelector.css'







function TimeSelector() {
    const [time, setTime] = useState()
return(
    <ul className='timeWrapper'> 
        <li className='time' tabIndex="1"  onClick={timeSelected}>8:00</li>
        <li className='time' tabIndex="1" onFocus={timeSelected}>8:15</li>
        <li className='time' tabIndex="1">8:30</li>
        <li className='time' tabIndex="1">8:45</li>
        <li className='time' tabIndex="1">9:00</li>
        <li className='time' tabIndex="1">9:15</li>
        <li className='time' tabIndex="1">9:30</li>
        <li className='time' tabIndex="1">9:45</li>
        <li className='time' tabIndex="1">10:00</li>
        <li className='time' tabIndex="1">10:15</li>
        <li className='time' tabIndex="1">10:30</li>
        <li className='time' tabIndex="1">10:45</li>
        <li className='time' tabIndex="1">11:00</li>
        <li className='time' tabIndex="1">11:15</li>
        <li className='time' tabIndex="1">11:30</li>
        <li className='time' tabIndex="1">11:45</li>
        <li className='time' tabIndex="1">12:00</li>
        <li className='time' tabIndex="1">12:15</li>
        <li className='time' tabIndex="1">12:30</li>
        <li className='time' tabIndex="1">12:45</li>
        <li className='time' tabIndex="1">13:00</li>
        <li className='time' tabIndex="1">13:15</li>
        <li className='time' tabIndex="1">13:30</li>
        <li className='time' tabIndex="1">13:45</li>
        <li className='time' tabIndex="1">14:00</li>
        <li className='time' tabIndex="1">14:15</li>
        <li className='time' tabIndex="1">14:30</li>
        <li className='time' tabIndex="1">14:45</li>
        <li className='time' tabIndex="1">15:00</li>
        <li className='time' tabIndex="1">15:15</li>
        <li className='time' tabIndex="1">15:30</li>
        <li className='time' tabIndex="1">15:45</li>
        <li className='time' tabIndex="1">16:00</li>
        <li className='time' tabIndex="1">16:15</li>
        <li className='time' tabIndex="1">16:30</li>
        <li className='time' tabIndex="1">16:45</li>
        <li className='time' tabIndex="1">17:00</li>
        <li className='time' tabIndex="1">17:15</li>
        <li className='time' tabIndex="1">17:30</li>
        <li className='time' tabIndex="1">17:45</li>
        <li className='time' tabIndex="1">18:00</li>
        <li className='time' tabIndex="1">18:15</li>
        <li className='time' tabIndex="1">18:30</li>
        <li className='time' tabIndex="1">18:45</li>
        <li className='time' tabIndex="1">19:00</li>
        <li className='time' tabIndex="1">19:15</li>
        <li className='time' tabIndex="1">19:30</li>
        <li className='time' tabIndex="1">19:45</li>
        <li className='time' tabIndex="1">20:00</li>
    </ul>
)

function timeSelected(e) {
    setTime(e.target.innerHTML)
    console.log(e.target.innerHTML)

}

}

export default TimeSelector;
