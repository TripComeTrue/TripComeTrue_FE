import { HomeHotplace, HomeSearch, HomeShorts } from '@/components/Home';

const Home = () => {
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

export default Home;
