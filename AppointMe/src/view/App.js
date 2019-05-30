import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Category from './Category/Category';
import Sort from './Sort/Sort';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import Service from './Category/Service'
import Register from './Register/Register'


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

        
       
      </div>
     
      
    </Router>
  );
}

export default App;
