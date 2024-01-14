import { Route, Routes } from 'react-router-dom';

import DashBoard from '@/components/layout';
// import Main from '@/pages/Main/Main';

import { TripDetail, TripHome, TripList, TripPlan } from '@/pages/Trip';
import Home from './pages/Home/Home';
import { SignIn, SignInEmail, SignUp, SignUpAgree, Social } from './pages/Auth';
import Search from './pages/Search/Search';

function App() {
  return (
    <Routes>
      <Route element={<DashBoard />}>
        <Route index element={<SignIn />} />
        <Route path="/auth/*">
          <Route path="signin-email" element={<SignInEmail />} />
          <Route path="agree" element={<SignUpAgree />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="social" element={<Social />} />
          {/* <Route path="findemail" element={<FindEmail />} />
          <Route path="findpw" element={<FindPw />} /> */}
        </Route>
        <Route path="home" element={<Home />} />
        <Route path="search/*" element={<Search />} />
        <Route path="/trip/*">
          <Route index element={<TripHome />} />
          <Route path="list" element={<TripList />} />
          <Route path="detail/:id" element={<TripDetail />} />
          <Route path="plan" element={<TripPlan />} />R
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
