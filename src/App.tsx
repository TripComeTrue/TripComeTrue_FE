import { Route, Routes } from 'react-router-dom';

import DashBoard from '@/components/layout';
// import Main from '@/pages/Main/Main';

import { TripDetail, TripHome, TripList } from '@/pages/Trip';
import { TripPlanCountry, TripPlanDate } from './components/Trip/TripPlan';
import TripPlanCity from './components/Trip/TripPlan/TripPlanCity/TripPlanCity';
import { SignIn, SignInEmail, SignUp, SignUpAgree, Social } from './pages/Auth';
import TripPlanPosting from './components/Trip/TripPlan/TripPlanPosting/TripPlanPosting';

import { City, TouristSpot } from './pages/DetailFeed';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import SearchTag from './pages/Search/SearchTag';
import Creator from './pages/Creator/Creator';
import CreatorDetail from './pages/Creator/CreatorDetails';

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
        <Route path="search/:tag" element={<SearchTag />} />
        <Route path="creator/*" element={<Creator />} />
        <Route path="creator/:id" element={<CreatorDetail />} />

        <Route path="/trip/*">
          <Route index element={<TripHome />} />
          <Route path="list" element={<TripList />} />
          <Route path="detail/:id" element={<TripDetail />} />
          <Route path="plan" element={<TripPlanDate />} />
          <Route path="country" element={<TripPlanCountry />} />
          <Route path="city" element={<TripPlanCity />} />
          <Route path="posting" element={<TripPlanPosting />} />
          <Route path="city" element={<TripPlanCity />} />R
        </Route>
        <Route path="/detailfeed/*">
          <Route path="city" element={<City />} />
          <Route path="spot" element={<TouristSpot />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
