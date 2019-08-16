import React, { useState, useEffect } from 'react';
import './../AddBusiness/AddBusiness.css'





function AddBusiness(props) {

    function saveBusiness(e) {
        e.preventDefault()
        let formFields = document.forms[0].elements;
        let formInputData = {};
        // var missingFields = [];
        for (var i = 0; i < formFields.length; i++) {
          formInputData[i] = formFields[i].id + " : " + formFields[i].value;
        }
        console.log(formInputData)
        
    }






    return (
        <form className='AddBusinessWrapper' onSubmit={saveBusiness}>

            <div className='AddBusinessText'>Please fill the form with the details of your business.</div>
            <label htmlFor='BizName'>Business name:</label>
            <input className='inputSelf' id='Business-name'></input>
            <label htmlFor='LocId'>Location:</label>
            <input className='inputSelf' id='Location'></input>
            <label htmlFor='Bizmail'>Business email</label>
            <input className='inputSelf' id='Business-email' type='email' required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="The email you entered isn't a valid address"></input>
            <div className='AddBusinessText'>Please select your business category.</div>
            <select id='Category'>
                <option value="Hair Salon">Select one</option>
                <option value="Hair Salon">Hair Salon's</option>
                <option value="Nail Salon">Nail Salon's</option>
                <option value="Tanning Salon">Tanning Salon's</option>
                <option value="Skin care">Facials and skin care treatments</option>
                <option value="hair removal">Waxing and other forms of hair removal</option>
                <option value="Massages">Massages</option>
                <option value="Other">Other</option>
            </select>
            <div className='AddBusinessText'>Please select amount of services your business provide.</div>

            <select>
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>

            <input className='inputSelf' type='submit' value='submit'></input>
        </form>
    )


}


export default AddBusiness;


