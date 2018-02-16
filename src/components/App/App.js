import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Modal from '../Modal/Modal';
import AddEvent from '../Calendar/AddEvent';
import Calendar from '../Calendar/Calendar';
import { getEvents, changeView } from '../../actions/action';

class App extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  handleClick = () => {
    const view = {
      view: 'week'
    }
    this.props.changeView(view);
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-wrapper">
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
              <div role="button" className="c-btn" onClick={this.handleClick}>week</div>
            </header>
            <Route exact path="/" component={() => <Calendar /> } />
            <Route exact path="/new-event" component={() => <AddEvent />} />
          </div>
          <Modal />
        </div>
      </Router>
    );
  }
}

export default connect(null, {getEvents, changeView})(App);
