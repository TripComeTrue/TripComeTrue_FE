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
