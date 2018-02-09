import React, { Component } from 'react';
import moment from 'moment';


class Event extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentDidMount() {
    this.setState({events: this.props.es})
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

    let index;
    index = [...this.state.events].findIndex(i => i.id === e.id);

    const newEvent = {
      ...e,
      eventSize: this.dateHelperSize(e),
      eventPosition: this.dateHelperPosition(e)
    }

    const state = {
      ...this.state,
      events: this.replaceObjectInArray([...this.state.events], index, newEvent)
    }
    this.setState(state)
    
  }

  replaceObjectInArray = (array, newIndex, object) => {
    return array.map((item, index) => {
      if(index !== newIndex){
        return item
      }
      return {...item, ...object}
    })
  }

  handleChange = (event, e, key) => {

    let index;
    index = [...this.state.events].findIndex(i => i.id === e.id);

    const newEvent = {
      ...e,
      [key]: event.target.value
    }

    const state = {
      ...this.state,
      events: this.replaceObjectInArray([...this.state.events], index, newEvent)
    }

    this.setState(state)
    
  }

  render() {
    const { es } = this.props;
    const events = this.state.events.length > 0 ? this.state.events : [];
    
    
    console.log(es.map((e) => console.log(e)));
    console.log(this.state.events)
    return (
      events.map((e,i) => {
        // let key = Object.keys(e)[0];
        return   (
          <div className="event" key={e.id} style={{height: this.state.events[i].eventSize, top: this.state.events[i].eventPosition}} >
            {this.state.events[i].timeStart ? `EventStart: ${this.state.events[i].timeStart} / EventEnd: ${this.state.events[i].timeEnd}` : 'Event'}
            <form onSubmit={(event) => this.handleSubmit(event, this.state.events[i])}>
              <input name="startDate" value={this.state.events[i].timeStart} type="time" placeholder="Start Date" onChange={(event) => this.handleChange(event, this.state.events[i], 'timeStart')} />
              <input name="endDate" value={this.state.events[i].timeEnd}  type="time" placeholder="End Date" onChange={(event) => this.handleChange(event, this.state.events[i], 'timeEnd')} />
              <input type="submit" value="submit" />
            </form>
          </div>
        )
      })
    )
  }
}

export default Event