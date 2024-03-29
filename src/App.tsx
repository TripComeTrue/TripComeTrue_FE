import { Route, Routes, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import DashBoard from '@/components/layout';
import {
  TripDetail,
  TripHome,
  TripList,
  TripPlan,
  TripRecordReviewEdit,
  TripRecordReviewWrite,
} from '@/pages/Trip';
import Home from './pages/Home/Home';
import {
  SignIn,
  SignInEmail,
  SignUp,
  SignUpAgree,
  Social,
  Welcome,
} from './pages/Auth';
import {
  City,
  SpotList,
  SpotSearch,
  TouristSpot,
  Reviews,
  ReviewComment,
  CityGalleryList,
  SpotGalleryList,
  PlaceReviewWrite,
  PlaceReviewEdit,
  TripMap,
} from './pages/DetailFeed';
import ShortsList from './pages/DetailFeed/ShortsList/ShortsList';

import Search from './pages/Search/Search';
import SearchTag from './pages/Search/SearchTag';
import Creator from './pages/Creator/Creator';
import CreatorDetail from './pages/Creator/CreatorDetails';
import SearchNons from './pages/Search/SearchNons';
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
import TripPlanRecord from './pages/Trip/TripPlan/TripPlanRecord';
import { MyPageLayout } from './components/MyPage';
import NotFound from './pages/NotFound/NotFound';
import TripPlanSelect from './pages/Trip/TripPlan/TripPlanSelect';
import { HomeAllCity } from './components/Home';
import SearchTagExpense from './pages/Search/SearchTagExpense';
import TripPlanCopy from './pages/Trip/TripPlan/TripPlanCopy';

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route element={<DashBoard />}>
        <Route index element={<SignIn />} />
        <Route path="auth">
          <Route path="signin-email" element={<SignInEmail />} />
          <Route path="agree" element={<SignUpAgree />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="social" element={<Social />} />
          <Route path="welcome" element={<Welcome />} />
        </Route>
        <Route path="home" element={<Home />} />
        <Route path="citylist" element={<HomeAllCity />} />
        <Route path="search/*" element={<Search />} />
        <Route
          path="search/select-expense/:tag"
          element={<SearchTagExpense />}
        />
        <Route path="search/select/:tag" element={<SearchTag />} />
        <Route path="search-non" element={<SearchNons />} />

        <Route path="creator/*" element={<Creator />} />
        <Route path="creator/:id" element={<CreatorDetail />} />

        <Route path="/trip/*">
          <Route index element={<TripHome />} />
          <Route path="tripplanrecord" element={<TripPlanSelect />} />
          <Route path="list" element={<TripList />} />
          <Route path="detail/:tripRecordId" element={<TripDetail />} />
          <Route
            path="trip-record/review/:reviewId/write"
            element={<TripRecordReviewWrite />}
          />
          <Route
            path="trip-record/review/:reviewId/edit"
            element={<TripRecordReviewEdit />}
          />
          <Route path="tripplan" element={<TripPlan />} />
          <Route path="tripplanrecord" element={<TripPlanSelect />} />
          <Route path="tripplanrecord/:id" element={<TripPlanRecord />} />
          <Route path="tripplancopy/:id" element={<TripPlanCopy />} />
          <Route path="detail/:tripRecordId" element={<TripDetail />} />
        </Route>

        <Route path="/detailfeed/*">
          <Route path="city/:id" element={<City />} />
          <Route path="spot/:id" element={<TouristSpot />} />
          <Route path="spot/:placeId/review" element={<Reviews />} />
          <Route
            path="spot/:placeId/review/write"
            element={<PlaceReviewWrite />}
          />
          <Route
            path="spot/:placeId/review/:reviewId/edit"
            element={<PlaceReviewEdit />}
          />
          <Route
            path="spot/:placeId/review/:reviewId/comment"
            element={<ReviewComment />}
          />
          <Route path="shortslist/:cityName/:cityId" element={<ShortsList />} />
          <Route
            path="citygallerylist/:cityName/:cityId"
            element={<CityGalleryList />}
          />
          <Route
            path="spotgallerylist/:placeName/:placeId"
            element={<SpotGalleryList />}
          />
          <Route path="spotlist/:cityName/:cityId" element={<SpotList />} />
          <Route path="spotsearch/:cityName/:cityId" element={<SpotSearch />} />
          <Route path="tripmap/:cityId" element={<TripMap />} />
        </Route>
        <Route path="mypage" element={<MyPageLayout />}>
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
        <Route path="404" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
