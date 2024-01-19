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
];

export default handlers;
