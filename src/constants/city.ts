interface City {
  [key: string]: CityInfo;
}
interface CityInfo {
  name: string;
}

const ALL_CITY: City = {
  europe: {
    name: '유럽',
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
