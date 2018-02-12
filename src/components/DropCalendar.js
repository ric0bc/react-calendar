import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getEvents, addEvent } from './action';
import Event from './Event';


class DropCalendar extends Component {

  componentDidMount() {
    const { getEvents } = this.props;

    getEvents();
  }

  getHoursOfADay = () => {
    let hours = [];
   
    for(var i = 0; i < 24; i++){
      if(i < 10) {
        hours.push(`0${i}:00`)
      } else {
        hours.push(`${i}:00`)
      }
    }
    return hours;
  }

  handleClick = (e) => {
    const clientRectTop = this.node.getBoundingClientRect().top;
    let positiveNr = clientRectTop > 0 ? -clientRectTop : Math.abs(this.node.getBoundingClientRect().top);
    let pos = String((positiveNr + e.pageY)/48);
    pos = pos.replace(/,/g, '');
    pos = parseInt(pos, 10);
    console.log(pos);

    // Push new Event
    // const event = {
    //   id:'123114',
    //   date: moment().date(),
    //   timeStart: moment({ hour:2, minute:15 }).format('HH:mm'),
    //   timeEnd: moment({ hour:8, minute:0 }).format('HH:mm'),
    //   eventSize: 276,
    //   eventPosition: 108,
    // }
    
    // this.props.addEvent(event);
    
  }

  render() {
   
    return (
      <div role="grid" className="calendar-grid">
        <div role="presentation" className="mainGrid">
          <div role="presentation" className="calendar-innergrid">
            <div className="hourValue">
              <div className="innerValue">
              {
                this.getHoursOfADay().map((hour) => (
                  <div 
                    className="timetable-cell"
                    key={hour}>
                    <span className="hour" >{hour}</span>
                  </div>
                ))
              }
              </div>
            </div>
            <div role="presentation" className="hourGrid">
              <div role="row" className="hourRow" onClick={this.handleClick} ref={(ref) => this.node = ref}>
                <div>
                  { this.getHoursOfADay().map((hour) => (
                      <div 
                        key={hour}
                        className="hourLine">
                      </div>
                    )) }
                </div>
                <div role="gridcell" className="grid-cell">
                  <div role="presentation" className="events">
                    <Event events={this.props.events} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  events: state.eventsState.events
})

export default connect(mapStateToProps, {getEvents, addEvent})(DropCalendar);