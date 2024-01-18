import client from '@/apis';
import { Notification } from './MyPageNoti.types';

const getNoties = async () => {
  const { data } = await client.get<{ message: string; data: Notification[] }>(
    '/mypage/noti',
  );
  return data;
};

export default getNoties;
