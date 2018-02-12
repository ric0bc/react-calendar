import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import {changeTime} from './action';


class Event extends Component {

  componentDidMount() {
  }

  dateHelperSize = (event) => {
    const a = moment.duration(event.timeStart).asMinutes();
    const b = moment.duration(event.timeEnd).asMinutes();
    const diff = b - a;
    const size = diff * 12 / 15; 
    return size;
  }
  
  dateHelperPosition = (event) => {
    const a = moment.duration(event.timeStart).asMinutes();
    return a * 12 / 15;
  }

  handleSubmit = (event, e) => {

    event.preventDefault();

    const newEvent = {
      ...e,
      eventSize: this.dateHelperSize(e),
      eventPosition: this.dateHelperPosition(e)
    }

    this.props.changeTime(newEvent);

    
  }
  handleChange = (event, e, key) => {

    const newEvent = {
      ...e,
      [key]: event.target.value
    }

    this.props.changeTime(newEvent);
  }

  render() {
    const { events } = this.props;
    // const events = this.props.events.length > 0 ? this.props.events : [];

    return (
      events.map((e,i) => {
        return   (
          <div className="event" key={e.id} style={{height: e.eventSize, top: e.eventPosition}} >
            {e.timeStart ? `EventStart: ${e.timeStart} / EventEnd: ${e.timeEnd}` : 'Event'}
            <form onSubmit={(event) => this.handleSubmit(event, e)}>
              <input name="startDate" value={e.timeStart} type="time" placeholder="Start Date" onChange={(event) => this.handleChange(event, e, 'timeStart')} />
              <input name="endDate" value={e.timeEnd}  type="time" placeholder="End Date" onChange={(event) => this.handleChange(event, e, 'timeEnd')} />
              <input type="submit" value="submit" />
            </form>
          </div>
        )
      })
    )
  }
}

export default connect(null, {changeTime})(Event)