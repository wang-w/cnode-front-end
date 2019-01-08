import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    fetch('http://localhost:7001/name', {
      method: 'GET',
      data: {
        limit: 5,
        page: 2,
      }
    })
      .then(function(response) {
        console.log(response.json, 123456);
          return response.json();
      })
      .then(function(myJson) {
          console.log(myJson, 333);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
