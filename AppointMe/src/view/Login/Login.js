import React, { useState } from 'react';
import './../Login/Login.css'
import {useStateValue} from '../../Context/state';






function Login(props) {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [InvalidUser, setInvalidUser] = useState("");
  const [visibility, setVisibility] = useState({ display: 'none' });
  const [, dispatchloginCheck] = useStateValue();



  
  function loginFetch(e) {
    e.preventDefault()
    let userInfo = { username: `${user}`, password: `${password}`}
    fetch('http://localhost:4000/Login', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => {
        if(response.logged === false){
          setInvalidUser('username or password is incorrect')
          setVisibility({ display: 'block' })
        }
        if (response.logged === true){
          localStorage.setItem('logged-token', response.TheToken)
          dispatchloginCheck({
            type: 'changeLoginStatus',
            payload: { status: 'true' }  //payload
        })
          props.history.push('/')
        }
      })
      .catch(error => console.error('Error:', error));
    
}

 

  

  return (
    <form className='registerWrapper' onSubmit={loginFetch}>
      <div className='regTitle'>Login</div>
      <div className='inputPos' style={visibility}><div className='InvalidUser'>{InvalidUser}</div></div>
      <div className='inputPos'>Username<input className='inputSelf' type='text' required value={user} onChange={e => setUser(e.target.value)} ></input></div>
      <div className='inputPos'>Password<input className='inputSelf' type='password' required value={password} onChange={e => setPassword(e.target.value)} ></input></div>
      <div className='inputPos'><input className='OrangeButton' type='submit' value='Login' required></input></div>
    </form>
  );
}



export default Login;


