import React, { useState, useEffect } from 'react';
import './../AddBusiness/AddBusiness.css'





function AddBusiness(props) {
    return (
        <div className='AddBusinessWrapper'>

            <div className='AddBusinessText'>Please fill the form with the details of your business.</div>
            <label htmlFor='BizName'>Business name:</label>
            <input className='inputSelf' id='BizName'></input>
            <label htmlFor='BizName'>Location:</label>
            <input className='inputSelf' id='BizName'></input>
            <div className='AddBusinessText'>Amount of business your business provide ?</div>
            <select>
                <option value="0"></option>
                <option value="1">Audi</option>
                <option value="2">BMW</option>
                <option value="3">Citroen</option>
                <option value="4">Ford</option>
                <option value="5">Honda</option>
                <option value="6">Jaguar</option>
                <option value="7">Land Rover</option>
                <option value="8">Mercedes</option>
                <option value="9">Mini</option>
                <option value="10">Nissan</option>
                <option value="11">Toyota</option>
                <option value="12">Volvo</option>
            </select>
            <label htmlFor='BizName'>Business name:</label>
            <input className='inputSelf' id='BizName'></input>
        </div>
    )


}


export default AddBusiness;


