import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App () {
    const [message, setMessage] = useState("");
    useEffect(() => {
        fetch('/api/hello')
        .then(response => response.text())
        .then(message => {
            setMessage(message);
        });
    },[])

    const url = "https://jsonplaceholder.typicode.com/photos";
        axios.get(url)
        .then(function(response) {
            setPhotos(response.data);
            console.log("성공");
        })
        .catch(function(error) {
            console.log("실패");
        })



    // const message = await.axios.get('/api/hello');
    
    
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">{message}</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    )
}
export default App;