import { rest } from 'msw';
import SERVER_URL from '@/constants/api';
import TRIP_PLANS from '@/constants/MyPage/tripPlan';
import PLACE_DATA from '@/constants/MyPage/tripReview';
import NOTIES from '@/constants/MyPage/notification';
import {
  WISH_CITY,
  WISH_LOCATION,
  WISH_TRIP,
} from '@/constants/MyPage/wishlist';
import PLACE_REVIEW from '@/constants/MyPage/placeReview';
import TRIP_RECORD_REVIEW from '@/constants/MyPage/tripRecord';

interface SignInRequestBody {
  email: string;
  password: string;
}

const handlers = [
  rest.post(`${SERVER_URL}/auth/signin`, (req, res, ctx) => {
    const { email, password } = req.body as SignInRequestBody;
    return res(
      ctx.status(200),
      ctx.json({
        message: 'Login Successful',
        user: { email, password },
      }),
    );
  }),
  rest.get(`${SERVER_URL}/mypage/plan`, (_, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        message: 'plan data loaded',
        data: TRIP_PLANS,
      }),
    );
  }),
  rest.get(`${SERVER_URL}/mypage/review`, (_, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        message: 'review data loaded',
        data: PLACE_DATA,
      }),
    );
  }),
  rest.get(`${SERVER_URL}/mypage/place`, (_, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        message: 'place review data loaded',
        data: PLACE_REVIEW,
      }),
    );
  }),
  rest.get(`${SERVER_URL}/mypage/trip-record`, (_, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        message: 'trip record review data loaded',
        data: TRIP_RECORD_REVIEW,
      }),
    );
  }),
  rest.get(`${SERVER_URL}/mypage/noti`, (_, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        message: 'noti data loaded',
        data: NOTIES,
      }),
    );
  }),
  rest.get(`${SERVER_URL}/mypage/wishlist`, (_, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({
        message: 'wishlist data loaded',
        data: { trip: WISH_TRIP, city: WISH_CITY, location: WISH_LOCATION },
      }),
    );
  }),
  rest.get(`${SERVER_URL}/mypage/wishlist/more`, (req, res, ctx) => {
    const url = new URL(req.url);
    const type = url.searchParams.get('type');
    let data;
    switch (type) {
      case 'trip':
        data = ctx.json({
          message: 'wishlist: trip data loaded',
          data: WISH_TRIP,
        });
        break;
      case 'city':
        data = ctx.json({
          message: 'wishlist: city data loaded',
          data: WISH_CITY,
        });
        break;
      case 'location':
        data = ctx.json({
          message: 'wishlist: location data loaded',
          data: WISH_LOCATION,
        });
        break;
      default:
        data = ctx.json({
          message: 'wishlist data loaded',
          data: [],
        });
    }
    const response = res(ctx.delay(1000), ctx.status(200), data);
    return response;
  }),

  rest.get(`${SERVER_URL}/v1/trip-records`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 200,
        data: [
          {
            tripRecordId: 3,
            title: '피드 제목',
            countries: '한국,일본',
            totalDays: 4,
            commentCount: 10,
            storeCount: 30,
            imageUrl: '이미지링크1',
            member: {
              nickname: '배부른앵무새',
              profileImage: '프로필01',
            },
          },
          {
            tripRecordId: 2,
            title: '제목02',
            countries: '미국,유럽',
            totalDays: 2,
            commentCount: 30,
            storeCount: 20,
            member: {
              nickname: '배부른앵무새',
              profileImage: '프로필01',
            },
          },
          {
            tripRecordId: 1,
            title: '제목',
            countries: '일본',
            totalDays: 2,
            commentCount: 20,
            storeCount: 10,
            imageUrl: '이미지링크3',
            member: {
              nickname: '배부른앵무새',
              profileImage: '프로필01',
            },
          },
        ],
      }),
    );
  }),
];

export default handlers;
