import client from '..';
import { SignInType } from './signInType';

const SIGNIN_API = {
  userSignIn: (userData: SignInType) => {
    client.post('api/sign-in', userData);
  },
};

export default SIGNIN_API;
