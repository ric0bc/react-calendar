import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Modal from '../Modal/Modal';
import AddEvent from '../Calendar/AddEvent';
import Calendar from '../Calendar/Calendar';


class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-wrapper">
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <Route path="/calendar" component={Calendar} />
            <Route exact path="/calendar/new-event" component={() => <AddEvent />} />
          </div>
          <Modal />
        </div>
      </Router>
    );
  }
}

export default App
