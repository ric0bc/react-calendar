import React from 'react'

const getHoursOfADay = () => {
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

const TimeTableLeftPanel = (props) => (
  <div className="hourValue">
    <div className="innerValue">
    {
      getHoursOfADay().map((hour) => (
        <div 
          className="timetable-cell"
          key={hour}>
          <span className="hour" >{hour}</span>
        </div>
      ))
    }
    </div>
  </div>
)

export default TimeTableLeftPanel