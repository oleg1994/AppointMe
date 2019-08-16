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
            <label htmlFor='Business-name'>Business name:</label>
            <input className='inputSelf' id='Business-name'></input>
            <label htmlFor='Location'>Location:</label>
            <input className='inputSelf' id='Location'></input>
            <label htmlFor='Business-email'>Business email</label>
            <input className='inputSelf' id='Business-email' type='email' required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="The email you entered isn't a valid address"></input>
            <div className='AddBusinessText'>Select your business category.</div>
            <select id='Category' required>
            <option value="" disabled defaultValue='Select something...'>Select something...</option>
                <option value="Hair Salon">Hair Salon's</option>
                <option value="Nail Salon">Nail Salon's</option>
                <option value="Tanning Salon">Tanning Salon's</option>
                <option value="Skin care">Facials and skin care treatments</option>
                <option value="hair removal">Waxing and other forms of hair removal</option>
                <option value="Massages">Massages</option>
                <option value="Other">Other</option>
            </select>
            <div className='AddBusinessText'>Fill the boxes down below with the services and prices your business provides.</div>
            <div className='serviceNprice'>
            <div className='serviceBoxes'>
            {/*TODO:make the boxes added dynamic*/}
            <label htmlFor='service'>Service:</label>
            <input className='serviceBox' id='service' placeholder='Service'></input>
            <label htmlFor='service'>Service:</label>
            <input className='serviceBox' id='service' placeholder='Service'></input>
            <label htmlFor='service'>Service:</label>
            <input className='serviceBox' id='service' placeholder='Service'></input>
            </div>
            <div className='priceBoxes'>
            <label htmlFor='service'>Price:</label>
            <input className='serviceBox' id='service' placeholder='Price'></input>
            <label htmlFor='service'>Price:</label>
            <input className='serviceBox' id='service' placeholder='Price'></input>
            <label htmlFor='service'>Price:</label>
            <input className='serviceBox' id='service' placeholder='Price'></input>
            </div>
            </div>
            <label htmlFor='addMore'>Add more services:</label>
            <input type='button' id='addMore' value='+'/>
            <div className='AddBusinessText'>Provide Business Photo/Logo.</div>
                        {/*TODO:make the image upload*/}
            <label htmlFor='Image'>Url to Business Photo/Logo:</label>
            <input className='inputSelf' id='Image'></input>
            <input className='inputSelf' type='submit' value='submit'></input>
        </form>
    )


}


export default AddBusiness;


