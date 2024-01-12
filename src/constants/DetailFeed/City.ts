import domestic1 from '/domestic1.jpg';
import domestic2 from '/domestic2.jpg';
import domestic3 from '/domestic3.jpg';
import overseas1 from '/overseas1.jpg';
import overseas2 from '/overseas2.jpg';
import overseas3 from '/overseas3.jpg';
import 'swiper/swiper-bundle.css';
import { Slide } from '@/components/Home/HomeShorts/HomeShorts.types';

export const slideShorts: Slide[] = [
  { img: domestic1, title: '해외같은 제주 풀빌라', bookmark: 234 },
  { img: overseas1, title: '스페인의 길거리', bookmark: 125 },
  { img: domestic2, title: '서울 이색 데이트 추천!', bookmark: 88 },
  { img: overseas2, title: '디즈니 성 몽생미셸', bookmark: 632 },
  { img: domestic3, title: '추운 겨울의 글램핑', bookmark: 231 },
  { img: overseas3, title: '일본 온천 여행', bookmark: 115 },
];
