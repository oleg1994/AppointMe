import React from 'react';
import './../Register/Register.css'




function Register() {
    return (
      <div className='registerWrapper'>
        <div className='regTitle'>Create a AppointMe Account</div>
        <div className='inputPos'>Username<input className='inputSelf' id="name" required type='text'></input></div>
        <div className='inputPos'>Email<input className='inputSelf' type='email'></input></div>
        <div className='inputPos'>Password<input className='inputSelf' type='password'></input></div>
        <div className='inputPos'>Confirm Password<input className='inputSelf' type='password'></input></div>
        <div className='inputPos'><input className='inputSelf' type='submit' value='register'></input></div>
      </div>
    );
}


export default Register;