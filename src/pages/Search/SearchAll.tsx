// import { useEffect, useState } from 'react';
// import { useNavigate, useSearchParams } from 'react-router-dom';
import { SearchCity, SearchCreator, SearchSpot } from '@/components/Search';
// import {
//   SearchCityInfo,
//   SearchCreatorInfo,
//   SearchSpotInfo,
// } from '@/apis/search';

const SearchAll = () => {
  // const navigate = useNavigate();
  // const [searchParams] = useSearchParams();
  // const queryData = searchParams.get('query');
  // const [cityData, setCityData] = useState(null);
  // const [spotData, setSpotData] = useState(null);
  // const [creatorData, setCreatorData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (queryData !== null) {
  //         const cityDataResult = await SearchCityInfo(queryData);
  //         setCityData(cityDataResult);

  //         const spotDataResult = await SearchSpotInfo(queryData);
  //         setSpotData(spotDataResult);

  //         const creatorDataResult = await SearchCreatorInfo(queryData);
  //         setCreatorData(creatorDataResult);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // // useEffect(() => {
  // if (cityData === null && spotData === null && creatorData === null) {
  //   navigate('/search-non');
  // } else {
  //   navigate(`/search?query=${queryData}&tab=all`);
  // }
  // // }, []);

  return (
    <div>
      <SearchCity />
      <SearchSpot />
      <SearchCreator />
    </div>
  );
};

export default SearchAll;
