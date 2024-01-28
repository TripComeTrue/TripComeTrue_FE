import { useEffect, useState } from 'react';
import HomeCreatorPost from './HomeCreatorPost';
import starIcon from '/starIcon.svg';
import { SubTitle } from '@/components/common';
import { HomeHotCreatorList } from '@/apis/home';
import { CreatorData } from './HomeCreator.types';

const HomeCreator = () => {
  const [cityData, setCityData] = useState<CreatorData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await HomeHotCreatorList();
        setCityData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <SubTitle margin="1rem" fontSize={18} icon={starIcon}>
        HOT 여행 크리에이터
      </SubTitle>

      {cityData.length > 0 && (
        <>
          {cityData[0] && (
            <HomeCreatorPost
              key={cityData[0].memberInfo.nickname}
              creator={cityData[0].memberInfo}
              creatorData={cityData[0].tripRecords}
            />
          )}
          {cityData[1] && (
            <HomeCreatorPost
              key={cityData[1].memberInfo.nickname}
              creator={cityData[1].memberInfo}
              creatorData={cityData[1].tripRecords}
            />
          )}
        </>
      )}
    </>
  );
};

export default HomeCreator;
