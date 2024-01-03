import HomeSearch from './HomeSearch/HomeSearch';
import HomeShorts from './HomeShorts/HomeShorts';
import HomeHotplace from './HomeHotplace/HomeHotplace';
// import HomeCreator from './HomeCreator/HomeCreator';
// import HomeMD from './HomeMD/HomeMD';

const HomeComponent = () => {
  return (
    <div>
      <HomeSearch />
      <HomeShorts />
      <HomeHotplace />
      {/* <HomeCreator />
      <HomeMD /> */}
    </div>
  );
};

export default HomeComponent;
