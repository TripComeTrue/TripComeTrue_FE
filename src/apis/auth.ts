import axios from 'axios';
import {
  JWTBody,
  SignInBody,
  SignUpReqBody,
  SignUpResBody,
} from '@/@types/auth.types';
import getCookie from '@/utils/token';

const serverUrl = 'http://tripcometrue.site';

export const checkDuplicatedEmail = async (v: string | undefined) => {
  const { status } = await axios.get(
    `${serverUrl}/v1/member/check-duplicated-email?email=${v}`,
  );
  return status;
};

export const postSignIn = async (reqBody: SignUpReqBody) => {
  const {
    data: {
      data: { token },
    },
  } = await axios.post<SignInBody>(`${serverUrl}/login`, {
    email: reqBody.email,
    password: reqBody.password,
  });
  return token;
};

export const postSignUp = async (reqBody: SignUpReqBody) => {
  const { data } = await axios.post<SignUpResBody>(
    `${serverUrl}/v1/member/signup`,
    {
      email: reqBody.email,
      password: reqBody.password,
    },
  );
  return data;
};

export const getTokenTest = async () => {
  const accessToken = getCookie('accessToken');
  const { data } = await axios.get<JWTBody>(`${serverUrl}/v1/member/test/jwt`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};
