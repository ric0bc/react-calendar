import React, { Component } from 'react';
import moment from 'moment';

const event = {
  date: moment().date(),
  timeStart: moment({ hour:9, minute:15 }).format('HH:mm'),
  timeEnd: moment({ hour:15, minute:0 }).format('HH:mm'),
}

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = { eventSize: null, eventPosition: null, startDate: event.timeStart, endDate: event.timeEnd };
  }

  componentDidMount() {
    this.setState({eventSize: this.dateHelperSize(), eventPosition: this.dateHelperPosition()})
  }

  dateHelperSize = () => {
    const a = moment.duration(this.state.startDate).asMinutes();
    const b = moment.duration(this.state.endDate).asMinutes();
    const diff = b - a;
    const size = diff * 12 / 15; 
    return size;
  }
  
  dateHelperPosition = (event) => {
    const a = moment.duration(this.state.startDate).asMinutes();
    return a * 12 / 15;
  }

  handleSubmit = (e) => {
    this.setState({eventSize: this.dateHelperSize()});
    this.setState({eventPosition: this.dateHelperPosition()});
    e.preventDefault();
  }

  render() {
    
    return (
      <div className="event" style={{height: this.state.eventSize, top: this.state.eventPosition}} >
        {this.state.startDate ? `EventStart: ${this.state.startDate} / EventEnd: ${this.state.endDate}` : 'Event'}
        <form onSubmit={this.handleSubmit}>
          <input name="startDate" value={this.state.startDate} type="time" placeholder="Start Date" onChange={event => this.setState({startDate: event.target.value})} />
          <input name="endDate" value={this.state.endDate}  type="time" placeholder="End Date" onChange={event => this.setState({endDate: event.target.value})} />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default Event