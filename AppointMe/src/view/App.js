import React, {} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Category from './Category/Category';
import Sort from './Sort/Sort';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import Service from './Services/Service'
import Register from './Register/Register'
import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard'
import Appointment from './Appointment/Appointment';

// import Hair from './Services/Hair-salon/Hair';
// import Nail from './Services/Nail-salon/Nail';






function App() {
  return (
    <Router>
      <div className="main">
        <Header/>
        <Nav/>
        <Route exact path='/' component={Category} />
        <Route path='/placeholder' component={Sort} />
        <Route path='/service/:id' component={Service} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login}/>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/appointment' component={Appointment} />
        {/* <Route path='/service/hair-salons' component={Hair} />
        <Route path='/service/nail-salons' component={Nail} /> */}
      </div>
    </Router>
  );
}

export default App;
