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
                <h1>아티클 제목 넘겨받기</h1>
            
                <CustomAxious></CustomAxious>
            
          
        </header>
          
        </div>
    )
}
export default App;
