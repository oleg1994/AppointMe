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
import { StateProvider } from '../Context/state';



function App() {
const appState = {
    loginCheck: { status: 'false' },
};

const reducer = (state, action) => {
  switch (action.type) {
      case 'changeLoginStatus':
          return {
              ...state,
              loginCheck: action.payload
          };
      default:
          return state;
  }
};





  return (
    <StateProvider appState={appState} reducer={reducer}>
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
      </div>
    </Router>
    </StateProvider>
  );
}

export default App;
