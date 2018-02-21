import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getEvents, openModal, addEvent } from '../../../actions/action'
import Event from '../Event'
import CHeader from '../Header/CHeader'
import TimetableLeftPanel from './TimetableLeftPanel'
import TimetableGrid from './TimetableGrid'
import EventObject from '../EventObject'

class WeekDayGrid extends Component {

  componentDidMount() {
    console.log(this.props.location.state.date)
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
    
    // Add to the events for displaying to user
    this.props.addEvent(event);
    // Open Modal window
    this.props.openModal(true, event);

    

    // On long click || dbclick
    // this.props.history.push({
    //   pathname: "/new-event",
    //   position: pos
    // });
    
  }

  render() {
    return (
      <div role="grid" className="calendar-grid">
        <CHeader /> 
        <div role="presentation" className="mainGrid">
          <div role="presentation" className="calendar-innergrid">
            <TimetableLeftPanel />
            <div role="presentation" className="hourGrid">
              <div role="row" className="hourRow" onClick={this.handleClick} ref={(ref) => this.node = ref}>
                <TimetableGrid />
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
  newEv: state.eventsState.newEvent,
  view: state.viewState.view,
})

export default withRouter(
  connect(
    mapStateToProps,
    {getEvents, openModal, addEvent }
  )(WeekDayGrid)
);