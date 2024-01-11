interface CityList {
  [key: string]: CityListInfo;
}
interface CityListInfo {
  name: string;
  countries?: Country[];
}
export interface Country {
  name: string;
  city: City[];
}
export interface City {
  name: string;
  link: string;
}

const ALL_CITY: CityList = {
  europe: {
    name: '유럽',
    countries: [
      { name: '프랑스', city: [{ name: '파리', link: 'paris' }] },
      {
        name: '스페인',
        city: [
          { name: '마드리드', link: 'madrid' },
          { name: '바르셀로나', link: 'barcelona' },
        ],
      },
    ],
  },
  asia: {
    name: '아시아',
  },
  america: {
    name: '아메리카',
  },
  oceania: {
    name: '오세아니아',
  },
  africa: {
    name: '아프리카',
  },
  korea: {
    name: '대한민국',
  },
};

export default ALL_CITY;
