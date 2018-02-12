import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Modal from './Modal';
import AddEvent from './AddEvent';
import Calendar from './Calendar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-wrapper">
            <header className="App-header">
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <Route exact path="/" component={() => <Calendar /> } />
            <Route exact path="/new-event" component={() => <AddEvent />} />
          </div>
          {this.props.isAddingNewEvent ? <Modal /> : null}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  isAdding: state.eventsState.isAddingNewEvent
})

export default connect(mapStateToProps, null)(App);
