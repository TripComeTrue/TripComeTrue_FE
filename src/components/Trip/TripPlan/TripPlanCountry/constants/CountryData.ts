import { WorldData } from '../TripPlanCountry.types';

export const worldData: WorldData = {
  해외: [
    {
      name: '전체',
      subCategories: [
        { name: '일본' },
        { name: '중국' },
        { name: '홍콩' },
        { name: '마카오' },
        { name: '몽골' },
        { name: '호주' },
        { name: '뉴질랜드' },
        { name: '독일' },
        { name: '프랑스' },
        { name: '영국' },
        { name: '미국' },
        { name: '캐나다' },
        { name: '칠레' },
        { name: '볼리비아' },
        { name: '콜롬비아' },
      ],
    },
    {
      name: '아시아',
      subCategories: [
        { name: '일본' },
        { name: '중국' },
        { name: '홍콩' },
        { name: '마카오' },
        { name: '몽골' },
      ],
    },
    {
      name: '남태평양',
      subCategories: [{ name: '호주' }, { name: '뉴질랜드' }],
    },
    {
      name: '유럽',
      subCategories: [{ name: '독일' }, { name: '프랑스' }, { name: '영국' }],
    },
    {
      name: '미주',
      subCategories: [{ name: '미국' }, { name: '캐나다' }],
    },
    {
      name: '중남미',
      subCategories: [
        { name: '칠레' },
        { name: '볼리비아' },
        { name: '콜롬비아' },
      ],
    },
  ],
  국내: [
    {
      name: '전체',
      subCategories: [
        { name: '서울' },
        { name: '경기' },
        { name: '제주' },
        { name: '강원' },
      ],
    },
    {
      name: '서울',
      subCategories: [],
    },
    {
      name: '경기',
      subCategories: [],
    },
    {
      name: '제주',
      subCategories: [],
    },
    {
      name: '강원',
      subCategories: [],
    },
  ],
};
