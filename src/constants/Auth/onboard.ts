import { OnBoardingMenu } from '@/components/auth/OnBoarding/OnBoarding.types';
import onboard1 from '@/assets/onboard-01.png';
import onboard2 from '@/assets/onboard-02.png';
import onboard3 from '@/assets/onboard-03.png';

const ONBOARD_ITEMS: OnBoardingMenu[] = [
  {
    id: '1',
    title1: '지금 뜨는 최신 여행을',
    title2: '쇼츠로 10초만에 확인',
    image: onboard1,
  },
  {
    id: '2',
    title1: '인기 여행 일정을 손쉽게',
    title2: '나의 여행일정으로',
    image: onboard2,
  },
  {
    id: '3',
    title1: '획득한 트립포인트는',
    title2: '알뜰살뜰 여행경비로 사용',
    image: onboard3,
  },
];

export default ONBOARD_ITEMS;
