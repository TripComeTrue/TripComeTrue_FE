import { getYear } from 'date-fns';
import _ from 'lodash';

export const months = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
];

export const years = _.range(2010, getYear(new Date()) + 10);

export const BudgetOptions = [
  { label: '10~50만원', value: 'BELOW_50' },
  { label: '50~100만원', value: 'BELOW_100' },
  { label: '100~300만원', value: 'BELOW_200' },
  { label: '300~500만원', value: 'BELOW_300' },
  { label: '500만원 이상', value: 'ABOVE_300' },
];
