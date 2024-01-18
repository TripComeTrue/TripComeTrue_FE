import client from '@/apis';
import { MyTripReview } from './MyPageReview.types';

const getMyReview = async () => {
  const { data } = await client.get<{ message: string; data: MyTripReview[] }>(
    '/mypage/review',
  );
  return data;
};

export default getMyReview;
