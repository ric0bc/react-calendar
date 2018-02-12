import moment from 'moment';
export const GET_EVENTS = 'GET_EVENTS';
export const CHANGE_TIME = 'CHANGE_TIME';
export const ADD_EVENT = 'ADD_EVENT';

const events = [
  {
      id: 'asdf123',
      date: moment().date(),
      timeStart: moment({ hour:9, minute:15 }).format('HH:mm'),
      timeEnd: moment({ hour:15, minute:0 }).format('HH:mm'),
      eventSize: 276,
      eventPosition: 444,
  },
  {
      id: 'faffa23',
      date: moment().date(),
      timeStart: moment({ hour:2, minute:15 }).format('HH:mm'),
      timeEnd: moment({ hour:8, minute:0 }).format('HH:mm'),
      eventSize: 276,
      eventPosition: 108,
  }
]

export function getEvents () {
  return {
    type: GET_EVENTS,
    events
  }
}

export function changeTime (event) {
  return {
    type: CHANGE_TIME,
    event
  }
}

export function addEvent (event) {
  return {
    type: ADD_EVENT,
    event
  }
}