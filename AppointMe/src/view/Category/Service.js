import React, { useState, useEffect } from 'react';
import './Service.css';
import Search from '../Search/Search'
import Sort from '../Sort/Sort';

function Service({ match }) {
    console.dir(match.params.id)
    let url = match.params.id
    switch (url) {
        case url = 'hair-salons':
            console.log('test')
            return (
                <div className='serviceWrapper'>
                    <Search />
                    <Sort />
                    <div className='Buisness'>
                        <img src='https://pbs.twimg.com/profile_images/2736392900/6cb90e48d2d7ab563fb5601df9d13cb8.jpeg' alt='' className='bizImage'></img>
                        <div className='bizInfo'>
                            <div className='bizTitle'>Title PlaceHolder</div>
                            <div className='bizMenu'>
                                <div className='serviceItem'>*hair cut</div>
                                <div className='serviceItem'>*shave</div>
                                <div className='serviceItem'>*hair color</div>
                                <div className='serviceItem'>...more</div>
                            </div>
                        </div>
                        {/* <div className='BizPage'></div> */}
                    </div>

                </div>
            );

        case url = 'nail-salons':
            console.log('bb')
            return (
                <div>
                    <Search />
                    <Sort />
                    hello there nail
                    {match.params.id}

                </div>
            );
        default:
            break;
    }
}


export default Service;