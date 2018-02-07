import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Calendar />
      </div>
    );
  }
}

export default App;
