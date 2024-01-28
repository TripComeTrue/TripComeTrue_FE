export const arrayToDate = (dateArray: number[]) => {
  const [year, month, day] = dateArray;
  return new Date(year, month - 1, day);
};
