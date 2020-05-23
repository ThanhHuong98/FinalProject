import moment from 'moment';

export const formatMonthYearType = (millis) => moment(millis).format('DD/MM/YYYY');

export const formatHourType1 = (millisDuration) => {
  const dateObj = new Date(millisDuration);
  const hours = dateObj.getUTCHours();
  const minutes = dateObj.getUTCMinutes();
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

export const formatHourType2 = (millisDuration) => {
  const dateObj = new Date(millisDuration);
  const hours = dateObj.getUTCHours();
  const minutes = dateObj.getUTCMinutes();
  const seconds = dateObj.getUTCSeconds();
  if (hours > 0) return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
