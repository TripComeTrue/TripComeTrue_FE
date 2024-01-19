import client from '.';
import { PostData } from '@/components/common/Spots/Spots.types';
import { MyTripPlan, MyTripReview, Notification } from '@/@types/mypage.types';

export const getMyPlan = async () => {
  const { data } = await client.get<{ message: string; data: MyTripPlan[] }>(
    '/mypage/plan',
  );
  return data;
};

export const getMyReview = async () => {
  const { data } = await client.get<{ message: string; data: MyTripReview[] }>(
    '/mypage/review',
  );
  return data;
};

export const getNoties = async () => {
  const { data } = await client.get<{ message: string; data: Notification[] }>(
    '/mypage/noti',
  );
  return data;
};

export const getWishList = async () => {
  const { data } = await client.get<{
    message: string;
    data: { trip: PostData[]; city: PostData[]; location: PostData[] };
  }>(`/mypage/wishlist`);
  return data;
};

export const getWishListMore = async (type: string) => {
  const { data } = await client.get<{
    message: string;
    data: PostData[];
  }>(`/mypage/wishlist/more?type=${type}`);
  return data;
};
