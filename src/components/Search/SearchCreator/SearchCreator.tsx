import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SubTitle } from '@/components/common';
// import Creator from '@/components/common/Creator/Creator';
import * as Styled from './SearchCreator.styles';
import { SearchCreatorInfo } from '@/apis/search';

const SearchCreator = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryCreator = searchParams.get('query');
  const [creatorData, setCreatorData] = useState(null);

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
          {/*  여기 map 돌리기.. type 지정도 해야 함. 예외 처리만 했음
          <Styled.CreatorContent>
            <Creator creator={creatorData.members} starRate={creatorData.members.averageRating} />
          </Styled.CreatorContent>
             */}
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
