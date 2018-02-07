import React, { Component } from 'react';

import Event from './Event';


class DropCalendar extends Component {

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
    let pos = String(e.clientY / 48);
    pos = pos.replace(/\,/g, '');
    pos = parseInt(pos, 10);
    console.log(pos);
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
                    style={{height: '48px', textAlign: 'center', position:'relative'}} 
                    key={hour}>
                    <span className="hour" >{hour}</span>
                  </div>
                ))
              }
              </div>
            </div>
            <div role="presentation" className="hourGrid">
              <div role="row" className="hourRow" onClick={this.handleClick}>
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
                    <Event />
                    <Event />
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

export default DropCalendar