import React, { Component } from 'react';
import { connect } from 'react-redux';

import {updateEvent} from '../../actions/action';
import { dateHelperPosition, dateHelperSize } from '../../Helper/Helper';


class Event extends Component {
    state = {
      clientY: null
    }

    handleChange = (event, e) => {

    event.preventDefault();

    const start = event.target.name === 'start' ? event.target.value : e.start;
    const end = event.target.name === 'end' ? event.target.value : e.end;

    const newEvent = {
      ...e,
      start: start,
      end: end,
      size: dateHelperSize(start, end),
      position: dateHelperPosition(start)
    }

    this.props.updateEvent(newEvent);
  }

  handleClick = (e) => {
    e.stopPropagation();
    console.log('click');
  }

  handleMouseDown = (e) => {
    this.setState({clientY: e.clientY})
    console.log(this.state.clientY)
  }

  handleMouseMove = (e) => {
    this.setState({clientY: e.clientY})
    console.log(this.state.clientY)
  }

  render() {
    const { events } = this.props;
    const eventsArray = events.length > 0 ? events : [];

    return (
      eventsArray.map(e => {
        return   (
          <div 
            className="event" 
            key={e.id} 
            style={{height: e.size, top: e.position}} 
            onClick={this.handleClick} 
            onMouseDown={this.handleMouseDown}
            onMouseMove={this.handleMouseMove}
          >
            {e.start && e.end ? `EventStart: ${e.start} / EventEnd: ${e.end}` : 'Event'}
            <form onSubmit={(event) => this.handleChange(event, e)}>
              <input 
                name="start" 
                value={e.start} 
                type="time" 
                placeholder="Start Date" 
                onChange={(event) => this.handleChange(event, e)} 
              />
              <input 
                name="end" 
                value={e.end}  
                type="time" 
                placeholder="End Date" 
                onChange={(event) => this.handleChange(event, e)} 
              />
              <input type="submit" value="submit" />
            </form>
          </div>
        )
      })
    )
  }
}

export default connect(null, {updateEvent})(Event)