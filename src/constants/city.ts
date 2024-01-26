interface CityList {
  [key: string]: CityListInfo;
}
interface CityListInfo {
  name: string;
  countries?: Country[];
  cities?: City[];
}
export interface Country {
  name: string;
  city: City[];
}
export interface City {
  name: string;
  link: string;
  cityId: number;
  isDomestic: boolean;
  country?: string;
}

const ALL_CITY: CityList = {
  europe: {
    name: '유럽',
    countries: [
      {
        name: '독일',
        city: [
          {
            country: '독일',
            name: '베를린',
            link: 'berlin',
            cityId: 8,
            isDomestic: false,
          },
        ],
      },
      {
        name: '프랑스',
        city: [
          {
            country: '프랑스',
            name: '파리',
            link: 'paris',
            cityId: 7,
            isDomestic: false,
          },
        ],
      },
      {
        name: '영국',
        city: [
          {
            country: '영국',
            name: '런던',
            link: 'london',
            cityId: 9,
            isDomestic: false,
          },
        ],
      },
    ],
  },
  asia: {
    name: '아시아',
    countries: [
      {
        name: '태국',
        city: [
          {
            country: '태국',
            name: '방콕',
            link: 'bangkok',
            cityId: 6,
            isDomestic: false,
          },
        ],
      },
      {
        name: '일본',
        city: [
          {
            country: '일본',
            name: '도쿄',
            link: 'tokyo',
            cityId: 5,
            isDomestic: false,
          },
          {
            country: '일본',
            name: '오사카',
            link: 'osaka',
            cityId: 4,
            isDomestic: false,
          },
        ],
      },
    ],
  },
  america: {
    name: '아메리카',
    countries: [
      {
        name: '미국',
        city: [
          {
            country: '미국',
            name: '뉴욕',
            link: 'newyork',
            cityId: 10,
            isDomestic: false,
          },
        ],
      },
      {
        name: '캐나다',
        city: [
          {
            country: '캐나다',
            name: '벤쿠버',
            link: 'vancouver',
            cityId: 11,
            isDomestic: false,
          },
        ],
      },
    ],
  },
  oceania: {
    name: '오세아니아',
    countries: [
      {
        name: '호주',
        city: [
          {
            country: '호주',
            name: '시드니',
            link: 'sydney',
            cityId: 12,
            isDomestic: false,
          },
        ],
      },
      {
        name: '뉴질랜드',
        city: [
          {
            country: '뉴질랜드',
            name: '오클랜드',
            link: 'auckland',
            cityId: 13,
            isDomestic: false,
          },
        ],
      },
    ],
  },
  africa: {
    name: '아프리카',
    countries: [
      {
        name: '남아공',
        city: [
          {
            country: '남아공',
            name: '케이프타운',
            link: 'cape-town',
            cityId: 14,
            isDomestic: false,
          },
        ],
      },
      {
        name: '이집트',
        city: [
          {
            country: '이집트',
            name: '카이로',
            link: 'cairo',
            cityId: 15,
            isDomestic: false,
          },
        ],
      },
    ],
  },
  korea: {
    name: '대한민국',
    cities: [
      { name: '서울', link: 'seoul', cityId: 1, isDomestic: true },
      { name: '부산', link: 'busan', cityId: 3, isDomestic: true },
      { name: '제주도', link: 'jeju', cityId: 2, isDomestic: true },
    ],
  },
};

export default ALL_CITY;
