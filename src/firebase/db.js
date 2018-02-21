import { db } from './firebase';
import { getEvents } from '../actions/action'

// Event API

const eventsRef = db.ref('events')

export const doCreateEvent = (event) =>
  eventsRef.push().set({
    date: event.date,
    start: event.start,
    end: event.end,
    size: event.size,
    position: event.position,
  });

export const onGetEvents = () => 
  db.ref('events').on('value', (snap) => {
    console.log(snap.val())
  });

export const onceGetAuthUser = (id) =>
  db.ref(`users/${id}`).once('value');