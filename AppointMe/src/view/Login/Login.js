import React, { useState } from 'react';
import './../Login/Login.css'




function Login(props) {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [InvalidUser, setInvalidUser] = useState("");
  
  
  
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
        console.log(response)
        if(response.logged === false){
          setInvalidUser('username or password is incorrect')
        }
        if (response.logged === true){
          localStorage.setItem('logged-token', response.TheToken)
          props.history.push('/');

        }
      })
      .catch(error => console.error('Error:', error));
    
}


  return (
    <form className='registerWrapper' onSubmit={loginFetch}>
      <div className='regTitle'>Login</div>
      <div className='inputPos'><div className='InvalidUser'>{InvalidUser}</div></div>
      <div className='inputPos'>Username<input className='inputSelf' type='text' required value={user} onChange={e => setUser(e.target.value)} ></input></div>
      <div className='inputPos'>Password<input className='inputSelf' type='password' required value={password} onChange={e => setPassword(e.target.value)} ></input></div>
      <div className='inputPos'><input className='inputSelf' type='submit' value='Login' required></input></div>
    </form>
  );
}


export default Login;


