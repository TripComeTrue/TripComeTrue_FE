const dateToString = (date: string) => {
  const inputDate = date.split('-');
  const year = inputDate[0];
  const month = inputDate[1];
  const day = inputDate[2].split('T')[0];
  return `${year}.${month}.${day}`;
};

export default dateToString;
