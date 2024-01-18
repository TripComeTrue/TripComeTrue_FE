import { Route, Routes } from 'react-router-dom';

import DashBoard from '@/components/layout';
// import Main from '@/pages/Main/Main';

import { TripPlanCountry, TripPlanDate } from './components/Trip/TripPlan';
import TripPlanCity from './components/Trip/TripPlan/TripPlanCity/TripPlanCity';
import {
  TripDetail,
  TripHome,
  TripList,
  TripReviewEdit,
  TripReviewNew,
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
} from './pages/DetailFeed';
import ShortsList from './pages/DetailFeed/ShortsList/ShortsList';
import TripPlanPosting from './components/Trip/TripPlan/TripPlanPosting/TripPlanPosting';

import Search from './pages/Search/Search';
import SearchTag from './pages/Search/SearchTag';
import Creator from './pages/Creator/Creator';
import CreatorDetail from './pages/Creator/CreatorDetails';
import {
  ChangePassword,
  ConfirmPassword,
  EditProfile,
  Faq,
  MyPage,
  Notification,
  TripPoint,
  WishList,
  WishListMore,
} from './pages/MyPage';
import { MyPageLayout } from './components/MyPage';

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
          <Route path="detail/:id/review/write" element={<TripReviewNew />} />
          <Route path="detail/:id/review/edit" element={<TripReviewEdit />} />
          <Route path="plan" element={<TripPlanDate />} />
          <Route path="country" element={<TripPlanCountry />} />
          <Route path="city" element={<TripPlanCity />} />
          <Route path="posting" element={<TripPlanPosting />} />
        </Route>
        <Route path="/detailfeed/*">
          <Route path="city" element={<City />} />
          <Route path="spot" element={<TouristSpot />} />
          <Route path="spot/:id/review" element={<Reviews />} />
          <Route path="shortslist" element={<ShortsList />} />
          <Route path="gallerylist" element={<GalleryList />} />
          <Route path="spotlist" element={<SpotList />} />
          <Route path="spotsearch" element={<SpotSearch />} />
        </Route>
        <Route path="/mypage/*" element={<MyPageLayout />}>
          <Route index element={<MyPage />} />
          <Route path="notification" element={<Notification />} />
          <Route path="confirm-password" element={<ConfirmPassword />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="wishlist" element={<WishList />} />
          <Route path="wishlist/:type" element={<WishListMore />} />
          <Route path="point" element={<TripPoint />} />
          <Route path="faq" element={<Faq />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
