import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/de';

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

    
  render() {
    
    return (
      <div role="grid" className="mainCalendar">
        <div className="dayGrid">
          <div className="hourValue">
          <div className="innerValue">
          {
            this.getHoursOfADay().map((hour) => (
              <div 
                style={{height: '48px', textAlign: 'center'}} 
                key={hour}>
                <span className="hour" >{hour}</span>
              </div>
            ))
          }
          </div>
          </div>
          <div className="hourGrid">
          <div role="row" className="hourRow">
          <div>
          {
            this.getHoursOfADay().map((hour) => (
              <div 
                key={hour}
                className="hourLine">
              </div>
            ))
          }
          </div>
          <div className="event" ></div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar