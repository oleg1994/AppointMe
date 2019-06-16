import React, { useEffect, useState } from 'react';
import './Hair.css';
import Search from '../../Search/Search'
import Sort from '../../Sort/Sort'

function Hair(props) {

    const [biz, setbiz] = useState([])


    useEffect(() => {
        fetch('http://localhost:4000/getBusinesses', {
        }).then(res => res.json())
            .then(response => {
                // console.log(response)
                setbiz(response)
            })
            .catch(error => console.error('Error:', error));
    }, []);


    console.log(biz)




    return (
        <div className='serviceWrapper'>
            {/* <Search /> */}
            {/* <Sort /> */}
            <div className='Buisness'>
                <img src='https://pbs.twimg.com/profile_images/2736392900/6cb90e48d2d7ab563fb5601df9d13cb8.jpeg' alt='' className='bizImage'></img>
                <div className='bizInfo'>
                    <div className='bizTitle' >the place</div>
                    <div className='bizMenu'>
                        <div className='serviceItem'>Google rating</div>
                        <div className='serviceItem'>the location</div>
                        <div className='serviceItem'><div className='bookButton'>BOOK APPOINTMENT!</div></div>
                    </div>
                </div>
            </div>

        </div>
    );
}



export default Hair;