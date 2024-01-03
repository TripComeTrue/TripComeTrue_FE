import { Route, Routes } from 'react-router-dom';

import DashBoard from '@/components/layout';
// import Main from '@/pages/Main/Main';
import {
  FindEmail,
  FindPw,
  SignIn,
  SignInEmail,
  SignUp,
  SignUpAgree,
} from './pages/Auth';

function App() {
  return (
    <Routes>
      <Route element={<DashBoard />}>
        <Route index element={<SignIn />} />
        <Route path="/auth/signin-email" element={<SignInEmail />} />
        <Route path="/auth/agree" element={<SignUpAgree />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/findemail" element={<FindEmail />} />
        <Route path="/auth/findpw" element={<FindPw />} />
      </Route>
    </Routes>
  );
}

export default App;
