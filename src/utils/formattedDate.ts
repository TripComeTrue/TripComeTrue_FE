export const FormattedDate = (createdAt: string) => {
  const formattedDate = createdAt.split('T')[0].replace(/-/gi, '.');

  return formattedDate;
};

export default FormattedDate;
