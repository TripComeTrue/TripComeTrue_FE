import { rest } from 'msw';
import SERVER_URL from '@/constants/api';
import TRIP_PLANS from '@/constants/MyPage/tripPlan';

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
];

export default handlers;
