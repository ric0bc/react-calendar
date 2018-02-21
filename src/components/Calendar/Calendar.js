import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'moment/locale/de'
import { Route, Link } from 'react-router-dom'

import * as db from '../../firebase/db'
import { getEvents, changeView } from '../../actions/action'
import CalendarPicker from './Picker/CalendarPicker'
import './Calendar.css'
import WeekDayGrid from './WeekDayGrid/WeekDayGrid'

class Calendar extends Component {
  componentDidMount() {
    this.props.getEvents()
    db.onGetEvents()
  }
  
  render() {
    
    return (
      <div className="wrapper">
        <CalendarPicker history={this.props.history} match={this.props.match} />
        <Link to={"/calendar/day"}>Day</Link>
        <Link to={"/calendar/week"}>Week</Link>
        <div className="calendar-wrapper">
          <div role="main" className="main-calendar">
            <Route path={`${this.props.match.path}/day`} component={() => <WeekDayGrid />} />
            <Route path={`${this.props.match.path}/week`} component={() => <WeekDayGrid />} /> 
            {/*
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