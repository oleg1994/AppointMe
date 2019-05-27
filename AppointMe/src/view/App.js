import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import Category from './Category/Category';
import Sort from './Sort/Sort';
import Hair from './Category/sub-pages/Hair'
import Nav from './Nav/Nav';
import Header from './Header/Header';


function App() {
  return (
    <Router>
      <div className="main">
        <Header/>
        <Nav/>
        <Route exact={true} path='/' component={Category} />
        <Route path='/placeholder' component={Sort} />
        <Route path='/hair-salons' component={Hair} />
      </div>
     
      
    </Router>
  );
}

export default App;
