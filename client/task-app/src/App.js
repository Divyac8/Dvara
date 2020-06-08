import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/data';
import Navbar from './components/navbar';
import { BrowserRouter, Route } from "react-router-dom";
import UserDetails from './components/userdetails';



class App extends Component {
  render() {
    return (
    <React.Fragment>

        <switch>
            <Route path="/Navbar"  component={Navbar}></Route>
            <Route path="/" exact component={Form}></Route>
            <Route path="/userdetails" component={UserDetails}></Route>
        </switch>
         
    </React.Fragment>

    );
  }
}

export default App;
