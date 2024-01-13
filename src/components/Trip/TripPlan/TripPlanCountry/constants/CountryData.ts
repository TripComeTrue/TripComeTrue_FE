import { WorldData } from '../TripPlanCountry.types';
import japan from './japan.png';
import china from './china.png';
import france from './france.png';
import uk from './uk.png';

export const worldData: WorldData = {
  해외: [
    {
      name: '전체',
      subCategories: [
        { name: '일본', eng: 'JAPAN', img: japan },
        { name: '중국', eng: 'CHINA', img: china },
        { name: '홍콩', eng: 'HONG KONG', img: france },
        { name: '마카오', eng: 'MAKAO', img: uk },
        { name: '몽골', eng: 'MONGOLIA', img: japan },
        { name: '호주', eng: 'AUSTRALIA', img: china },
        { name: '뉴질랜드', eng: 'NEW ZEALAND', img: france },
        { name: '독일', eng: 'GERMANY', img: uk },
        { name: '프랑스', eng: 'FRANCE', img: france },
        { name: '영국', eng: 'UNITED KINGDOM', img: uk },
        { name: '미국', eng: 'UNITED STATES', img: japan },
        { name: '캐나다', eng: 'CANADA', img: japan },
        { name: '칠레', eng: 'CHILE', img: japan },
        { name: '볼리비아', eng: 'BOLIVIA', img: japan },
        { name: '콜롬비아', eng: 'COLOMBIA', img: japan },
      ],
    },
    {
      name: '아시아',
      subCategories: [
        { name: '일본', eng: 'JAPAN', img: japan },
        { name: '중국', eng: 'CHINA', img: china },
        { name: '홍콩', eng: 'HONG KONG', img: france },
        { name: '마카오', eng: 'MAKAO', img: uk },
        { name: '몽골', eng: 'MONGOLIA', img: japan },
      ],
    },
    {
      name: '남태평양',
      subCategories: [
        { name: '호주', eng: 'AUSTRALIA', img: china },
        { name: '뉴질랜드', eng: 'NEW ZEALAND', img: france },
      ],
    },
    {
      name: '유럽',
      subCategories: [
        { name: '독일', eng: 'GERMANY', img: uk },
        { name: '프랑스', eng: 'FRANCE', img: france },
        { name: '영국', eng: 'UNITED KINGDOM', img: uk },
      ],
    },
    {
      name: '미주',
      subCategories: [
        { name: '미국', eng: 'UNITED STATES', img: japan },
        { name: '캐나다', eng: 'CANADA', img: japan },
      ],
    },
    {
      name: '중남미',
      subCategories: [
        { name: '칠레', eng: 'CHILE', img: japan },
        { name: '볼리비아', eng: 'BOLIVIA', img: japan },
        { name: '콜롬비아', eng: 'COLOMBIA', img: japan },
      ],
    },
  ],
  국내: [
    {
      name: '전체',
      subCategories: [
        { name: '서울', eng: 'SEOUL', img: france },
        { name: '경기', eng: 'GYEONGGI', img: france },
        { name: '제주', eng: 'JEJU', img: france },
        { name: '강원', eng: 'GANGWON', img: france },
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
