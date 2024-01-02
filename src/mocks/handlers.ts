import { rest } from 'msw';
import SERVER_URL from '@/constants/api';

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
];

export default handlers;
