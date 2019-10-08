import React, { useEffect, useState } from 'react';
import './Service.css';
import Search from '../Search/Search'
import { Link } from 'react-router-dom';


function Service({ match }) {
    let url = match.params.id;
    const [allBiz, setallBiz] = useState([])
    let bizHair = []
    let bizNail = []
    let bizSkin = []
    let bizTanning = []
    let bizMassages = []
    let bizRemoval = []

    localStorage.removeItem('servicesMenu');


    useEffect(() => {
        let test = 'match.params.id';
        fetch('http://localhost:4000/api/getBusinesses', {
            method: 'POST',
            body: JSON.stringify({ test }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                console.log(response)
                setallBiz(response)
            })
            .catch(error => console.error('Error:', error));

    }, []);


    allBiz.forEach(ele => {
        if (ele.category === 'Hair Salon') {
            bizHair.push(ele)
        }
        if (ele.category === "Massages") {
            bizMassages.push(ele)
        }
        if (ele.category === 'Skin care') {
            bizSkin.push(ele)
        }
        if (ele.category === `Nail Salon`) {
            bizNail.push(ele)
        }
        if (ele.category === "Tanning Salon") {
            bizTanning.push(ele)
        }
        if (ele.category === 'hair removal') {
            bizRemoval.push(ele)
        }
    });



    switch (url) {
        case url = 'hair-salons':
            return (
                <div className='serviceWrapper'>
                    {
                        bizHair.map((result, index) => {
                            return (
                                <div className='Buisness' key={index}>
                                    <img src={result.logo} alt='logo' className='bizImage' ></img>
                                    <div className='bizInfo' >
                                        <div className='bizTitle'>{result.name}</div>
                                        <div className='bizMenu'>
                                            <div className='serviceItem'>Tel. {result.telephone}</div>
                                            <div className='serviceItem'>Address:{result.location}</div>

                                            <div className='serviceItem' ><Link to={'/appointment'} ><div className='OrangeButton' onClick={e => localStorage.setItem('selectedService', result._id)}>BOOK APPOINTMENT</div></Link></div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
            );
        case url = 'Massages':
            return (
                <div className='serviceWrapper'>
                    {
                        bizMassages.map((result, index) => {
                            return (
                                <div className='Buisness' key={index}>
                                    <img src={result.logo} alt='logo' className='bizImage' ></img>
                                    <div className='bizInfo' >
                                        <div className='bizTitle'>{result.name}</div>
                                        <div className='bizMenu'>
                                            <div className='serviceItem'>Tel. {result.telephone}</div>
                                            <div className='serviceItem'>Address:{result.location}</div>

                                            <div className='serviceItem' ><Link to={'/appointment'} ><div className='OrangeButton' onClick={e => localStorage.setItem('selectedService', result._id)}>BOOK APPOINTMENT</div></Link></div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
            );
        case url = 'Skin-care':
            return (
                <div className='serviceWrapper'>
                    {
                        bizSkin.map((result, index) => {
                            return (
                                <div className='Buisness' key={index}>
                                    <img src={result.logo} alt='logo' className='bizImage' ></img>
                                    <div className='bizInfo' >
                                        <div className='bizTitle'>{result.name}</div>
                                        <div className='bizMenu'>
                                            <div className='serviceItem'>Tel. {result.telephone}</div>
                                            <div className='serviceItem'>Address:{result.location}</div>

                                            <div className='serviceItem' ><Link to={'/appointment'} ><div className='OrangeButton' onClick={e => localStorage.setItem('selectedService', result._id)}>BOOK APPOINTMENT</div></Link></div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
            );
        case url = 'Nail-Salons':
            return (
                <div className='serviceWrapper'>
                    {
                        bizNail.map((result, index) => {
                            return (
                                <div className='Buisness' key={index}>
                                    <img src={result.logo} alt='logo' className='bizImage' ></img>
                                    <div className='bizInfo' >
                                        <div className='bizTitle'>{result.name}</div>
                                        <div className='bizMenu'>
                                            <div className='serviceItem'>Tel. {result.telephone}</div>
                                            <div className='serviceItem'>Address:{result.location}</div>

                                            <div className='serviceItem' ><Link to={'/appointment'} ><div className='OrangeButton' onClick={e => localStorage.setItem('selectedService', result._id)}>BOOK APPOINTMENT</div></Link></div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
            );
        case url = 'Tanning-Salons':
            return (
                <div className='serviceWrapper'>
                    {
                        bizTanning.map((result, index) => {
                            return (
                                <div className='Buisness' key={index}>
                                    <img src={result.logo} alt='logo' className='bizImage' ></img>
                                    <div className='bizInfo' >
                                        <div className='bizTitle'>{result.name}</div>
                                        <div className='bizMenu'>
                                            <div className='serviceItem'>Tel. {result.telephone}</div>
                                            <div className='serviceItem'>Address:{result.location}</div>

                                            <div className='serviceItem' ><Link to={'/appointment'} ><div className='OrangeButton' onClick={e => localStorage.setItem('selectedService', result._id)}>BOOK APPOINTMENT</div></Link></div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
            );
        case url = 'Hair-removal':
            return (
                <div className='serviceWrapper'>
                    {
                        bizRemoval.map((result, index) => {
                            return (
                                <div className='Buisness' key={index}>
                                    <img src={result.logo} alt='logo' className='bizImage' ></img>
                                    <div className='bizInfo' >
                                        <div className='bizTitle'>{result.name}</div>
                                        <div className='bizMenu'>
                                            <div className='serviceItem'>Tel. {result.telephone}</div>
                                            <div className='serviceItem'>Address:{result.location}</div>

                                            <div className='serviceItem' ><Link to={'/appointment'} ><div className='OrangeButton' onClick={e => localStorage.setItem('selectedService', result._id)}>BOOK APPOINTMENT</div></Link></div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
            );
        default:
            break;
    }
}


export default Service;