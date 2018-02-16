import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/de';

import DropCalendar from './DropCalendar';
import CalendarPicker from './Picker/CalendarPicker'
import './Calendar.css';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: [],
      offsetTop: null
    }
  }
  componentDidMount() {

    console.log(moment().format('dddd'));

    
  }
  
  render() {
    
    return (
      <div className="wrapper">
        <CalendarPicker />
        <div className="calendar-wrapper">
          <div role="main" className="main-calendar">
            <DropCalendar />
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar