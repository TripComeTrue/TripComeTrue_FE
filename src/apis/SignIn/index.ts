import client from '..';
import { SignInType } from './signInType';

const SIGNIN_API = {
  userSignIn: (userData: SignInType) => {
    const res = client.post('auth/signin', userData);

    return res;
  },
};

export default SIGNIN_API;
