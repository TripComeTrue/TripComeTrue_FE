import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SubTitle } from '@/components/common';
import Creator from '@/components/common/Creator/Creator';
import * as Styled from './SearchCreator.styles';
import { SearchCreatorInfo } from '@/apis/search';
import { CreatorResponse } from './SearchCreator.types';

const SearchCreator = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryCreator = searchParams.get('query');
  const [creatorData, setCreatorData] = useState<CreatorResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (queryCreator !== null) {
          const data = await SearchCreatorInfo(queryCreator);
          setCreatorData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(creatorData);

  return (
    <>
      <Styled.CreatorTitleWrap>
        <SubTitle
          fontSize={14}
          variant="more"
          onClickButton={() => navigate('/creator')}>
          크리에이터
        </SubTitle>
      </Styled.CreatorTitleWrap>
      {creatorData && Object.keys(creatorData).length !== 0 ? (
        <div>
          <Styled.CreatorContent>
            <Creator
              creator={creatorData[0].members[0]}
              starRate={creatorData[0].members[0].averageRating}
            />
          </Styled.CreatorContent>
        </div>
      ) : (
        <Styled.CreatorNull>
          <span>&apos;{queryCreator}&apos;</span>에 대한
          <br />
          검색 결과가 없습니다.
          <p>단어의 철자를 확인 해 주세요.</p>
        </Styled.CreatorNull>
      )}
    </>
  );
};

export default SearchCreator;
