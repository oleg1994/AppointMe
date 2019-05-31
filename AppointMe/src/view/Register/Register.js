import React, { useState } from 'react';
import './../Register/Register.css'




function Register() {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  const [MatchError, setMatchError] = useState("");
  
  function register(e) {
    e.preventDefault()
    let userInfo = { user: `${user}`, password: `${password}`, email: `${email}`}
    console.log(userInfo)
    if (password === passwordMatch) {
      setMatchError(``)


      fetch('http://localhost:4000/newUser', {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(response => {
          console.log(JSON.stringify(response))
        })
        .catch(error => console.error('Error:', error));
      
     
    } else {
      setMatchError(<div className='MatchError'>✗ The passwords don't match</div>)
      console.log('else nope')
    }


  }


  return (
    <form className='registerWrapper' onSubmit={register}>

      <div className='regTitle'>Create a AppointMe Account</div>
      <div className='inputPos'>Username<input className='inputSelf' id="name" type='text' required value={user} onChange={e => setUser(e.target.value)} ></input></div>
      <div className='inputPos'>Email<input className='inputSelf' type='email' required value={email} onChange={e => setEmail(e.target.value)}></input></div>
      <div className='inputPos'>Password<input className='inputSelf' type='password' required value={password} onChange={e => setPassword(e.target.value)}></input></div>
      <div className='inputPos'><div className='MatchErrorWrapper'>Confirm Password&nbsp;&nbsp;&nbsp;{MatchError}</div><input className='inputSelf' type='password' required value={passwordMatch} onChange={e => setPasswordMatch(e.target.value)}></input></div>
      <div className='inputPos'><input className='inputSelf' type='submit' value='register' required></input></div>

    </form>
  );
}


export default Register;


