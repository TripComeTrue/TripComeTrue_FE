import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Shorts } from '@/components/common';
import * as Styled from './SearchCreator.styles';
import { SearchCreatorInfo } from '@/apis/search';
import { CreatorResponse } from './SearchCreator.types';

const SearchCreatorShorts = () => {
  const [searchParams] = useSearchParams();
  const queryCreator = searchParams.get('query');
  const [creatorData, setCreatorData] = useState<CreatorResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (queryCreator !== null) {
          if (queryCreator !== null) {
            const data = await SearchCreatorInfo(queryCreator);
            setCreatorData(data);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {creatorData && creatorData.videos.length !== 0 && (
        <>
          <Styled.CreatorTitle>
            검색된 크리에이터가 업로드한 쇼츠
          </Styled.CreatorTitle>
          <Shorts slides={creatorData.videos} slidesPerView={2.1} />
        </>
      )}
    </div>
  );
};

export default SearchCreatorShorts;
