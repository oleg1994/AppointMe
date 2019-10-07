import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './../AddBusiness/AddBusiness.css'





function AddBusiness(props) {

    const [serviceBoxes,] = useState([{ box: 1 }, { box: 2 }, { box: 3 }])
    const [boxesAmount, setboxesAmount] = useState(4);
    const [warning, setwarning] = useState();
    const [registerCheck, setregisterCheck] = useState('none');
    const [token,] = useState(localStorage.getItem('logged-token'))




    function saveBusiness(e, props) {
        e.preventDefault()
        let formFields = document.forms[0].elements;
        var arr = [];

        for (var i = 0; i < formFields.length; i++) {
            var formInputData = {}; // <---- Move declaration inside loop
            formInputData[formFields[i].id] = formFields[i].value;
            arr.push(formInputData);
        }

        let arrayWithServiceNpriceNcurrency = []
        arr.forEach(element => {
            if (element.service || element.servicePrice || element.currency) {
                arrayWithServiceNpriceNcurrency.push(element)
            }
        });

        let OnlyServices = []
        let OnlyServicesFunction = arrayWithServiceNpriceNcurrency.map((result, index) => {
            OnlyServices.push(result.service)
            return result

        })

        var Servicesfiltered = OnlyServices.filter(function (el) {
            return el != null;
        });
        OnlyServices = Servicesfiltered

        let OnlyPrice = []
        let OnlyPriceFunction = arrayWithServiceNpriceNcurrency.map((result, index) => {
            OnlyPrice.push(result.servicePrice)
            return result

        })

        var Pricefiltered = OnlyPrice.filter(function (el) {
            return el != null;
        });
        OnlyPrice = Pricefiltered

        let OnlyCurrency = []
        let OnlyCurrencyFunction = arrayWithServiceNpriceNcurrency.map((result, index) => {
            OnlyCurrency.push(result.currency)
            return result
        })

        var Currencyfiltered = OnlyCurrency.filter(function (el) {
            return el != null;
        });
        OnlyCurrency = Currencyfiltered


        var servicesNprices = [];
        for (var g = 0; g < OnlyServices.length; g++) {
            var result = {};
            result[OnlyServices[g]] = OnlyPrice[g] + OnlyCurrency[g];
            servicesNprices.push(result);

        }
        var MergeTogether = arr.concat({ servicesNprices });
        let FinalArray = Object.assign({}, ...MergeTogether)
        console.log(FinalArray)
        fetch('http://localhost:4000/registerBusiness', {
            method: 'POST',
            body: JSON.stringify({ FinalArray,token }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                if (response.success) {
                    console.log(response.success)
                    // setregisterCheck('registered')
                }
                if (response.failed) {
                    console.log(response.failed)
                }
            })
            .catch(error => console.error('Error:', error));

    }


    function AddBox() {
        setboxesAmount(boxesAmount + 1)
        serviceBoxes.push({ box: boxesAmount })

    }

    function RemoveBox() {
        setboxesAmount(boxesAmount - 1)
        serviceBoxes.pop();

    }



    function phoneValidation(numbers) {
        console.log(numbers.length)
        if (numbers.length < 10) {
            setwarning("Number is too short!")
        } else if (numbers.length > 10) {
            setwarning("Number is too long!")
        }
    }


    if (registerCheck === 'none') {
        return (
            <form className='AddBusinessWrapper' onSubmit={saveBusiness}>

                <div className='AddBusinessText'>Please fill the form with the details of your business.</div>
                <label htmlFor='Business-name'>Business name:</label>
                <input className='inputSelf' id='BusinessName' required></input>
                <label htmlFor='Location'>Location:</label>
                <input className='inputSelf' id='Location' required></input>
                <label htmlFor='telephone'>Telephone:</label>
                <input className='inputSelf' id='telephone' type="number" onBlur={e => phoneValidation(e.target.value)} required title={warning} pattern='^.{10,}$' placeholder='050-555-5555'></input>
                <label htmlFor='Business-email'>Business email</label>
                <input className='inputSelf' id='BusinessEmail' type='email' required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="The email you entered isn't a valid address"></input>
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
                {
                    serviceBoxes.map((result, index) => {
                        return (
                            <div key={index} id={result.box} className='serviceNprice'>
                                <div className='serviceBoxes' >
                                    <input className='serviceBox' id='service' placeholder='Service' pattern="[A-Za-z]{3,20}" maxLength="20" title='required to be at least 3-20 characters long!' required></input>
                                </div>
                                <div className='priceBoxes'>
                                    <input className='serviceBoxPrice' id='servicePrice' placeholder='Price' type="text" required pattern="^\d{1,4}$" title='Input numbers only and at least 1-4 characters!' maxLength="4"></input>
                                    <select className='currencySelection' id='currency' required>
                                        <option value="" disabled defaultValue='Select currency...'>Select currency</option>
                                        <option value="₪">₪</option>
                                        <option value="$">$</option>
                                    </select>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='serviceAmount'>
                    <input type='button' id='addMore' className='serviceamountManipulation' value='+' onClick={AddBox} />
                    <input type='button' id='removeOne' className='serviceamountManipulation' value='-' onClick={RemoveBox} />
                </div>
                <div className='AddBusinessText'>Provide Business Photo/Logo.</div>

                {/*TODO:make the image upload*/}
                <label htmlFor='Image'>Url to Business Photo/Logo:</label>
                <input className='inputSelf' id='Image' required></input>
                <input className='inputSelf' type='submit' value='submit'></input>
            </form>
        )
    }
    if (registerCheck === 'registered') {
        return (
            <div><Redirect to='/' /></div>
        )
    }
}


export default AddBusiness;


