import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import Category from './Category/Category';
import Sort from './Sort/Sort';
import Hair from './Category/sub-pages/Hair'


function App() {
  return (
    <Router>
      <div className="main">
        <div className='header'>
          <Link to={`/placeholder`} className='register'>Register</Link>
          <Link to={`/placeholder`} className='login'>Sign in!</Link>
        </div>
        <div className='navBar'>
          <Link to={`/`} className='logo'>Home</Link>
        <i className="material-icons" >menu</i>
        </div>
        <Route exact={true} path='/' component={Category} />
        <Route path='/placeholder' component={Sort} />
        <Route path='/hair-salons' component={Hair} />
      </div>
     
      
    </Router>
  );
}

export default App;
