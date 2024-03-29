import { TagTypeEnum } from '@/components/Trip/TripPlan/TripPlanPostingReview/TripPlanAddTags/TripPlanTagsModal/TripPlanTagsModal.types';

interface HashTag {
  type: 'with' | 'type' | 'other';
  name: string;
  tag: string;
}

const HASH_TAGS: HashTag[] = [
  { type: 'with', name: '연인끼리', tag: 'couple' },
  { type: 'with', name: '친구끼리', tag: 'friends' },
  { type: 'with', name: '가족여행', tag: 'family' },
  { type: 'with', name: '혼자여행', tag: 'solo' },
  { type: 'type', name: '배낭여행', tag: 'back-packing' },
  { type: 'type', name: '패키지여행', tag: 'package' },
  { type: 'type', name: '자유여행', tag: 'free' },
  { type: 'type', name: '당일치기', tag: 'oneday' },
  { type: 'type', name: '장기여행', tag: 'long' },
  { type: 'other', name: '저예산', tag: 'low-budget' },
  { type: 'other', name: '고예산', tag: 'high-budget' },
  { type: 'other', name: '뚜벅이', tag: 'walking' },
  { type: 'other', name: '크루즈', tag: 'cruise' },
  { type: 'other', name: '맛집', tag: 'famous-restaurant' },
  { type: 'other', name: '쇼핑천국', tag: 'shopping' },
  { type: 'other', name: '건축탐방', tag: 'building' },
  { type: 'other', name: '효도여행', tag: 'piety' },
  { type: 'other', name: '인기여행지', tag: 'hot' },
  { type: 'other', name: '이색여행지', tag: 'exotic' },
  { type: 'other', name: '자연만끽', tag: 'nature' },
];

export default HASH_TAGS;

interface TripTag {
  value: TagTypeEnum;
  label: string;
}

export const TRIP_TAGS: TripTag[] = [
  {
    value: TagTypeEnum.flight,
    label: '항공권 구매 주소',
  },
  {
    value: TagTypeEnum.accommodation,
    label: '숙박시설 예약 주소',
  },
  {
    value: TagTypeEnum.location,
    label: '음식점/관광시설 등의 위치 주소',
  },
  {
    value: TagTypeEnum.ticket,
    label: '티켓/입장권/패스 구매 주소',
  },
];
