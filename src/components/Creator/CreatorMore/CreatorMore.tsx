import { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CreatorProfile from '../CreatorProfile/CreatorProfile';
import * as Styled from './CreatorMore.styles';
import { SearchCreatorsInfiniteInfo } from '@/apis/search';

interface CreatorDatas {
  memberId: number;
  nickname: string;
  introduction: string;
  profileImageUrl: string;
  averageRating: number;
  tripRecordTotal: number;
  videoTotal: number;
}

const CreatorMore = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryCreator = searchParams.get('query');
  const [creatorsDatas, setCreatorsDatas] = useState<CreatorDatas[]>([]);

  const handleGoBack = () => {
    navigate(-1);
  };

  // const handleClick = (prop: string): string => {
  //   navigate(`/creator/${prop}`);
  //   return prop;
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (queryCreator !== null) {
          const data = await SearchCreatorsInfiniteInfo(queryCreator, 1, 4);
          setCreatorsDatas(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [queryCreator]);

  console.log(creatorsDatas);

  return (
    <>
      <Styled.CreatorTop>
        <IoIosArrowBack
          onClick={handleGoBack}
          style={{ fontSize: 20, marginRight: 8 }}
        />
        크리에이터 더보기
      </Styled.CreatorTop>

      <Styled.CreatorAllWrap>
        <button
          aria-label="go to Details"
          type="button"
          // onClick={() => handleClick(creatorsDatas.memberId)}
        >
          <CreatorProfile data={creatorsDatas[0]} />
        </button>
      </Styled.CreatorAllWrap>
    </>
  );
};

export default CreatorMore;
