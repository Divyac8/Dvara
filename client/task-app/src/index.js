import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/navbar.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter >
       <App />
    </BrowserRouter>
    
    , document.getElementById('root'));
