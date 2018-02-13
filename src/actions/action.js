import moment from 'moment';
export const GET_EVENTS = 'GET_EVENTS';
export const CHANGE_TIME = 'CHANGE_TIME';
export const ADD_EVENT = 'ADD_EVENT';
export const MODAL_DATA = 'MODAL_DATA';
export const OPEN_MODAL = 'OPEN_MODAL';
export const REMOVE_EVENT = 'REMOVE_EVENT';

const events = [
  {
      id: 'asdf123',
      date: moment().date(),
      start: moment({ hour:9, minute:15 }).format('HH:mm'),
      end: moment({ hour:15, minute:0 }).format('HH:mm'),
      size: 276,
      position: 444,
  },
  {
      id: 'faffa23',
      date: moment().date(),
      start: moment({ hour:2, minute:15 }).format('HH:mm'),
      end: moment({ hour:8, minute:0 }).format('HH:mm'),
      size: 276,
      position: 108,
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

export function removeEvent (event) {
  return {
    type: REMOVE_EVENT,
    event
  }
}

export function setModalData (event) {
  return {
    type: MODAL_DATA,
    event
  }
}

export function openModal (bool) {
  return {
    type: OPEN_MODAL,
    bool
  }
}