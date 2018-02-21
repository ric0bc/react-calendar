import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as db from '../../firebase/db'
import { dateHelperPosition, dateHelperSize } from '../../Helper/Helper';
import { updateEvent, openModal } from '../../actions/action';


class New extends Component {
  state = {
    event: null
  }


  componentDidMount() {
    this.setState({ event: this.props.event });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.openModal(false);
    
    // Firebase
    db.doCreateEvent(this.state.event).then(snap => console.log(snap))
  }

  handleChange = (event, e) => {

    const start = event.target.name === 'start' ? event.target.value : e.start;
    const end = event.target.name === 'end' ? event.target.value : e.end;

    const newEvent = {
      ...e,
      start: start,
      end: end,
      size: dateHelperSize(start, end),
      position: dateHelperPosition(start)
    }

    // Controlled component
    this.setState({event: newEvent})
    // Change Event Time 
    this.props.updateEvent(newEvent);
  }

  render() {

    return (
      <div>
        { this.state.event && (
          <form onSubmit={(event) => this.handleSubmit(event, this.state.event)}>
            <input name="start" value={this.state.event.start || ''} type="time" placeholder="Start Date" onChange={(event) => this.handleChange(event, this.state.event)} />
            <input name="end" value={this.state.event.end || ''}  type="time" placeholder="End Date" onChange={(event) => this.handleChange(event, this.state.event)} />
            <input type="submit" value="submit" />
          </form>

        )}
      </div>
    )
  }
}

const MapStateToProps = (state) => ({
  event: state.modalState.event,
  events: state.eventsState.events
})

export default connect(MapStateToProps, {updateEvent, openModal})(New)