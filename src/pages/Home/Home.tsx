import {
  HomeCreator,
  HomeHotplace,
  // HomeMD,
  HomeSearch,
  HomeShorts,
} from '@/components/Home';
import { TabBar } from '@/components/common';

const Home = () => {
  return (
    <div>
      <HomeSearch />
      <HomeShorts />
      <HomeHotplace />
      <HomeCreator />
      {/* <HomeMD /> */}
      <TabBar />
    </div>
  );
};

export default Home;
