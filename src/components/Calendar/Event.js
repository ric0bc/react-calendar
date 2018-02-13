import React, { Component } from 'react';
import { connect } from 'react-redux';

import {changeTime} from '../../actions/action';
import { dateHelperPosition, dateHelperSize } from '../../Helper/Helper';


class Event extends Component {

  handleSubmit = (event, e) => {

    event.preventDefault();

    const newEvent = {
      ...e,
      size: dateHelperSize(e.start, e.end),
      position: dateHelperPosition(e.start)
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

  handleClick = (e) => {
    e.stopPropagation();
    console.log('click');
  }

  render() {
    const { events } = this.props;
    const eventsArray = events.length > 0 ? events : [];

    return (
      eventsArray.map(e => {
        return   (
          <div className="event" key={e.id} style={{height: e.size, top: e.position}} onClick={this.handleClick} >
            {e.start && e.end ? `EventStart: ${e.start} / EventEnd: ${e.end}` : 'Event'}
            <form onSubmit={(event) => this.handleSubmit(event, e)}>
              <input name="start" value={e.start} type="time" placeholder="Start Date" onChange={(event) => this.handleChange(event, e, 'start')} />
              <input name="end" value={e.end}  type="time" placeholder="End Date" onChange={(event) => this.handleChange(event, e, 'end')} />
              <input type="submit" value="submit" />
            </form>
          </div>
        )
      })
    )
  }
}

export default connect(null, {changeTime})(Event)