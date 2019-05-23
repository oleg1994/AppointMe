<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect} from 'react';
>>>>>>> master
import './App.css';
import Header from './Header/Header';
import Search from './Search/Search';
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
