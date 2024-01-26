export interface SignUpReqBody {
  email: string;
  password: string;
}
export interface SignUpResBody {
  code: number;
  data: {
    memberId: number;
    email: string;
    name: string;
  };
}

export interface SignInBody {
  code: number;
  data: {
    email: string;
    name: string;
    token: string;
  };
}

export interface JWTBody {
  code: number;
  data: {
    email: string;
    nickname: string;
    authority: string;
    provider?: string;
  };
}
