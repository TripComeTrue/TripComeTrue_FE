import { Route, Routes } from 'react-router-dom';

import DashBoard from '@/components/layout';
// import Main from '@/pages/Main/Main';

import { TripPlanCountry, TripPlanDate } from './components/Trip/TripPlan';
import TripPlanCity from './components/Trip/TripPlan/TripPlanCity/TripPlanCity';
import {
  TripDetail,
  TripHome,
  TripList,
  TripReviewWriteEdit,
  TripReviewWriteNew,
} from '@/pages/Trip';
import Home from './pages/Home/Home';
import { SignIn, SignInEmail, SignUp, SignUpAgree, Social } from './pages/Auth';
import {
  City,
  GalleryList,
  SpotList,
  SpotSearch,
  TouristSpot,
  Reviews,
  ReviewComment,
  SpotReviewWriteNew,
  SpotReviewWriteEdit,
} from './pages/DetailFeed';
import ShortsList from './pages/DetailFeed/ShortsList/ShortsList';
import TripPlanPosting from './components/Trip/TripPlan/TripPlanPosting/TripPlanPosting';

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
        <Route path="search/select/:tag" element={<SearchTag />} />
        {/* <Route path="search" element={<Search />} /> */}

        <Route path="creator/*" element={<Creator />} />
        <Route path="creator/:id" element={<CreatorDetail />} />

        <Route path="/trip/*">
          <Route index element={<TripHome />} />
          <Route path="list" element={<TripList />} />
          <Route path="detail/:tripRecordId" element={<TripDetail />} />
          <Route
            path="detail/:tripRecordId/review/:reviewId/write"
            element={<TripReviewWriteNew />}
          />
          <Route
            path="detail/:tripRecordId/review/:reviewId/edit"
            element={<TripReviewWriteEdit />}
          />
          <Route path="plan" element={<TripPlanDate />} />
          <Route path="country" element={<TripPlanCountry />} />
          <Route path="city" element={<TripPlanCity />} />
          <Route path="posting" element={<TripPlanPosting />} />
        </Route>

        <Route path="/detailfeed/*">
          <Route path="city" element={<City />} />
          <Route path="spot" element={<TouristSpot />} />
          <Route path="spot/:spotId/review" element={<Reviews />} />
          <Route
            path="spot/:spotId/review/:reviewId/write"
            element={<SpotReviewWriteNew />}
          />
          <Route
            path="spot/:spotId/review/:reviewId/edit"
            element={<SpotReviewWriteEdit />}
          />
          <Route
            path="spot/:spotId/review/:reviewId/comment"
            element={<ReviewComment />}
          />
          <Route path="shortslist" element={<ShortsList />} />
          <Route path="gallerylist" element={<GalleryList />} />
          <Route path="spotlist" element={<SpotList />} />
          <Route path="spotsearch" element={<SpotSearch />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
