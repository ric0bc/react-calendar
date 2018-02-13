import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getEvents, setModalData, openModal, addEvent } from '../../actions/action';
import Event from './Event';
import EventObject from './EventObject';


class DropCalendar extends Component {

  componentDidMount() {
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

    // Calc Position
    const clientRectTop = this.node.getBoundingClientRect().top;
    let positiveNr = clientRectTop > 0 ? -clientRectTop : Math.abs(clientRectTop);
    let pos = String((positiveNr + e.pageY)/48);
    pos = pos.replace(/,/g, '');
    pos = parseInt(pos, 10);
    
    // Create new Event
    const event = new EventObject('asdf3', pos, (pos + 1), true, clientRectTop);
    
    // Set Event data in Modal window
    this.props.setModalData(event);
    // Add to the events for displaying to user
    this.props.addEvent(event);
    // Open Modal window
    this.props.openModal(true);

    // On long click || dbclick
    // this.props.history.push({
    //   pathname: "/new-event",
    //   position: pos
    // });
    
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
  events: state.eventsState.events,
  newEv: state.eventsState.newEvent
})

export default withRouter(
  connect(
    mapStateToProps,
    {getEvents, setModalData, openModal, addEvent }
  )(DropCalendar)
);