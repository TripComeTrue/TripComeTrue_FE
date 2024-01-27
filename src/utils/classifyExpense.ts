const classifyExpense = (expense: string) => {
  switch (expense) {
    case 'BELOW_50':
      return '50만원 이하';
    case 'BELOW_100':
      return '50만원~100만원 이하';
    case 'BELOW_200':
      return '100만원~200만원 이하';
    case 'BELOW_300':
      return '200만원~300만원 이하';
    default:
      return '300만원 이상';
  }
};

export default classifyExpense;
