import moment from 'moment';
export const GET_EVENTS = 'GET_EVENTS';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const ADD_EVENT = 'ADD_EVENT';
export const GET_EVENT = 'GET_EVENT';
export const OPEN_MODAL = 'OPEN_MODAL';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const CHANGE_VIEW = 'CHANGE_VIEW';

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

export function getEvent (id) {
  return {
    type: GET_EVENT,
    id
  }
}

export function updateEvent (event) {
  return {
    type: UPDATE_EVENT,
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

export function openModal (bool, event) {
  return {
    type: OPEN_MODAL,
    bool,
    event
  }
}

export function changeView (view) {
  return {
    type: CHANGE_VIEW,
    view
  }
}