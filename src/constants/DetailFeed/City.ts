import domestic1 from '/domestic1.jpg';
import domestic2 from '/domestic2.jpg';
import domestic3 from '/domestic3.jpg';
import overseas1 from '/overseas1.jpg';
import overseas2 from '/overseas2.jpg';
import overseas3 from '/overseas3.jpg';
import 'swiper/swiper-bundle.css';
import { Slide } from '@/components/Home/HomeShorts/HomeShorts.types';
// 임시 이미지
import bangkokImg from '/bangkok.png';
import tokyoImg from '/tokyo.png';

export const slideShorts: Slide[] = [
  { img: domestic1, title: '해외같은 제주 풀빌라', bookmark: 234 },
  { img: overseas1, title: '스페인의 길거리', bookmark: 125 },
  { img: domestic2, title: '서울 이색 데이트 추천!', bookmark: 88 },
  { img: overseas2, title: '디즈니 성 몽생미셸', bookmark: 632 },
  { img: domestic3, title: '추운 겨울의 글램핑', bookmark: 231 },
  { img: overseas3, title: '일본 온천 여행', bookmark: 115 },
];

export const TOP_REVIEW_DATA = [
  {
    title: '제주',
    subtitle: 'Jeju',
    bookmark: 123,
    img: domestic1,
    rate: 0,
    username: '어준혁',
    nights: '2박 3일',
    userphoto: '',
    postTitle: '아름다운 방콕 즐기기',
  },
  {
    title: '남양주',
    subtitle: 'Namyangju',
    bookmark: 213,
    img: domestic1,
    rate: 0,
    username: '어준혁',
    nights: '2박 3일',
    userphoto: '',
    postTitle: '아름다운 방콕 즐기기',
  },
  {
    title: '방콕',
    subtitle: 'Bangkok',
    bookmark: 173,
    img: bangkokImg,
    rate: 0,
    username: '어준혁',
    nights: '2박 3일',
    userphoto: '',
    postTitle: '아름다운 방콕 즐기기',
  },
  {
    title: '도쿄',
    subtitle: 'Tokyo',
    bookmark: 200,
    img: tokyoImg,
    rate: 0,
    username: '어준혁',
    nights: '2박 3일',
    userphoto: '',
    postTitle: '아름다운 방콕 즐기기',
  },
];

export const DAY_OPTION = [
  { id: 1, dayOption: '2박 3일' },
  { id: 2, dayOption: '3박 4일' },
  { id: 3, dayOption: '4박 5일' },
  { id: 4, dayOption: '기타' },
];
