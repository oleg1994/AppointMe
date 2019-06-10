import React, { useState, useEffect } from 'react';
import { getJwt } from '../../UserToken'
const jwt = getJwt()



function ProtectedPage(props) {

  const [msg, setMsg] = useState("loading...");
  const [userName, setuserName] = useState("user...");


  useEffect(() => {
    CheckifLogged();
  }, []);

  function CheckifLogged() {
    if (!jwt) {
      console.log('not logged')
      setMsg('not logged')
    } else {
      setMsg('logged')

    }
  }

  
  fetch('http://localhost:4000/checkToken', {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  }).then(res => res.json())
    .then(response => {
      console.log(response)
      // setuserName('response.token')
    })
    .catch(err => {
      console.log(err)
      // localStorage.removeItem('logged-token');
      // props.history.push('/Login');
    });

 



// if(userName === undefined){
//   return (
//     <form className='registerWrapper'>
//       <div>not defined</div>
//     </form>
//   );
//   }else{
  return (
    <form className='registerWrapper'>
      <div>{msg}{userName}</div>
    </form>
  );

}


export default ProtectedPage;


