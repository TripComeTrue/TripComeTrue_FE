import axios from 'axios';
import { SignInBody, SignUpReqBody, SignUpResBody } from '@/@types/auth.types';

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
