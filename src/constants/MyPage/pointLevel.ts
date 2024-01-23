import {
  PointLevel,
  PointLevelLimit,
} from '@/components/MyPage/MyPageTripPoint/MyPageLevel.types';
import {
  BeginnerBenefit,
  RunnerBenefit,
  TravelerBenefit,
} from '@/components/MyPage/MyPageTripPoint/MyPageLevelBenefits';

const POINT_LEVEL_MENU: PointLevel[] = [
  {
    level: 'beginner',
    name: '비기너',
    bgColor: '#d9d9d9',
    bgSize: '63%',
    benefit: BeginnerBenefit,
  },
  {
    level: 'runner',
    name: '러너',
    bgColor: '#505050',
    bgSize: '70%',
    benefit: RunnerBenefit,
  },
  {
    level: 'traveler',
    name: '트레블러',
    bgColor: '#b3f34c',
    bgSize: '55%',
    benefit: TravelerBenefit,
  },
];

export const POINT_LEVEL: PointLevelLimit = {
  beginner: { start: 0, end: 149, next: '러너' },
  runner: { start: 150, end: 279, next: '트레블러' },
  traveler: { start: 280, end: 9999, next: '최고레벨' },
};

export default POINT_LEVEL_MENU;
