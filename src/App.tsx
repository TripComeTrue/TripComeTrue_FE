import { Route, Routes } from 'react-router-dom';

import DashBoard from '@/components/layout';
// import Main from '@/pages/Main/Main';
import SignIn from './pages/Auth/SignIn';
import SignInEmail from './pages/Auth/SignInEmail';
import SignUpAgree from './pages/Auth/SignUpAgree';
import SignUp from './pages/Auth/SignUp';

function App() {
  return (
    <Routes>
      <Route element={<DashBoard />}>
        <Route index element={<SignIn />} />
        <Route path="/auth/signin-email" element={<SignInEmail />} />
        <Route path="/auth/agree" element={<SignUpAgree />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
