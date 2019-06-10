import React, { useState, useEffect } from 'react';
import './../Dashboard/Dashboard.css'




function Dashboard(props) {

  const [msg, setMsg] = useState("loading...");
  
  
  useEffect(() => {
    setMsg('res')
    return () => {
      fetch('http://localhost:4000/Login', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        setMsg(res)
      })
        .catch(err => {
          console.error(err);
          alert('Error logging in please try again');
        });
    
    };
  }, [])
 


  return (
    <form className='registerWrapper'>
      <div>{msg}</div>
    </form>
  );
}


export default Dashboard;


