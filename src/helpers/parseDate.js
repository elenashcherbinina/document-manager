export const parseDate = (date) => {
  const options = {
    timeZone: 'Europe/Moscow',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  return new Date(date).toLocaleString('ru-Ru', options);
};

export const getDateInMsec = (date) => +new Date(date);
