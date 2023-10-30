import { getDateInMsec } from './parseDate';

const filterByInput = (data, input) => {
  if (!input) {
    return data;
  }

  input = input.trim().toUpperCase();

  return data.filter(
    (el) =>
      el.title.toUpperCase().includes(input) ||
      el.user.toUpperCase().includes(input) ||
      el.body.toUpperCase().includes(input),
  );
};

const filterByDate = (data, date) => {
  const { from, to } = date;

  return data.filter((doc) => {
    return (
      (from ? getDateInMsec(doc.createdAt) >= getDateInMsec(from) : doc) &&
      (to ? getDateInMsec(doc.createdAt) <= getDateInMsec(to) : doc)
    );
  });
};

const filterByStatus = (data, status) => {
  const map = {
    active: 'Активный',
    canceled: 'Отмененный',
    finished: 'Завершенный',
  };

  if (!status || status === 'all') {
    return data;
  }
  return data.filter((doc) => doc.status === map[status]);
};

const filterDocuments = (data, params) => {
  const { input, date, status } = params;
  let filtred;
  filtred = filterByInput(data, input);
  filtred = filterByDate(filtred, date);
  filtred = filterByStatus(filtred, status);
  return filtred;
};

export default filterDocuments;
