import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Navbar} from "react-bootstrap"
import CustomAxious from './CustomAxios'
import logo from './logo.svg';
import './App.css';

function App () {
    
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            
            
                <CustomAxious></CustomAxious>
                과연?
          
        </header>
          
        </div>
    )
}
export default App;
