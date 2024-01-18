import client from '@/apis';
import { MyTripPlan } from './MyPagePlan.types';

const getMyPlan = async () => {
  const { data } = await client.get<{ message: string; data: MyTripPlan[] }>(
    '/mypage/plan',
  );
  return data;
};
export default getMyPlan;
