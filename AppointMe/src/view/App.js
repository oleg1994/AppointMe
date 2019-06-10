import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Category from './Category/Category';
import Sort from './Sort/Sort';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import Service from './Category/Service'
import Register from './Register/Register'
import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard'
import ProtectedPage from './ProtectedPage/ProtectedPage'


function App() {
  return (
    <Router>
      <div className="main">
        <Header/>
        <Nav/>
        <Route exact={true} path='/' component={Category} />
        <Route path='/placeholder' component={Sort} />
        <Route path='/service/:id' component={Service} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/protectedpage' component={ProtectedPage} />
        {/* <PrivateRoute path='/dashboard' component={Dashboard} /> */}

        
       
      </div>
     
      
    </Router>
  );
}

export default App;
