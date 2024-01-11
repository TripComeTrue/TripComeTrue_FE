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
}

const ALL_CITY: CityList = {
  europe: {
    name: '유럽',
    countries: [
      { name: '독일', city: [{ name: '베를린', link: 'berlin' }] },
      {
        name: '프랑스',
        city: [{ name: '파리', link: 'paris' }],
      },
      {
        name: '영국',
        city: [{ name: '런던', link: 'london' }],
      },
    ],
  },
  asia: {
    name: '아시아',
    countries: [
      { name: '태국', city: [{ name: '방콕', link: 'bangkok' }] },
      {
        name: '일본',
        city: [{ name: '도쿄', link: 'tokyo' }],
      },
    ],
  },
  america: {
    name: '아메리카',
    countries: [
      { name: '미국', city: [{ name: '뉴욕', link: 'newyork' }] },
      {
        name: '캐나다',
        city: [{ name: '벤쿠버', link: 'vancouver' }],
      },
    ],
  },
  oceania: {
    name: '오세아니아',
    countries: [
      { name: '호주', city: [{ name: '시드니', link: 'sydney' }] },
      {
        name: '뉴질랜드',
        city: [{ name: '오클랜드', link: 'auckland' }],
      },
    ],
  },
  africa: {
    name: '아프리카',
    countries: [
      { name: '남아공', city: [{ name: '케이프타운', link: 'cape-town' }] },
      {
        name: '이집트',
        city: [{ name: '카이로', link: 'cairo' }],
      },
    ],
  },
  korea: {
    name: '대한민국',
    cities: [
      { name: '서울', link: 'seoul' },
      { name: '부산', link: 'busan' },
      { name: '제주도', link: 'jeju' },
    ],
  },
};

export default ALL_CITY;
