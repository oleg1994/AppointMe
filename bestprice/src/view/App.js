import React from 'react';
import './App.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Category from './Category/Category';


function App(){
    return (
      <div className="main">
        <Header/>
        <Nav/>
        <Category/>
      </div>
    );
}

export default App;
