import { PostData } from '@/components/common/Spots/Spots.types';

export const WISH_TRIP: PostData[] = [
  {
    tripRecordTitle: '치앙마이 다녀왔어요!',
    imageUrl: '/domestic1.jpg',
    storedCount: 1200,
  },
  {
    tripRecordTitle: '태국 치앙마이 가볼만한 곳',
    imageUrl: '/domestic2.jpg',
    storedCount: 900,
  },
  {
    tripRecordTitle: '태국 치앙마이 가볼만한 곳2',
    imageUrl: '/domestic3.jpg',
    storedCount: 600,
  },
];

export const WISH_CITY: PostData[] = [
  { tripRecordTitle: '파리', imageUrl: '/overseas1.jpg', storedCount: 123 },
  { tripRecordTitle: '보르도', imageUrl: '/overseas2.jpg', storedCount: 123 },
  { tripRecordTitle: '니스', imageUrl: '/overseas3.jpg', storedCount: 123 },
];

export const WISH_LOCATION: PostData[] = [
  {
    tripRecordTitle: '젠주 카페',
    imageUrl: '/images/line-review01.jpg',
    storedCount: 123,
    reviews: 40,
  },
  {
    tripRecordTitle: '강냉이 소쿠리',
    imageUrl: '/images/line-review02.jpg',
    storedCount: 123,
    reviews: 40,
  },
  {
    tripRecordTitle: '안목해변',
    imageUrl: '/images/line-review03.jpg',
    storedCount: 123,
    reviews: 40,
  },
];
