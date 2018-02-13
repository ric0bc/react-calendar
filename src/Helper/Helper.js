import moment from 'moment';

export const dateHelperSize = (timeStart, timeEnd) => {
  const a = moment.duration(timeStart).asMinutes();
  const b = moment.duration(timeEnd).asMinutes();
  const diff = b - a;
  const size = diff * 12 / 15; 
  return size;
}

export const dateHelperPosition = (timeStart) => {
  const a = moment.duration(timeStart).asMinutes();
  return a * 12 / 15;
}

export const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});