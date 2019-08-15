import React, { useEffect, useState } from 'react';
import './Service.css';
import Search from '../Search/Search'
import { Link } from 'react-router-dom';


function Service({match}) {
    let url = match.params.id;
    const [biz, setbiz] = useState([])


    useEffect(() => {
        fetch('http://localhost:4000/getBusinesses', {
        }).then(res => res.json())
            .then(response => {
                setbiz(response)
            })
            .catch(error => console.error('Error:', error));
    }, []);


 


    switch (url) {
        case url = 'hair-salons': 
            return (
                <div className='serviceWrapper'>
                    {/* <Search /> */}
                    {
                        biz.map((result, index) => {
                            return (
                                <div className='Buisness' key={index}>
                                    <img src='https://pbs.twimg.com/profile_images/2736392900/6cb90e48d2d7ab563fb5601df9d13cb8.jpeg' alt='' className='bizImage' ></img>
                                    <div className='bizInfo' >
                                        <div className='bizTitle'>{result.name}</div>
                                        <div className='bizMenu'>
                                            <div className='serviceItem'>Google rating</div>
                                            <div className='serviceItem'>{result.location}</div>
                                            
                                            <div className='serviceItem' ><Link to={'/appointment'} ><div className='OrangeButton'  onClick={e => localStorage.setItem('selectedService', result._id)}>BOOK APPOINTMENT</div></Link></div>
                                        </div>
                                    </div>
                                </div>
                            
                            )
                        })
                    }
                 
                </div>
            );
        case url = 'nail-salons':
            return (
                <div className='serviceWrapper'>
                {/* <Search /> */}
                <div className='Buisness'>
                    <img src='https://pbs.twimg.com/profile_images/2736392900/6cb90e48d2d7ab563fb5601df9d13cb8.jpeg' alt='' className='bizImage'></img>
                    <div className='bizInfo'>
                        <div className='bizTitle'>Title HRH</div>
                        <div className='bizMenu'>
                            <div className='serviceItem'>Google rating</div>
                            <div className='serviceItem'>Google Location</div>
                            <div className='serviceItem'><div className='bookButton'>BOOK APPOINTMENT</div></div>
                        </div>
                    </div>
                </div>
            </div>
            );
        default:
            break;
    }
}


export default Service;