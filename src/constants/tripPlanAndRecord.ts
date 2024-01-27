import { getYear } from 'date-fns';
import _ from 'lodash';

export const Months = [
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

export const Years = _.range(2010, getYear(new Date()) + 10);

export const Continents = [
  {
    mainCategory: 'OVERSEAS',
    mainCategoryName: '해외',
    subCategories: [
      { continent: 'ALL', continentName: '전체' },
      { continent: 'ASIA', continentName: '아시아' },
      { continent: 'AMERICA', continentName: '아메리카' },
      { continent: 'EUROPE', continentName: '유럽' },
      { continent: 'OCEANIA', continentName: '오세아니아' },
    ],
  },
  {
    mainCategory: 'DOMESTIC',
    mainCategoryName: '국내',
    subCategories: [
      { continent: 'ALL', continentName: '전체' },
      { continent: 'KOREA', continentName: '대한민국' },
    ],
  },
];

export const BudgetOptions = [
  { label: '10~50만원', value: 'BELOW_50' },
  { label: '50~100만원', value: 'BELOW_100' },
  { label: '100~300만원', value: 'BELOW_200' },
  { label: '300~500만원', value: 'BELOW_300' },
  { label: '500만원 이상', value: 'ABOVE_300' },
];

export const getTagText = (tagType: string) => {
  switch (tagType) {
    case 'AIRLINE_TICKET_PURCHASE':
      return '항공권 보러가기';
    case 'ACCOMMODATION_RESERVATION':
      return '숙박시설 보러가기';
    case 'FOOD_TOURISM_LOCATION':
      return '여행지 보러가기';
    case 'TICKET_PASS_PURCHASE':
      return '티켓 보러가기';
    default:
      return '';
  }
};
