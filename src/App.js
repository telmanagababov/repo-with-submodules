import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getSum } from './utils/utils/math'
import { getCurrentDate } from './utils/utils/date'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          getSum <code>[0, 3, 6] => { getSum([0, 3, 6]) }</code>
        </p>
        <p className="App-intro">
          getCurrentDate <code>now => { getCurrentDate() }</code>
        </p>
      </div>
    );
  }
}

export default App;
