import React, { useState, useEffect } from 'react';
import './Service.css';
import Search from '../Search/Search'
import Sort from '../Sort/Sort';

function Service({ match }) {
    let url = match.params.id
    switch (url) {
        case url = 'hair-salons':
            return (
                <div className='serviceWrapper'>
                    <Search />
                    <Sort />
                    <div className='Buisness'>
                        <img src='https://pbs.twimg.com/profile_images/2736392900/6cb90e48d2d7ab563fb5601df9d13cb8.jpeg' alt='' className='bizImage'></img>
                        <div className='bizInfo'>
                            <div className='bizTitle'>Title PlaceHolder</div>
                            <div className='bizMenu'>
                                <div className='serviceItem'>Google rating</div>
                                <div className='serviceItem'>Google Location</div>
                                <div className='serviceItem'><div className='bookButton'>BOOK APPOINTMENT!</div></div>
                            </div>
                        </div>
                    </div>

                </div>
            );

        case url = 'nail-salons':
            return (
                <div className='serviceWrapper'>
                <Search />
                <Sort />
                <div className='Buisness'>
                    <img src='https://pbs.twimg.com/profile_images/2736392900/6cb90e48d2d7ab563fb5601df9d13cb8.jpeg' alt='' className='bizImage'></img>
                    <div className='bizInfo'>
                        <div className='bizTitle'>Title PlaceHolder</div>
                        <div className='bizMenu'>
                            <div className='serviceItem'>Google rating</div>
                            <div className='serviceItem'>Google Location</div>
                            <div className='serviceItem'><div className='bookButton'>BOOK APPOINTMENT!</div></div>
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