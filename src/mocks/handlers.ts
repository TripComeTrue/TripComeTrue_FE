import { HttpResponse, http } from 'msw';
import SERVER_URL from '@/constants/api';

interface SignInRequestBody {
  email: string;
  password: string;
}

const handlers = [
  http.post(`${SERVER_URL}/auth/signin`, async ({ request }) => {
    const { email, password } = (await request.json()) as SignInRequestBody;
    return HttpResponse.json({
      message: 'Login Successful!',
      user: {
        email,
        password,
      },
    });
  }),
];

export default handlers;
