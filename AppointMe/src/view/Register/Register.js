import React, { useState } from 'react';
import './../Register/Register.css'




function Register(props) {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  const [MatchError, setMatchError] = useState("");
  
  function register(e) {
    e.preventDefault()
    let userInfo = { user: `${user}`, password: `${password}`, email: `${email}`}
    if (password === passwordMatch) {
      setMatchError(``)


      fetch('/newUser', {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(response => {
          if(response.success){
            props.history.push('/')
          }
          if (response.check){
            alert('user or email is already in datebase')
          }
        })
        .catch(error => console.error('Error:', error));
      
     
    } else {
      setMatchError(<div className='MatchError'>✗ The passwords don't match</div>)
    }

  }


  return (
    <form className='registerWrapper' onSubmit={register}>
      <div className='regTitle'>Create a AppointMe Account</div>
      <div className='inputPos'>Username<input className='inputSelf' type='text' required value={user} onChange={e => setUser(e.target.value)} pattern=".{4,}" title="The username must be at least 4 characters long"></input></div>
      <div className='inputPos'>Email<input className='inputSelf' type='email' required value={email} onChange={e => setEmail(e.target.value)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="The email you entered isn't a valid address"></input></div>
      <div className='inputPos'>Password<input className='inputSelf' type='password' required value={password} onChange={e => setPassword(e.target.value)} /*pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"*/ title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"></input></div>
      <div className='inputPos'><div className='MatchErrorWrapper'>Confirm Password&nbsp;&nbsp;&nbsp;{MatchError}</div><input className='inputSelf' type='password' required value={passwordMatch} onChange={e => setPasswordMatch(e.target.value)} /*pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"*/ title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"></input></div>
      <div className='inputPos'><input className='inputSelf' type='submit' value='register' required></input></div>
    </form>
  );
}


export default Register;


