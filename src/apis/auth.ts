import {
  JWTBody,
  SignInBody,
  SignUpReqBody,
  SignUpResBody,
} from '@/@types/auth.types';
import client from './client';

export const checkDuplicatedEmail = async (v: string | undefined) => {
  const { status } = await client.get(
    `/v1/member/check-duplicated-email?email=${v}`,
  );
  return status;
};

export const postSignIn = async (reqBody: SignUpReqBody) => {
  const {
    data: {
      data: { token },
    },
  } = await client.post<SignInBody>(`/login`, {
    email: reqBody.email,
    password: reqBody.password,
  });
  return token;
};

export const postSignUp = async (reqBody: SignUpReqBody) => {
  const { data } = await client.post<SignUpResBody>(`/v1/member/signup`, {
    email: reqBody.email,
    password: reqBody.password,
  });
  return data;
};

export const getTokenTest = async () => {
  const { data } = await client.get<JWTBody>(`/v1/member/test/jwt`);
  return data;
};
