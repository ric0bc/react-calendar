import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'moment/locale/de'
import { Route, Link } from 'react-router-dom'

import { getEvents, changeView } from '../../actions/action';
import CalendarPicker from './Picker/CalendarPicker'
import './Calendar.css'
import WeekDayGrid from './WeekDayGrid/WeekDayGrid'

class Calendar extends Component {
  componentDidMount() {
    this.props.getEvents()
  
  }
  
  render() {
    
    return (
      <div className="wrapper">
        <CalendarPicker />
        <Link to={"/calendar/day"}>Day</Link>
        <div className="calendar-wrapper">
          <div role="main" className="main-calendar">
            <Route path={`${this.props.match.path}/day`} component={() => <WeekDayGrid />} />
            {/*
              <Route path="/calendar/week" component={() => <WeekDayGrid grid={'month'} />} /> 
              <Route path="/calendar/month" component={() => <MonthGrid />} />
              <Route path="/calendar/year" component={() => <YearGrid />} />
            */}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, {getEvents, changeView})(Calendar)