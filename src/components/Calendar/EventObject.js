import moment from 'moment';

export default class EventObject {
  constructor( id, start, end, isNew) {
    this.id = id;
    this.date =  moment().date();
    this.start = moment({hour:start, minute: 0}).format('HH:mm');
    this.end = moment({hour:end, minute: 0}).format('HH:mm');
    this.isNew = isNew;
    this.size = this.size(this.start, this.end);
    this.position = this.position(this.start);
  }

  size(start, end) {
    const a = moment.duration(start).asMinutes();
    const b = moment.duration(end).asMinutes();
    const diff = b - a;
    const size = diff * 12 / 15; 
    return this.size = size;
  }

  position = (start) => {
    const a = moment.duration(start).asMinutes();
    return a * 12 / 15;
  }

}